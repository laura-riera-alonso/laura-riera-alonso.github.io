import type { Lang } from "../lib/i18n";

export const abbvie = {
  es: {
    meta: {
      title: "Gestión de reuniones con terceros en Python y SQLite | Laura Riera Alonso",
      description:
        "Aplicación web desarrollada desde cero en Python y SQLite en AbbVie España para la logística de reuniones con terceros, y proyectos de coordinación con la Administración y hospitales.",
    },
    kicker: ["AbbVie España", "Project Specialist, Government Affairs, desde febrero de 2026"],
    title: "Una aplicación propia para la logística de reuniones con terceros",
    lead: "Coordino proyectos transversales con la Administración, hospitales y socios externos. Para darles seguimiento desarrollé desde cero una aplicación web en Python y SQLite que reúne en un solo sitio la logística de las reuniones con terceros.",
    role: {
      title: "Mi papel",
      body: "La desarrollé desde cero, pensada para reutilizarse en otros proyectos.",
    },
    facts: [
      { k: "Qué resuelve", v: "Participantes, viajes, tareas, aprobaciones y alertas de cada reunión, en un solo sitio." },
      { k: "Stack", v: "Python y SQLite, con importación desde Excel y Outlook." },
      { k: "Alcance", v: "Prototipo local de uso interno. No es un despliegue corporativo." },
    ],
    flow: {
      title: "Cómo funciona",
      inputs: "Entradas",
      app: "La aplicación",
      appDetail: "Python y SQLite, en local",
      manages: "Lo que gestiona",
      sources: ["Excel", "Outlook"],
    },
    noScreens:
      "Es una herramienta interna que trabaja con datos de la compañía, así que aquí se describe pero no se enseña.",
    more: {
      title: "Otros proyectos en AbbVie",
      items: [
        {
          title: "Candidatura a un programa nacional de reconocimiento de la I+D",
          body: "Coordinación de la candidatura de la compañía a un programa nacional que reconoce la capacidad de I+D e industrial del sector farmacéutico: 10 departamentos y una consultora externa, con criterios de dato comunes y una fuente única y trazable para cada cifra, hasta su presentación ante el Ministerio.",
        },
        {
          title: "Sostenibilidad en farmacia hospitalaria",
          body: "Proyecto con una organización ambiental, dentro de una iniciativa sectorial, para medir y reducir la huella de carbono de la logística del medicamento, con hospitales piloto y un comité de expertos.",
        },
        {
          title: "Análisis normativo con apoyo de IA",
          body: "Análisis de la legislación sanitaria en tramitación (real decreto de precio y financiación, real decreto de evaluación de tecnologías sanitarias y ley del medicamento y productos sanitarios) y síntesis para dirección.",
        },
        {
          title: "Analista de Business Excellence (feb 2025 - feb 2026)",
          body: "Extracción de datos y reporting automatizados con Power BI, cuadros de mando e indicadores para decisiones comerciales, gestión y limpieza de bases de datos y seguimiento de resultados comerciales e incidencias en AMI, Reltio, Salesforce CRM y Veeva Align.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Managing meetings with external partners in Python and SQLite | Laura Riera Alonso",
      description:
        "A web app built from scratch in Python and SQLite at AbbVie Spain to run the logistics of meetings with external partners, plus coordination projects with public administration and hospitals.",
    },
    kicker: ["AbbVie Spain", "Project Specialist, Government Affairs, since February 2026"],
    title: "My own app for the logistics of meetings with external partners",
    lead: "I coordinate cross-functional projects with public administration, hospitals and external partners. To keep track of them I built a web app from scratch in Python and SQLite that brings the logistics of meetings with external partners into one place.",
    role: {
      title: "My role",
      body: "I built it from scratch, designed to be reused in other projects.",
    },
    facts: [
      { k: "What it solves", v: "Participants, travel, tasks, approvals and alerts for each meeting, in one place." },
      { k: "Stack", v: "Python and SQLite, with import from Excel and Outlook." },
      { k: "Scope", v: "A local prototype for internal use. Not a corporate deployment." },
    ],
    flow: {
      title: "How it works",
      inputs: "Inputs",
      app: "The app",
      appDetail: "Python and SQLite, running locally",
      manages: "What it manages",
      sources: ["Excel", "Outlook"],
    },
    noScreens: "It is an internal tool that works with company data, so it is described here but not shown.",
    more: {
      title: "Other projects at AbbVie",
      items: [
        {
          title: "Bid for a national R&D recognition programme",
          body: "Coordinating the company's bid for a national programme that recognises the R&D and industrial capacity of the pharmaceutical sector: 10 departments and an external consultancy, with shared data criteria and a single traceable source for every figure, up to its submission to the Ministry.",
        },
        {
          title: "Sustainability in hospital pharmacy",
          body: "A project with an environmental organisation, within a sector initiative, to measure and cut the carbon footprint of medicine logistics, with pilot hospitals and an expert committee.",
        },
        {
          title: "AI-assisted regulatory analysis",
          body: "Analysis of healthcare legislation in progress (the royal decrees on pricing and reimbursement and on health technology assessment, and the medicines and medical devices act) and briefings for senior stakeholders.",
        },
        {
          title: "Business Excellence Analyst (Feb 2025 - Feb 2026)",
          body: "Automated data extraction and reporting with Power BI, dashboards and KPIs for commercial decisions, database management and cleansing, and tracking of sales performance and incidents in AMI, Reltio, Salesforce CRM and Veeva Align.",
        },
      ],
    },
  },
} satisfies Record<Lang, unknown>;
