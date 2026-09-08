import Image from "next/image"

const STEPS = [
  {
    step: "01",
    title: "Validación en tu barrio",
    description:
      "Los comedores y espacios de apoyo vecinal funcionan como centros físicos de registro y validación, cerca de tu casa y sin trámites inaccesibles.",
  },
  {
    step: "02",
    title: "Recibe tu tarjeta y billetera",
    description:
      "Activas tu tarjeta de subsidio vinculada a una billetera digital cerrada: el saldo solo se usa en transporte y servicios habilitados.",
  },
  {
    step: "03",
    title: "Paga y ahorra en tu día a día",
    description:
      "Úsala en combis, corredores, Metropolitano, tren y aliados como bodegas y minimarkets. Cada movimiento queda registrado de forma transparente.",
  },
  {
    step: "04",
    title: "Construye tu historial",
    description:
      "Tu historial de transacciones genera confianza y, a futuro, puede abrirte la puerta a créditos o al título de propiedad de tu lote.",
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Cómo funciona</span>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Un subsidio focalizado, fácil de usar y transparente
            </h2>
            <ol className="mt-8 flex flex-col gap-6">
              {STEPS.map(({ step, title, description }) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {step}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-accent/40 to-card p-6 shadow-sm">
              <Image
                src="/images/tarjeta-subsidio.png"
                alt="Tarjeta de subsidio Subsidio App con pago sin contacto"
                width={640}
                height={480}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
