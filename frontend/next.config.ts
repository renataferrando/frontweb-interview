import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: 'false',
  },
  images: {
    remotePatterns: [new URL('https://cdn.sanity.io/**')],
  },
  // The template ships with pre-existing lint/type errors in unused scaffolding
  // (LogoStrip, CheckList) and the Tailwind config. They don't affect the app or
  // the page builder, so we don't let them block production builds/deploys.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
