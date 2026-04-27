const baseURL = "http://127.0.0.1:1337";

export const getImageUrl = (url?: string) => {
  if (!url) return "";
  return url.replace("http://localhost:1337", baseURL);
};
