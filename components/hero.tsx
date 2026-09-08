import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-accent/40 to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-accent-foreground">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Programa oficial de subsidios sociales
          </span>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Encuentra respuestas claras sobre tu subsidio
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Resolvemos tus dudas sobre registro, elegibilidad y cobros. Escribe tu pregunta y nuestro buscador te
            mostrará las respuestas más parecidas al instante.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
            <Image
              src="/images/hero-subsidios.png"
              alt="Ilustración de familias apoyándose mutuamente y recibiendo ayuda social"
              width={720}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
