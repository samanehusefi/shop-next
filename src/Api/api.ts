const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getShopData = async () => {
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    const response = await fetch(`${API_URL}/db.json`);

    if (!response.ok) {
      throw new Error("خطا در دریافت اطلاعات");
    }

    const data = await response.json();

    return {
      products: data.products,
      categories: data.categories,
      brands: data.brands,
      options: data.options,
    };
  }

  const [
    productsResponse,
    categoriesResponse,
    brandsResponse,
    optionsResponse,
  ] = await Promise.all([
    fetch(`${API_URL}/products`),
    fetch(`${API_URL}/categories`),
    fetch(`${API_URL}/brands`),
    fetch(`${API_URL}/options`),
  ]);

  if (
    !productsResponse.ok ||
    !categoriesResponse.ok ||
    !brandsResponse.ok ||
    !optionsResponse.ok
  ) {
    throw new Error("خطا در دریافت اطلاعات");
  }

  const [products, categories, brands, options] = await Promise.all([
    productsResponse.json(),
    categoriesResponse.json(),
    brandsResponse.json(),
    optionsResponse.json(),
  ]);

  return {
    products,
    categories,
    brands,
    options,
  };
};

export default API_URL;