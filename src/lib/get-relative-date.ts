type RelativeUnit = "day" | "month" | "year";

function diffInDays(from: Date, to: Date): number {
  const MS_PER_DAY = 86_400_000;
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / MS_PER_DAY);
}

function diffInMonths(earlier: Date, later: Date): number {
  let months =
    (later.getFullYear() - earlier.getFullYear()) * 12 +
    (later.getMonth() - earlier.getMonth());

  if (later.getDate() < earlier.getDate()) months--;

  return months;
}

export function formatRelativeDate(
  date: Date | string | number,
  locale: string = "fr",
  now: Date = new Date()
): string {
  const target = new Date(date);
  if (Number.isNaN(target.getTime())) return "";

  const days = diffInDays(now, target);
  const sign = days < 0 ? -1 : 1;

  const [earlier, later] = days < 0 ? [target, now] : [now, target];
  const months = diffInMonths(earlier, later);

  let value: number;
  let unit: RelativeUnit;

  if (months >= 12) {
    value = Math.floor(months / 12);
    unit = "year";
  } else if (months >= 1) {
    value = months;
    unit = "month";
  } else {
    value = Math.abs(days);
    unit = "day";
  }

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "always" });
  return rtf.format(sign * value, unit);
}
