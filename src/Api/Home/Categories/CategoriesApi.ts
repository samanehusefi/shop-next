import type { ICategory } from "../../../Types/Home/ICategory";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getCategories = async (): Promise<ICategory[]> => {
  const isProduction = process.env.NODE_ENV === "production";

  const response = await fetch(
    isProduction ? `${API_URL}/db.json` : `${API_URL}/categories`,
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات Categories");
  }

  const data = await response.json();

  return isProduction ? data.categories : data;
};
