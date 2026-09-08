import { Loader2 } from "lucide-react"

export function ResultsSkeleton() {
  return (
    <div className="flex flex-col gap-3" role="status" aria-live="polite">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
        Buscando respuestas similares…
      </div>
      {[0, 1, 2].map((index) => (
        <div key={index} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="h-5 w-2/3 animate-pulse rounded-full bg-muted" />
        </div>
      ))}
    </div>
  )
}
