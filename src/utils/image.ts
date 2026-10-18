/**
 * Helper to safely extract image URL string from either string paths or Next.js StaticImageData
 */
export function getImgSrc(img: unknown): string {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (
    typeof img === "object" &&
    img !== null &&
    "src" in img &&
    typeof (img as { src: unknown }).src === "string"
  ) {
    return (img as { src: string }).src;
  }
  return String(img);
}
