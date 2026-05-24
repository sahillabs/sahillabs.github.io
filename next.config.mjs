/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (sahillabs.github.io — a root user site, so no basePath).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
