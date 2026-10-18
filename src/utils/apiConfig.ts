/**
 * Central API Configuration for iNetGlobal Next.js Application
 * Fallback to production API if NEXT_PUBLIC_API_BASE_URL is not set.
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.inetglobalservices.com/api";
