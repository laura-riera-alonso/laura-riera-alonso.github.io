// Comprueba el contraste WCAG de los pares de tokens de color (claro y oscuro).
// Uso: node scripts/contrast.mjs  -> sale con código 1 si algún par no llega a su mínimo.
import { readFileSync } from "node:fs";
import { parse, wcagContrast } from "culori";

const css = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");

// Las declaraciones van desde el comentario marcador hasta la llave que cierra su bloque.
function block(marker) {
  const start = css.indexOf(marker);
  if (start < 0) throw new Error(`No encuentro ${marker}`);
  return css.slice(start, css.indexOf("}", start));
}

function tokens(text) {
  const out = {};
  for (const m of text.matchAll(/--([\w-]+):\s*(oklch\([^)]*\))/g)) out[m[1]] = m[2];
  return out;
}

const light = tokens(block("/* tokens:light */"));
const dark = { ...light, ...tokens(block("/* tokens:dark */")) };

// [texto, fondo, mínimo]
const pairs = [
  ["ink", "bg", 7], ["ink-2", "bg", 4.5], ["ink-3", "bg", 4.5],
  ["ink", "surface", 7], ["ink-2", "surface", 4.5], ["ink-3", "surface", 4.5],
  ["ink-2", "bg-2", 4.5], ["ink-3", "bg-2", 4.5],
  ["accent-ink", "bg", 4.5], ["accent-ink", "surface", 4.5], ["accent-ink", "bg-2", 4.5],
  ["on-accent", "accent", 4.5],
  ["accent", "bg", 3], ["accent", "bg-2", 3], ["line-strong", "bg", 3], ["data-muted", "bg-2", 1.5], ["accent", "data-muted", 3],
];

let fail = false;
for (const [mode, t] of [["claro", light], ["oscuro", dark]]) {
  for (const [fg, bg, min] of pairs) {
    const ratio = wcagContrast(parse(t[fg]), parse(t[bg]));
    const ok = ratio >= min;
    if (!ok) fail = true;
    console.log(`${ok ? "ok  " : "FALLA"} ${mode.padEnd(6)} ${fg.padEnd(11)} sobre ${bg.padEnd(8)} ${ratio.toFixed(3)} (min ${min})`);
  }
}
process.exit(fail ? 1 : 0);
