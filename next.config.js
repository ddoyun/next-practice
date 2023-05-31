/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 바벨말고 SWC로 교체..
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // svg 포맷을 다루기 위해 webpack 로더 추가
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}

module.exports = nextConfig