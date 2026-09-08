"use client"

import { useState, type FormEvent } from "react"
import { IdCard, Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Estado = "idle" | "loading" | "elegible" | "no-elegible" | "error"

const DNI_LENGTH = 8

export function ConsultaDocumento() {
  const [dni, setDni] = useState("")
  const [estado, setEstado] = useState<Estado>("idle")
  const [mensaje, setMensaje] = useState("")

  function handleChange(value: string) {
    // Solo dígitos, máximo 8 caracteres
    const soloDigitos = value.replace(/\D/g, "").slice(0, DNI_LENGTH)
    setDni(soloDigitos)
    if (estado !== "idle") {
      setEstado("idle")
      setMensaje("")
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (dni.length !== DNI_LENGTH) {
      setEstado("error")
      setMensaje("El número de documento debe tener exactamente 8 dígitos.")
      return
    }

    setEstado("loading")
    setMensaje("")

    // Simulación de consulta al padrón del programa
    window.setTimeout(() => {
      if (dni === "00000000") {
        setEstado("error")
        setMensaje("Documento no válido. Verifica el número e inténtalo nuevamente.")
        return
      }

      // Regla temporal: DNI par pertenece al programa, impar no (por ahora)
      const perteneceAlPrograma = Number(dni) % 2 === 0
      if (perteneceAlPrograma) {
        setEstado("elegible")
        setMensaje(
          "¡Buenas noticias! Este documento figura como beneficiario del programa. Acércate a tu comedor o espacio vecinal para activar tu tarjeta.",
        )
      } else {
        setEstado("no-elegible")
        setMensaje(
          "Este documento aún no figura en el padrón del programa. Puedes registrarte en tu comedor o espacio vecinal para ser evaluado.",
        )
      }
    }, 1200)
  }

  const loading = estado === "loading"

  return (
    <section id="consulta" className="border-b border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Consulta de elegibilidad</span>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Verifica si perteneces al programa
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ingresa tu número de documento (DNI) de 8 dígitos y comprueba al instante si figuras como beneficiario del
            subsidio.
          </p>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <IdCard
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={dni}
                onChange={(event) => handleChange(event.target.value)}
                minLength={DNI_LENGTH}
                maxLength={DNI_LENGTH}
                placeholder="Ej. 12345678"
                aria-label="Número de documento"
                aria-invalid={estado === "error"}
                className="h-14 w-full rounded-2xl border border-input bg-card pl-12 pr-4 text-base tracking-widest text-foreground shadow-sm outline-none transition-colors placeholder:tracking-normal placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <Button type="submit" disabled={loading} className="h-14 rounded-2xl px-8 text-base font-semibold sm:w-auto">
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Consultando
                </>
              ) : (
                "Buscar"
              )}
            </Button>
          </form>

          <p className="mt-2 pl-1 text-xs text-muted-foreground">{dni.length}/{DNI_LENGTH} dígitos</p>

          <div aria-live="polite">
            {estado === "error" && <ResultCard tone="error" icon={AlertCircle} title="No se pudo validar" message={mensaje} />}
            {estado === "elegible" && (
              <ResultCard tone="success" icon={CheckCircle2} title="Perteneces al programa" message={mensaje} />
            )}
            {estado === "no-elegible" && (
              <ResultCard tone="warning" icon={XCircle} title="Aún no figuras en el padrón" message={mensaje} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

type ResultCardProps = {
  tone: "success" | "warning" | "error"
  icon: typeof CheckCircle2
  title: string
  message: string
}

const TONE_STYLES: Record<ResultCardProps["tone"], string> = {
  success: "border-primary/30 bg-primary/5 text-primary",
  warning: "border-highlight/40 bg-highlight/10 text-highlight-foreground",
  error: "border-destructive/30 bg-destructive/5 text-destructive",
}

function ResultCard({ tone, icon: Icon, title, message }: ResultCardProps) {
  return (
    <div className={`mt-6 flex gap-3 rounded-2xl border p-4 ${TONE_STYLES[tone]}`}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm leading-relaxed text-foreground/80">{message}</p>
      </div>
    </div>
  )
}
