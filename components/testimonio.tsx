import Image from "next/image"
import { Quote } from "lucide-react"

export function Testimonio() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-border/70 bg-gradient-to-br from-accent/40 to-card p-8 shadow-sm md:grid-cols-[auto_1fr] md:p-12">
          <div className="mx-auto flex flex-col items-center gap-4 text-center md:mx-0">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-card shadow-sm">
              <Image
                src="/images/fernanda.png"
                alt="Retrato de Fernanda, beneficiaria del programa"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground">Fernanda, 28 años</p>
              <p className="text-sm text-muted-foreground">Villa El Salvador</p>
            </div>
          </div>

          <figure className="flex flex-col gap-4">
            <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
            <blockquote className="text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
              &ldquo;Mi día empieza a las 4:30 a.m. entre mototaxi, combi y tren para llegar al trabajo. Con un subsidio
              que cubra mis pasajes y el agua, no solo ahorro dinero: recupero horas para estar con mi familia y llego
              más tranquila y segura.&rdquo;
            </blockquote>
            <figcaption className="text-sm text-muted-foreground">
              Ama de casa y trabajadora de call center. Historia representativa de las familias que buscamos apoyar.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
