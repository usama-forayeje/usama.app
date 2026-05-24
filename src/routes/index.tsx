import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

// Premium custom SVG icons
const Icons = {
  Github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.064 0-1.14.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.139-.925 2.064-2.064 2.064zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  X: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25l-7.451 8.52L4.5 2.25H1.5l7.5 8.625L1.5 21.75h3l7.5-8.625 7.5 8.625h3l-7.5-10.875 7.5-8.625h-3z" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Behance: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.83 2.558-5.955 5.858-5.955 3.035 0 4.76 1.717 5.007 4.125h-2.242c-.226-1.2-1.2-2.02-2.765-2.02-1.852 0-3.005 1.3-3.005 3.85 0 2.53 1.2 3.85 3.005 3.85 1.565 0 2.54-.82 2.765-2.02h2.242zM14.5 12.5c0-2.3-1.4-3.85-3.85-3.85-2.45 0-3.85 1.55-3.85 3.85 0 2.3 1.4 3.85 3.85 3.85 2.45 0 3.85-1.55 3.85-3.85zM7 12.5c0-1.3.65-2.1 1.8-2.1 1.15 0 1.8.8 1.8 2.1 0 1.3-.65 2.1-1.8 2.1-1.15 0-1.8-.8-1.8-2.1z" />
    </svg>
  ),
  // Real WhatsApp Icon
  WhatsApp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.242-.592-.487-.51-.67-.51-.173 0-.372.025-.571.025-.198 0-.52.074-.794.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.117 1.527 5.86L.5 24l6.3-1.65A11.9 11.9 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.746 0-3.45-.46-4.95-1.33l-.355-.21-3.75.98.99-3.63-.23-.36A9.7 9.7 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75 5.385 0 9.75 4.365 9.75 9.75 0 5.385-4.365 9.75-9.75 9.75z" />
    </svg>
  ),
}

export const Route = createFileRoute("/")({ component: Portfolio })

function Portfolio() {
  const socials = [
    {
      Icon: Icons.Github,
      label: "GitHub",
      href: "https://github.com/usama-forayeje",
    },
    {
      Icon: Icons.Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/usama-forayaje",
    },
    { Icon: Icons.X, label: "X", href: "https://x.com/forayaje" },
    {
      Icon: Icons.Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/usama.forayaje/",
    },
    {
      Icon: Icons.Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/usamaforayaje/",
    },
    {
      Icon: Icons.Behance,
      label: "Behance",
      href: "https://www.behance.net/usamaforayaje",
    },
  ]

  const whatsappNumber = "+8801766060906"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#0a0a0b] p-6">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_0.6px,transparent_1px)] bg-[length:4px_4px]" />

      {/* Responsive Container - LinkedIn Style Wide on Desktop */}
      <div className="relative z-10 w-full max-w-[94%] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[720px] 2xl:max-w-[780px]">
        {/* === Premium Card === */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-zinc-900/95 shadow-[0_30px_100px_-20px_rgb(0,0,0,0.7)] backdrop-blur-2xl">
          {/* === COVER PHOTO BANNER (Responsive - Taller on Desktop) === */}
          <div className="relative h-[170px] overflow-hidden sm:h-52 md:h-60 lg:h-[240px] xl:h-[260px] 2xl:h-[280px]">
            <picture>
              <source srcSet="/cover.webp" type="image/webp" />
              <img
                src="/cover.png"
                alt="Usama Forayaje - Full-Stack & Generative AI Web Developer | React Native Specialist"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
            {/* Strong gradient overlay for text readability and premium look */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          {/* Avatar - Clean circular photo (Responsive) */}
          <div className="absolute top-[102px] left-1/2 z-20 -translate-x-1/2 sm:top-[120px] md:top-[135px] lg:top-[165px] xl:top-[175px]">
            <div className="relative h-[92px] w-[92px] overflow-hidden rounded-full border-[5px] border-[#0a0a0b] shadow-2xl ring-1 ring-white/10 sm:h-[108px] sm:w-[108px] sm:border-[6px] md:h-[120px] md:w-[120px] lg:h-[130px] lg:w-[130px] lg:border-[7px]">
              <picture>
                <source srcSet="/usamaforayaje.webp" type="image/webp" />
                <img
                  src="/usamaforayaje.png"
                  alt="Usama Forayaje - Full-Stack & Generative AI Engineer and React Native Specialist from Bangladesh"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            {/* Status indicator */}
            <div className="absolute -right-0.5 -bottom-0.5 h-7 w-7 rounded-full border-[4px] border-[#0a0a0b] bg-emerald-500">
              <div className="absolute inset-[3px] animate-pulse rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Content (Responsive Padding + Wider on Desktop) */}
          <div className="px-5 pt-14 pb-7 text-center sm:px-8 sm:pt-20 sm:pb-9 md:px-10 lg:px-12">
            {/* Name */}
            <div className="space-y-1">
              <h1 className="text-3xl leading-none font-semibold tracking-[-2.2px] text-white sm:text-[34px] sm:tracking-[-2.4px]">
                Usama Forayaje
              </h1>
              <p className="text-[11.5px] font-medium tracking-[1.2px] text-zinc-400 sm:text-[12.5px]">
                FULL-STACK &amp; GEN AI WEB DEVELOPER
              </p>
              <p className="text-[10.5px] tracking-[1.5px] text-zinc-500 sm:text-[11.5px]">
                React Native (Cross-Platform)
              </p>
            </div>

            {/* New Powerful Description - Wider on Desktop */}
            <p className="mx-auto mt-4 max-w-[320px] text-[12.5px] leading-relaxed text-zinc-400 sm:mt-5 sm:max-w-[380px] sm:text-[13px] md:max-w-[460px] lg:max-w-[560px]">
              I build intelligent, scalable web applications powered by
              Generative AI — with full-stack strength in React, Next.js,
              Node.js, and TypeScript. I integrate LLMs, RAG pipelines, and AI
              Agents into real-world products. On the side, I also craft
              cross-platform mobile apps using React Native, ensuring a
              consistent experience from web to mobile. Clean UI/UX, strong
              APIs, and AI-first thinking drive my work.
            </p>

            {/* Under Construction Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-1.5 text-sm font-medium text-amber-400">
              <span>PORTFOLIO UNDER CONSTRUCTION</span>
            </div>

            {/* Socials (Responsive - Better spacing on Desktop) */}
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-[0.94] sm:h-10 sm:w-10"
                >
                  <Icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>

            {/* Real WhatsApp Button */}
            <div className="mt-6 sm:mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-11 w-full cursor-pointer gap-2.5 rounded-2xl bg-[#25D366] text-[14px] font-semibold tracking-[0.3px] text-white shadow-xl shadow-black/50 hover:bg-[#22c35e] active:scale-[0.985] sm:h-12 sm:text-[15px]"
                >
                  <Icons.WhatsApp className="h-4 w-4" />
                  CHAT ON WHATSAPP
                </Button>
              </a>
              <p className="mt-2 font-mono text-[9.5px] tracking-[2.5px] text-zinc-500 sm:text-[10px]">
                {whatsappNumber}
              </p>
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <div className="mt-6 space-y-1 text-center sm:mt-8">
          <p className="text-[10px] font-medium tracking-[3px] text-zinc-600">
            © {new Date().getFullYear()} USAMA FORAYAJE
          </p>
          <p className="text-[9px] tracking-widest text-zinc-700">USAMA.APP</p>
        </div>
      </div>
    </div>
  )
}
