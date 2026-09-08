import { Clock, Wallet, ShieldAlert } from "lucide-react"

const PROBLEMS = [
  {
    icon: Clock,
    title: "Horas de vida perdidas",
    description:
      "Familias de la periferia gastan entre 3 y 4 horas diarias en combis y buses saturados para llegar al trabajo, tiempo que le quitan a los suyos.",
  },
  {
    icon: Wallet,
    title: "Gasto desproporcionado",
    description:
      "Pagan varios pasajes informales al día y hasta 3 o 4 veces más por servicios básicos como el agua, golpeando una economía ya frágil.",
  },
  {
    icon: ShieldAlert,
    title: "Inseguridad en el trayecto",
    description:
      "Salir de casa a las 4:30 a.m. hacia paraderos poco vigilados expone a las personas a asaltos y a un estrés constante.",
  },
]

export function Problema() {
  return (
    <section id="problema" className="border-b border-border/70 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">El problema</span>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            El crecimiento urbano desordenado pasa factura cada día
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            En Lima, la expansión de asentamientos informales dejó a miles de familias sin planificación ni servicios.
            El transporte desarticulado y los costos elevados perpetúan la desigualdad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-highlight/25 text-highlight-foreground">
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
