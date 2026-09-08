import { HandHeart, Mail, Phone } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HandHeart className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold text-foreground">Subsidio App</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Subsidio focalizado y billetera digital para las familias de la periferia de Lima. Devolvemos horas de
              vida, con dignidad, seguridad y transparencia.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">Contacto</span>
            <a
              href="mailto:contacto@subsidioapp.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              contacto@subsidioapp.com
            </a>
            <a
              href="tel:+5118000000"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (01) 800 0000
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} Subsidio App. Todos los derechos reservados.
          </p>
          <p>By leak</p>
        </div>
      </div>
    </footer>
  )
}
