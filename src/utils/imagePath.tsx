const BASE_PATH = process.env.NEXT_PUBLIC_API_URL || "";

export const getImagePath = (path: string) => {
  if (!path) return "";

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  let cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (cleanPath.startsWith(`${BASE_PATH}/`)) {
    return cleanPath;
  }

  return `${BASE_PATH}${cleanPath}`;
};
