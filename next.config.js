/** @type {import('next').NextConfig} */

const withMakeswift = require("@makeswift/runtime/next/plugin")()

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx','ts'],
}

module.exports = withMakeswift(nextConfig)
