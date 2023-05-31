/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// svg 포맷을 다루기 위해 webpack 로더 추가
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}
