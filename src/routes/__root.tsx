import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // ==================== ENGLISH SEO (Next Level) ====================
      {
        name: "description",
        content:
          "Usama Forayaje — Full-Stack & Generative AI Web Developer | React Native Specialist. Expert in building intelligent, scalable web applications using React, Next.js, Node.js, TypeScript, LLMs, RAG pipelines, and AI Agents. Also crafts high-quality cross-platform mobile apps with React Native. Based in Bangladesh.",
      },
      {
        name: "keywords",
        content:
          "Usama Forayaje, Full Stack Developer Bangladesh, Generative AI Engineer, Gen AI Developer, React Native Developer Bangladesh, AI Engineer Dhaka, LLM Developer, RAG Pipeline Expert, AI Agent Developer, Next.js Developer, TypeScript Developer, React Developer Dhaka, Full Stack Engineer Bangladesh",
      },

      // ==================== BANGLA SEO (Next Level) ====================
      {
        name: "description",
        content:
          "উসামা ফরায়েজী — জেনারেটিভ এআই ও ফুল-স্ট্যাক ওয়েব ডেভেলপার | রিঅ্যাক্ট নেটিভ স্পেশালিস্ট। React, Next.js, TypeScript, LLM, RAG এবং AI Agent দিয়ে বুদ্ধিমান ও স্কেলেবল ওয়েব ও মোবাইল অ্যাপ্লিকেশন তৈরি করি। বাংলাদেশ ভিত্তিক।",
      },
      {
        name: "keywords",
        content:
          "উসামা ফরায়েজী, জেনারেটিভ এআই ডেভেলপার বাংলাদেশ, ফুল স্ট্যাক ডেভেলপার ঢাকা, রিঅ্যাক্ট নেটিভ ডেভেলপার, এআই ইঞ্জিনিয়ার বাংলাদেশ, LLM ডেভেলপার, RAG পাইপলাইন, Next.js ডেভেলপার বাংলাদেশ, টাইপস্ক্রিপ্ট ডেভেলপার",
      },

      { name: "author", content: "Usama Forayaje" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0b" },

      // Apple PWA
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: "Usama Forayaje" },

      // ==================== OPEN GRAPH (Next Level) ====================
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://usama.app" },
      {
        property: "og:title",
        content:
          "Usama Forayaje | Full-Stack & Generative AI Web Developer | React Native",
      },
      {
        property: "og:description",
        content:
          "Usama Forayaje — Full-Stack & Gen AI Web Developer specializing in React, Next.js, TypeScript, LLMs, RAG & AI Agents. Also builds React Native mobile apps. Based in Bangladesh. ইউসামা ফোরায়াজে — জেনারেটিভ এআই পাওয়ার্ড ফুল-স্ট্যাক ও রিঅ্যাক্ট নেটিভ ডেভেলপার।",
      },
      { property: "og:image", content: "https://usama.app/usamaforayaje.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "bn_BD" },

      // ==================== TWITTER CARD ====================
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Usama Forayaje | Full-Stack & Gen AI Web Developer | React Native",
      },
      {
        name: "twitter:description",
        content:
          "Full-Stack & Generative AI Web Developer | React Native Specialist. Building intelligent apps with LLMs, RAG & AI Agents in Bangladesh. ইউসামা ফোরায়াজে — জেনারেটিভ এআই ডেভেলপার।",
      },
      { name: "twitter:image", content: "https://usama.app/usamaforayaje.png" },

      // Main Title
      {
        title:
          "Usama Forayaje | Full-Stack & Generative AI Web Developer | React Native Specialist",
      },
    ],

    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/usamaforayaje.png" },
      { rel: "apple-touch-icon", href: "/usamaforayaje.png" },
      { rel: "canonical", href: "https://usama.app" },

      // ==================== HREFLANG (Bilingual SEO - Next Level) ====================
      { rel: "alternate", hreflang: "en", href: "https://usama.app/" },
      { rel: "alternate", hreflang: "bn", href: "https://usama.app/" },
      { rel: "alternate", hreflang: "x-default", href: "https://usama.app/" },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://usama.app/#person",
              name: "Usama Forayaje",
              url: "https://usama.app",
              image: "https://usama.app/usamaforayaje.png",
              jobTitle:
                "Full-Stack & Generative AI Web Developer | React Native Specialist",
              description:
                "Usama Forayaje is a Full-Stack & Generative AI Web Developer based in Bangladesh. He specializes in building intelligent web applications using React, Next.js, Node.js, TypeScript, LLMs, RAG pipelines, and AI Agents. He also develops cross-platform mobile apps with React Native.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BD",
              },
              sameAs: [
                "https://github.com/usama-forayeje",
                "https://www.linkedin.com/in/usama-forayaje",
                "https://x.com/forayaje",
                "https://www.instagram.com/usamaforayaje/",
                "https://www.facebook.com/usama.forayaje/",
                "https://www.behance.net/usamaforayaje",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://usama.app/#website",
              url: "https://usama.app",
              name: "Usama Forayaje",
              description:
                "Full-Stack & Generative AI Web Developer | React Native Specialist",
              publisher: {
                "@id": "https://usama.app/#person",
              },
              inLanguage: ["en-US", "bn-BD"],
            },
          ],
        }),
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
