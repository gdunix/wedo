/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: [
    "nextui.org/images",
    "cdn.naturettl.com",
    "https://howefarmstn.com/",
    "cdn0.hitched.co.uk",
    "cdn.qumd.gr"
  ],
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/users",
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
