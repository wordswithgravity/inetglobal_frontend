/**
 * Helper to safely extract image URL string from either string paths or Next.js StaticImageData
 */
export function getImgSrc(img: any): string {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && typeof img.src === "string") return img.src;
  return String(img);
}
