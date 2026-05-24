import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { nitro } from "nitro/vite"
import { VitePWA } from "vite-plugin-pwa"

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["usamaforayaje.png", "usamaforayaje.webp", "cover.png", "cover.webp"],
      manifest: {
        name: "Usama Forayaje — Full-Stack & Gen AI Developer",
        short_name: "Usama Forayaje",
        description:
          "Full-Stack & Gen AI Web Developer | React Native Specialist. Building intelligent applications with React, Next.js, TypeScript, LLMs, RAG & AI Agents.",
        theme_color: "#0a0a0b",
        background_color: "#0a0a0b",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/usamaforayaje.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/usamaforayaje.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/usamaforayaje.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/usamaforayaje.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
      workbox: {
        // TanStack Start + Nitro uses .output/public instead of dist
        globDirectory: '.output/public',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        globIgnores: [
          '**/node_modules/**/*',
          'cover.png', // Large image (2MB+) - don't precache
          'sw.js',
          'workbox-*.js',
        ],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Allow up to 5MB if needed
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})

export default config
