/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
       {
      protocol: "https",
      hostname: "**",
    },
      
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@better-auth/kysely-adapter"],
  },
};

export default nextConfig;
