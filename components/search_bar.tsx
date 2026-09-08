"use client"

import type { FormEvent } from "react"
import { Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const EXAMPLE_QUESTIONS = [
  "¿Qué es Subsidio App?",
  "¿Cómo saber si pertenezco al programa?",
  "¿Qué transportes puedo subsidiar?",
  "¿El subsidio es transparente?",
]

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  onExampleClick: (example: string) => void
  loading: boolean
}

export function SearchBar({ value, onChange, onSearch, onExampleClick, loading }: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch()
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="¿Tienes alguna pregunta? Busca respuestas similares"
            aria-label="Buscar preguntas"
            className="h-14 w-full rounded-2xl border border-input bg-card pl-12 pr-4 text-base text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="h-14 rounded-2xl px-8 text-base font-semibold sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Buscando
            </>
          ) : (
            "Buscar"
          )}
        </Button>
      </form>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Ejemplos de búsqueda
        </span>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_QUESTIONS.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => onExampleClick(example)}
              disabled={loading}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
