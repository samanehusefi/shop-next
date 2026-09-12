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

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (!BASE_PATH) {
    return cleanPath;
  }

  if (cleanPath === BASE_PATH || cleanPath.startsWith(`${BASE_PATH}/`)) {
    return cleanPath;
  }

  return `${BASE_PATH}${cleanPath}`;
};
