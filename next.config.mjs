/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "randomuser.me",
      pathname: '/api/portraits/**',
    }]
  },
  devIndicators: {
    // In Next.js 15, this is how you manage the indicator
    appIsrStatus: false,
  }
};

export default nextConfig;