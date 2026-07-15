/* Folio line — running header/footer with "page number", like a printed magazine. */
export default function Folio({ page, title }) {
  return (
    <div className="kicker flex items-center justify-between text-ink-soft pb-3 mb-10 border-b border-ink/20">
      <span>The Field Report — Vol. 01</span>
      <span className="hidden sm:inline">{title}</span>
      <span className="text-signal">{page}</span>
    </div>
  )
}
