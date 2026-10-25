# Portfolio de Laura Riera Alonso

Sitio estático (Astro) con mi trayectoria en datos clínicos e IA: el TFG de resonancia sintética con
contraste, el TFM de riesgo de insuficiencia renal con MIMIC-IV y mi trabajo en AbbVie. En español e
inglés. El código de los proyectos está en
[portfolio-biomedico](https://github.com/laura-riera-alonso/portfolio-biomedico).

## Añadir material

- **Foto**: deja la imagen en `src/assets/laura.jpg` (también vale `.png` o `.webp`). Mejor en
  vertical, 4:5. La portada la usa sola; sin foto, muestra el cuadro de mando del TFM.
- **Skills o experiencia nuevas**: `extraSkills` y `extraTimeline` en `src/data/perfil.ts`.
- **Textos**: `src/i18n/` (un fichero por página, con las versiones `es` y `en`).

## Comandos

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run check      # tipos de Astro
npm run contrast   # contraste WCAG de la paleta
```

## Publicación

Con el repo en GitHub como `laura-riera-alonso.github.io` y Pages configurado con "GitHub Actions"
como origen, cada push a `main` publica el sitio con `.github/workflows/deploy.yml`.
