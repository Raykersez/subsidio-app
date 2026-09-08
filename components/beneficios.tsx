import { Bus, Droplets, Store, HeartHandshake, Clock, Eye } from "lucide-react"

const BENEFITS = [
  {
    icon: Bus,
    title: "Transporte subsidiado",
    description: "Pasajes en combi, corredores, Metropolitano, tren y aplicativos de viaje a un costo justo.",
  },
  {
    icon: Droplets,
    title: "Servicios básicos",
    description: "Apoyo para el pago de agua y luz, evitando que pagues varias veces su valor real.",
  },
  {
    icon: Store,
    title: "Red de aliados",
    description: "Bodegas, minimarkets, supermercados y billeteras digitales que aceptan tu subsidio.",
  },
  {
    icon: Clock,
    title: "Tiempo para tu familia",
    description: "Menos horas y estrés en el traslado significan más momentos compartidos en casa.",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    description: "Un sistema auditable: cada depósito y consumo queda registrado y puedes revisarlo.",
  },
  {
    icon: HeartHandshake,
    title: "Dignidad e inclusión",
    description: "Estabilidad a largo plazo para las comunidades vulnerables, no solo un pago puntual.",
  },
]

export function Beneficios() {
  return (
    <section id="beneficios" className="border-b border-border/70 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Beneficios</span>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Más que transporte: una plataforma que devuelve dignidad
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Combatimos el gasto desproporcionado y la pérdida de tiempo para brindar tranquilidad, seguridad y
            estabilidad a las familias de la periferia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
