/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "default",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
  eslint: {
    dirs: ["src", "lib", "app"],
  },
};
