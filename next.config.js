/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/movies/:id",
        destination: "/films/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
