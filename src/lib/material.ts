// Material opcional (foto y CV). Si no está, el sitio se ve completo sin él.
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { ImageMetadata } from "astro";
import type { Lang } from "./i18n";

// Foto de Laura: basta con dejar `src/assets/laura.jpg` (o .jpeg, .png, .webp, .avif).
const photos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/laura.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);
export const photo: ImageMetadata | undefined = Object.values(photos)[0]?.default;

// CV: `public/cv/laura-riera-alonso-cv.pdf` (español) y `-en.pdf` (inglés, opcional).
const cvFiles: Record<Lang, string> = {
  es: "laura-riera-alonso-cv.pdf",
  en: "laura-riera-alonso-cv-en.pdf",
};

export interface Cv {
  href: string;
  /** Idioma del PDF; puede no coincidir con el de la página si solo hay uno. */
  lang: Lang;
}

function cvExists(file: string): boolean {
  return existsSync(join(process.cwd(), "public", "cv", file));
}

export function cvFor(lang: Lang): Cv | undefined {
  if (cvExists(cvFiles[lang])) return { href: `/cv/${cvFiles[lang]}`, lang };
  const other: Lang = lang === "es" ? "en" : "es";
  if (cvExists(cvFiles[other])) return { href: `/cv/${cvFiles[other]}`, lang: other };
  return undefined;
}
