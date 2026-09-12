import type { IBrand } from "../../../Types/Home/IBrand";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getBrands = async (): Promise<IBrand[]> => {
  const isProduction = process.env.NODE_ENV === "production";

  const response = await fetch(
    isProduction
      ? `${API_URL}/db.json`
      : `${API_URL}/brands`,
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات Brands");
  }

  const data = await response.json();

  return isProduction ? data.brands : data;
};