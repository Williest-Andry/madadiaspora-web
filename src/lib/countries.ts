import { getCountries } from "libphonenumber-js";

export type CountryOption = {
  value: string;
  label: string;
};

function getFlagEmoji(code: string): string {
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((char) => 127397 + char.charCodeAt(0))
  );
}

export function getCountryOptions(locale: string = "fr"): CountryOption[] {
  const displayNames = new Intl.DisplayNames([locale], { type: "region" });

  return getCountries()
    .map((code) => ({ code, name: displayNames.of(code) ?? code }))
    .sort((a, b) => a.name.localeCompare(b.name, locale))
    .map(({ code, name }) => ({
      value: name,
      label: `${getFlagEmoji(code)} ${name}`,
    }));
}
