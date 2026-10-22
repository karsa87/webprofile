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

  // Trailing slash generates 'profile/index.html' instead of 'profile.html'
  // This is the bulletproof standard for cPanel/Apache, guaranteeing 0 errors on direct URL visits!
  trailingSlash: true,
};

export default nextConfig;
