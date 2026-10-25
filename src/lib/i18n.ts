export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];

/** Texto en los dos idiomas. */
export type T<V = string> = Record<Lang, V>;

export type PageKey = "home" | "tfm" | "tfg" | "abbvie";

const paths: Record<PageKey, string> = {
  home: "/",
  tfm: "/tfm/",
  tfg: "/tfg/",
  abbvie: "/abbvie/",
};

/** Ruta de una página en un idioma. El español va en la raíz. */
export function pathFor(page: PageKey, lang: Lang, hash = ""): string {
  const base = lang === "es" ? paths[page] : `/en${paths[page]}`;
  return `${base}${hash}`;
}

const locales: Record<Lang, string> = { es: "es-ES", en: "en-GB" };

/** Número con separador de miles siempre (2.220 / 2,220) y decimales fijos. */
export function num(value: number, lang: Lang, decimals = 0): string {
  return new Intl.NumberFormat(locales[lang], {
    useGrouping: "always",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Porcentaje con espacio fino delante del símbolo en español (92,5 %) y pegado en inglés. */
export function pct(value: number, lang: Lang, decimals = 1): string {
  const n = num(value, lang, decimals);
  return lang === "es" ? `${n} %` : `${n}%`;
}
