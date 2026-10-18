import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.inetglobalservices.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/aboutus", destination: "/about", permanent: true },
      {
        source: "/whole-sale-voice",
        destination: "/wholesale-voice",
        permanent: true,
      },
      {
        source: "/whole-sale-message",
        destination: "/wholesale-message",
        permanent: true,
      },
      {
        source: "/wholesale-sms",
        destination: "/wholesale-message",
        permanent: true,
      },
      {
        source: "/whole-sale-sms",
        destination: "/wholesale-message",
        permanent: true,
      },
      {
        source: "/whatsapp-business",
        destination: "/whatsapp",
        permanent: true,
      },
      {
        source: "/whatsappbusiness",
        destination: "/whatsapp",
        permanent: true,
      },
      {
        source: "/advance_sms_portal",
        destination: "/advance-sms-portal",
        permanent: true,
      },
      {
        source: "/advancesmsportal",
        destination: "/advance-sms-portal",
        permanent: true,
      },
      {
        source: "/sms-portal",
        destination: "/advance-sms-portal",
        permanent: true,
      },
      { source: "/otp_sms", destination: "/otp-sms-services", permanent: true },
      { source: "/otp", destination: "/otp-sms-services", permanent: true },
      {
        source: "/virtualnumbersdid",
        destination: "/virtual-numbers-did",
        permanent: true,
      },
      {
        source: "/virtual-number-did",
        destination: "/virtual-numbers-did",
        permanent: true,
      },
      {
        source: "/virtualnumberdid",
        destination: "/virtual-numbers-did",
        permanent: true,
      },
      { source: "/virtual_did", destination: "/virtual-did", permanent: true },
      {
        source: "/virtual-numbers",
        destination: "/virtual-did",
        permanent: true,
      },
      { source: "/virtualdid", destination: "/virtual-did", permanent: true },
      {
        source: "/international-number",
        destination: "/virtual-did",
        permanent: true,
      },
      {
        source: "/international-numbers",
        destination: "/virtual-did",
        permanent: true,
      },
      {
        source: "/internationalnumberdid",
        destination: "/virtual-did",
        permanent: true,
      },
      { source: "/did", destination: "/virtual-did", permanent: true },
      { source: "/did-portal", destination: "/virtual-did", permanent: true },
      { source: "/dailer", destination: "/dialer", permanent: true },
      { source: "/dialer-solution", destination: "/dialer", permanent: true },
      { source: "/dailer-solution", destination: "/dialer", permanent: true },
      { source: "/dailersolution", destination: "/dialer", permanent: true },
      {
        source: "/call-center-dialer",
        destination: "/dialer",
        permanent: true,
      },
      { source: "/aivoice", destination: "/ai-voice", permanent: true },
      { source: "/ai_voice", destination: "/ai-voice", permanent: true },
      { source: "/rcs-messaging", destination: "/rcs", permanent: true },
      {
        source: "/rcs-business-messaging",
        destination: "/rcs",
        permanent: true,
      },
      { source: "/rcsbusinessmessaging", destination: "/rcs", permanent: true },
      { source: "/livechat", destination: "/livechat-plugin", permanent: true },
      {
        source: "/live-chat",
        destination: "/livechat-plugin",
        permanent: true,
      },
      { source: "/voicecalls", destination: "/voice-calls", permanent: true },
      { source: "/voice-services", destination: "/voice", permanent: true },
      {
        source: "/messaging-services",
        destination: "/messaging",
        permanent: true,
      },
      { source: "/sms", destination: "/messaging", permanent: true },
      {
        source: "/omnichannel-services",
        destination: "/omnichannel",
        permanent: true,
      },
      {
        source: "/omnichannel-messaging",
        destination: "/omnichannel",
        permanent: true,
      },
      {
        source: "/privacypolicy",
        destination: "/privacy-policy",
        permanent: true,
      },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      {
        source: "/termsofservice",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/terms-of-services",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/termsofservices",
        destination: "/terms-of-service",
        permanent: true,
      },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      {
        source: "/securtiyandcomplience",
        destination: "/security-and-compliance",
        permanent: true,
      },
      {
        source: "/securityandcompliance",
        destination: "/security-and-compliance",
        permanent: true,
      },
      {
        source: "/security-compliance",
        destination: "/security-and-compliance",
        permanent: true,
      },
      {
        source: "/security",
        destination: "/security-and-compliance",
        permanent: true,
      },
      { source: "/adminlogin", destination: "/admin", permanent: true },
      { source: "/admin/login", destination: "/admin", permanent: true },
      {
        source: "/admin-dashboard",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/admin/dashboard",
        destination: "/dashboard",
        permanent: true,
      },
      { source: "/blogs", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
