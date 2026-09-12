const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getProducts = async () => {
  const isProduction = process.env.NODE_ENV === "production";

  const response = await fetch(
    isProduction ? `${API_URL}/db.json` : `${API_URL}/products`,
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات products");
  }

  const data = await response.json();

  return isProduction ? data.products : data;
};
