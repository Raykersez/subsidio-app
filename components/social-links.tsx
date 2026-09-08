const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: "/icons/instagram.svg" },
  { label: "Facebook", href: "https://facebook.com", icon: "/icons/facebook.svg" },
  { label: "TikTok", href: "https://tiktok.com", icon: "/icons/tiktok.svg" },
  { label: "YouTube", href: "https://youtube.com", icon: "/icons/youtube.svg" },
]

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold text-foreground">Síguenos</span>
      <div className="flex flex-wrap gap-3">
        {SOCIALS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon || "/placeholder.svg"} alt="" aria-hidden="true" className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  )
}
