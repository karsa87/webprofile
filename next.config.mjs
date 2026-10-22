/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables Static HTML Export (generates pure HTML/CSS/JS in the 'dist' directory)
  // Perfectly compatible with cPanel, Apache, Nginx, Vercel, and Cloudflare Pages
  output: 'export',
  distDir: 'dist',

  // Required for static export: images are served statically without a Node.js image optimizer server
  images: {
    unoptimized: true,
  },

  // Generates trailing slash or clean URL resolution
  trailingSlash: false,
};

export default nextConfig;
