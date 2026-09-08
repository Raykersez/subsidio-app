"use client"

import { useRef, useState } from "react"
import { SearchX } from "lucide-react"
import { SearchBar } from "@/components/search_bar"
import { Acordeon } from "@/components/acordeon"
import { ResultsSkeleton } from "@/components/results-skeleton"
import { faqs, type Faq } from "@/lib/faq-data"

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function scoreFaq(faq: Faq, query: string) {
  const q = normalize(query)
  const terms = q.split(/\s+/).filter((t) => t.length > 2)
  if (terms.length === 0) return 0

  const haystack = normalize(`${faq.question} ${faq.answer} ${faq.keywords.join(" ")}`)
  let score = 0
  for (const term of terms) {
    if (haystack.includes(term)) score += 1
  }
  for (const keyword of faq.keywords) {
    if (q.includes(normalize(keyword))) score += 2
  }
  return score
}

export function SearchExperience() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [results, setResults] = useState<Faq[]>([])
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function runSearch(term: string) {
    const trimmed = term.trim()
    if (!trimmed) return

    setLoading(true)
    setHasSearched(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      const ranked = faqs
        .map((faq) => ({ faq, score: scoreFaq(faq, trimmed) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((entry) => entry.faq)

      setResults(ranked)
      setLoading(false)
    }, 850)
  }

  function handleExampleClick(example: string) {
    setQuery(example)
    runSearch(example)
  }

  return (
    <section id="preguntas" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">Preguntas frecuentes</span>
        <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Resuelve tus dudas sobre el subsidio
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Escribe tu pregunta y nuestro buscador te mostrará las respuestas más parecidas al instante.
        </p>
      </div>
      <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={() => runSearch(query)}
          onExampleClick={handleExampleClick}
          loading={loading}
        />
      </div>

      <div className="mt-8">
        {loading && <ResultsSkeleton />}

        {!loading && hasSearched && results.length > 0 && (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? "respuesta encontrada" : "respuestas encontradas"}
            </p>
            <Acordeon items={results} />
          </div>
        )}

        {!loading && hasSearched && results.length === 0 && (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-12 text-center">
            <SearchX className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
            <p className="font-medium text-foreground">No encontramos respuestas similares</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Intenta con otras palabras o usa uno de los ejemplos de búsqueda de arriba.
            </p>
          </div>
        )}

        {!hasSearched && (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">Preguntas frecuentes</p>
            <Acordeon items={faqs.slice(0, 4)} />
          </div>
        )}
      </div>
    </section>
  )
}
