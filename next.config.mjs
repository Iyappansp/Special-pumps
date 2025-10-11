/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Core slug migrations -> 301
      { source: '/products/thermic-fluid-hot-oil-pump', destination: '/products/thermic-fluid', permanent: true },
      { source: '/products/process-pump', destination: '/products/chemical-process', permanent: true },
      { source: '/products/polypropylene-pump', destination: '/products/polypropylene', permanent: true },
      { source: '/products/horizontal-non-clog-pump', destination: '/products/non-clog', permanent: true },
      { source: '/products/filter-press-pump', destination: '/products/filter-press', permanent: true },
      { source: '/products/back-pullout-process-pump', destination: '/products/chemical-process', permanent: true },
      { source: '/products/stainless-steel-pump', destination: '/products/stainless-steel', permanent: true },

      // Former categories mapped to closest retained category
      { source: '/products/high-pressure-multistage-pump', destination: '/products/chemical-process', permanent: true },
      { source: '/products/rotary-gear-pump', destination: '/products/chemical-process', permanent: true },
      { source: '/products/dewatering-mud-pump', destination: '/products/non-clog', permanent: true },
    ]
  },
};

export default nextConfig;
