import { HandHeart } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <HandHeart className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight text-foreground">Subsidio App</span>
          <span className="text-xs text-muted-foreground">Apoyo social al alcance de todos</span>
        </div>
      </div>
    </header>
  )
}
