import { HandHeart } from "lucide-react"

const NAV = [
  { label: "El problema", href: "#problema" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas", href: "#preguntas" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <HandHeart className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-foreground">Subsidio App</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Devolvemos horas de vida a tu familia</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#preguntas"
          className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Consultar
        </a>
      </div>
    </header>
  )
}
