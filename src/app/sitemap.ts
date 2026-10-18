import type { MetadataRoute } from "next";
import { API_BASE_URL } from "../utils/apiConfig";

const BASE_URL = "https://www.inetglobalservices.com";

interface ApiBlogItem {
  slug: string;
  updatedAt?: string;
  date?: string;
  status?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static canonical public routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Voice Services
    {
      url: `${BASE_URL}/voice`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wholesale-voice`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/voice-calls`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ai-voice`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dialer`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Virtual Numbers & DID
    {
      url: `${BASE_URL}/virtual-numbers-did`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/virtual-did`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Messaging Services
    {
      url: `${BASE_URL}/messaging`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wholesale-message`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/advance-sms-portal`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/otp-sms-services`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Omnichannel & Social Channels
    {
      url: `${BASE_URL}/omnichannel`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/whatsapp`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rcs`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/email`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/livechat-plugin`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/telegram`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/facebook`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/instagram`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tiktok`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Blog Index
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "daily",
      priority: 0.7,
    },
    // Legal & Security
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/security-and-compliance`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // 2. Dynamic published blog routes from API
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const blogs: ApiBlogItem[] = data.blogs || [];
      const blogRoutes: MetadataRoute.Sitemap = blogs
        .filter((b) => !b.status || b.status === "published")
        .map((b) => ({
          url: `${BASE_URL}/blog/${b.slug}`,
          lastModified: b.updatedAt
            ? new Date(b.updatedAt)
            : b.date
              ? new Date(b.date)
              : undefined,
          changeFrequency: "weekly" as const,
          priority: 0.7,
        }));
      return [...staticRoutes, ...blogRoutes];
    }
  } catch {
    // Graceful fallback to static routes if API is temporarily unavailable
  }

  return staticRoutes;
}
