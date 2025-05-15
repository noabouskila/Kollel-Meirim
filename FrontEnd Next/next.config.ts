import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // langues
  i18n: {
    locales: ['fr', 'he'],
    defaultLocale: 'fr',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;


