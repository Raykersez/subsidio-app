import Image from "next/image"
import { ShieldCheck, ArrowRight } from "lucide-react"

const STATS = [
  { value: "3–4 h", label: "diarias perdidas en traslados que buscamos recuperar" },
  { value: "NSE D y E", label: "familias vulnerables a las que llega el subsidio" },
  { value: "100%", label: "de tus movimientos con historial claro y transparente" },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-accent/40 to-background"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-accent-foreground">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Subsidio focalizado + billetera digital
          </span>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Menos gasto en transporte y servicios. Más horas con tu familia.
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Subsidio App es una tarjeta y billetera digital que subsidia tus pasajes en combi, corredores,
            Metropolitano y tren, además de servicios básicos, para las familias que más lo necesitan en la periferia de
            Lima.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#como-funciona"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Conoce cómo funciona
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#preguntas"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Resolver mis dudas
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
            <Image
              src="/images/hero-familia.png"
              alt="Madre trabajadora en la periferia de Lima al amanecer sosteniendo su tarjeta de subsidio"
              width={720}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <dl className="grid gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1 text-center sm:text-left">
              <dt className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground text-pretty">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
