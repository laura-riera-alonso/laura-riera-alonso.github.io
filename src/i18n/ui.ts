import type { Lang } from "../lib/i18n";

export const ui = {
  es: {
    skip: "Saltar al contenido",
    nav: { projects: "Proyectos", path: "Trayectoria", contact: "Contacto", label: "Principal" },
    switchTo: { label: "English", short: "EN", title: "Read this page in English" },
    footer: { code: "Código de los proyectos en GitHub" },
    cv: { download: "Descargar CV", otherLang: "Descargar CV (en inglés)" },
    viewCase: "Ver el caso",
    backToProjects: "Todos los proyectos",
    nextProject: "Siguiente proyecto",
    showTable: "Ver los datos en tabla",
    copy: { idle: "Copiar correo", done: "Copiado", error: "No se pudo copiar" },
    notFound: {
      title: "Esta página no existe",
      body: "Puede que el enlace esté mal o que la página se haya movido.",
      back: "Volver al inicio",
    },
  },
  en: {
    skip: "Skip to content",
    nav: { projects: "Projects", path: "Experience", contact: "Contact", label: "Main" },
    switchTo: { label: "Español", short: "ES", title: "Leer esta página en español" },
    footer: { code: "Project code on GitHub" },
    cv: { download: "Download CV", otherLang: "Download CV (Spanish)" },
    viewCase: "Read the case study",
    backToProjects: "All projects",
    nextProject: "Next project",
    showTable: "Show the data as a table",
    copy: { idle: "Copy email", done: "Copied", error: "Could not copy" },
    notFound: {
      title: "This page does not exist",
      body: "The link may be wrong or the page may have moved.",
      back: "Back to the home page",
    },
  },
} satisfies Record<Lang, unknown>;
