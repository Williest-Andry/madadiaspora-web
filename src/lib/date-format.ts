export function formatDateFr(iso: string): string {
  const formatted = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

  return formatted.replace(/(\d+ )(\p{L})/u, (_, d, l) => d + l.toUpperCase());
}
