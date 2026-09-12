const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getGrouping = async () => {
  const isProduction = process.env.NODE_ENV === "production";

  const response = await fetch(
    isProduction ? `${API_URL}/db.json` : `${API_URL}/grouping`,
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات Grouping");
  }

  const data = await response.json();

  return isProduction ? data.grouping : data;
};
