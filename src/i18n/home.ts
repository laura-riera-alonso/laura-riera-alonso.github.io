import type { Lang } from "../lib/i18n";

export const home = {
  es: {
    meta: {
      title: "Laura Riera Alonso | Ingeniera biomédica, datos clínicos e IA",
      description:
        "Portfolio de Laura Riera Alonso, ingeniera biomédica: ETL sobre historia clínica con SQL y Python, modelos de IA en salud y cuadros de mando en Power BI.",
    },
    hero: {
      title: "Datos clínicos pensados para la consulta.",
      sub: "Extraigo y limpio datos clínicos reales con SQL y Python, entreno modelos y los llevo a cuadros de mando.",
      cta: "Ver proyectos",
      figCaption: "Cuadro de mando del TFM en Power BI: caracterización de la cohorte, aquí filtrada por sexo (606 mujeres).",
      figAlt:
        "Cuadro de mando en Power BI con la distribución por sexo, edad, riesgo de insuficiencia renal, alertas y comorbilidades de la cohorte con el filtro de sexo en mujeres.",
      photoAlt: "Retrato de Laura Riera Alonso",
    },
    about: {
      title: "Entre la ingeniería y la clínica",
      lead: "Soy ingeniera biomédica por la UC3M, con estancias en UC Santa Cruz y en la University of Sydney, y tengo un máster en Big Data y Business Analytics. Mi trabajo se ha desarrollado entre los datos clínicos y el software que los hace utilizables: resonancias de pacientes con glioma, la historia clínica electrónica de MIMIC-IV y, desde 2025, datos y proyectos en AbbVie.",
      skillsTitle: "Con qué trabajo",
    },
    projects: {
      title: "Proyectos",
      sub: "Tres trabajos con datos reales, desde la extracción hasta el resultado.",
      tfm: {
        label: "Trabajo Fin de Máster, 2025",
        title: "Riesgo de insuficiencia renal en diabetes tipo 1",
        body: "Cohorte de 2.220 pacientes extraída de MIMIC-IV con SQL, ETL clínico en Python, un modelo Lasso y un cuadro de mando que prioriza a los pacientes por riesgo.",
        team: "Proyecto en equipo",
        imgAlt:
          "Cuadro de mando de simulación: entre los pacientes del decil de más riesgo según el modelo, el 92 % tiene insuficiencia renal, frente al 31 % con un seguimiento al azar.",
      },
      tfg: {
        label: "Trabajo Fin de Grado, 2023",
        title: "Resonancia sintética con contraste en neuro-oncología",
        body: "Una U-Net genera la T1 con gadolinio a partir de secuencias sin contraste. El modelo final se eligió con el criterio de un radiólogo, no solo por la métrica más alta.",
        chartTitle: "SSIM medio de cada modelo en validación",
      },
      abbvie: {
        label: "AbbVie España, 2026",
        title: "Gestión de reuniones con terceros",
        body: "Aplicación web hecha desde cero en Python y SQLite para la logística de reuniones con terceros. Prototipo local de uso interno.",
      },
    },
    result: {
      title: "Nueve de cada diez pacientes marcados son casos",
      sub: "En la simulación del TFM, de los 222 pacientes que el modelo marca con más riesgo, unos 205 tienen insuficiencia renal. Elegidos al azar, unos 70.",
    },
    more: {
      title: "Más proyectos de ingeniería",
      sub: "Electrónica, robótica e imagen durante las estancias en UC Santa Cruz y en la University of Sydney.",
    },
    principles: {
      title: "Cómo trabajo",
      items: [
        {
          title: "Datos clínicos con responsabilidad",
          body: "Datos seudonimizados, normativa de protección de datos y control de calidad documentado. Este portfolio no muestra datos de pacientes.",
        },
        {
          title: "Pipelines documentados paso a paso",
          body: "Cada fase separada y descrita: registro de comprobación por paso en el TFG y diagramas BPMN en el TFM, para que cualquiera pueda auditarlos.",
        },
        {
          title: "Decisiones con el usuario clínico",
          body: "En el TFG, el modelo final se eligió con el criterio de un radiólogo con 20 años de experiencia, no solo por la métrica más alta.",
        },
        {
          title: "Honestidad con los resultados",
          body: "Cada proyecto cuenta sus limitaciones y lo que no consigue.",
        },
      ],
    },
    path: {
      title: "Trayectoria",
      chart: "Formación y experiencia en el tiempo",
      education: "Formación",
      work: "Experiencia",
      now: "hoy",
      approx: "Grado y máster se dibujan por curso académico.",
      certifications: "Certificaciones",
      languages: "Idiomas",
      beyond: "Además",
    },
    contact: {
      title: "Para más información, escríbeme.",
      email: "Correo",
    },
  },
  en: {
    meta: {
      title: "Laura Riera Alonso | Biomedical engineer, clinical data and AI",
      description:
        "Portfolio of Laura Riera Alonso, biomedical engineer: ETL on health records with SQL and Python, AI models for healthcare and Power BI dashboards.",
    },
    hero: {
      title: "Clinical data, built for the clinic.",
      sub: "I extract and clean real clinical data with SQL and Python, train models and turn them into dashboards.",
      cta: "See projects",
      figCaption: "Master's thesis dashboard in Power BI: cohort profile, here filtered by sex (606 women).",
      figAlt:
        "Power BI dashboard showing the cohort by sex, age, kidney failure risk, active alerts and comorbidities with the sex filter set to women.",
      photoAlt: "Portrait of Laura Riera Alonso",
    },
    about: {
      title: "Between engineering and the clinic",
      lead: "I am a biomedical engineer from UC3M, with exchanges at UC Santa Cruz and the University of Sydney, and an MSc in Big Data and Business Analytics. My work has spanned clinical data and the software that makes it usable: MRI scans of glioma patients, the MIMIC-IV electronic health records and, since 2025, data and projects at AbbVie.",
      skillsTitle: "What I work with",
    },
    projects: {
      title: "Projects",
      sub: "Three pieces of work on real data, from extraction to results.",
      tfm: {
        label: "Master's thesis, 2025",
        title: "Kidney failure risk in type 1 diabetes",
        body: "A 2,220-patient cohort extracted from MIMIC-IV with SQL, clinical ETL in Python, a lasso model and a dashboard that ranks patients by risk.",
        team: "Team project",
        imgAlt:
          "Simulation dashboard: among the patients in the model's highest-risk decile, 92% have kidney failure, against 31% with random follow-up.",
      },
      tfg: {
        label: "Bachelor's thesis, 2023",
        title: "Synthetic contrast MRI in neuro-oncology",
        body: "A U-Net generates the gadolinium-enhanced T1 from non-contrast sequences. The final model was chosen on a radiologist's judgement, not just the highest metric.",
        chartTitle: "Mean validation SSIM for each model",
      },
      abbvie: {
        label: "AbbVie Spain, 2026",
        title: "Managing meetings with external partners",
        body: "A web app built from scratch in Python and SQLite to run the logistics of meetings with external partners. A local prototype for internal use.",
      },
    },
    result: {
      title: "Nine in ten flagged patients are real cases",
      sub: "In the thesis simulation, about 205 of the 222 patients the model flags as highest risk have kidney failure. Picked at random, about 70.",
    },
    more: {
      title: "More engineering projects",
      sub: "Electronics, robotics and imaging during my exchanges at UC Santa Cruz and the University of Sydney.",
    },
    principles: {
      title: "How I work",
      items: [
        {
          title: "Clinical data, handled responsibly",
          body: "Pseudonymised data, data protection law and documented quality control. This portfolio shows no patient data.",
        },
        {
          title: "Pipelines documented step by step",
          body: "Every stage kept separate and described: a per-step check log in the bachelor's thesis and BPMN diagrams in the master's, so anyone can audit them.",
        },
        {
          title: "Decisions made with the clinical user",
          body: "In the bachelor's thesis, the final model was chosen on the judgement of a radiologist with 20 years of experience, not just the highest metric.",
        },
        {
          title: "Honest about results",
          body: "Every project states its limitations and what it does not achieve.",
        },
      ],
    },
    path: {
      title: "Experience",
      chart: "Education and work over time",
      education: "Education",
      work: "Work",
      now: "now",
      approx: "The degrees are drawn by academic year.",
      certifications: "Certifications",
      languages: "Languages",
      beyond: "Beyond work",
    },
    contact: {
      title: "For more information, get in touch.",
      email: "Email",
    },
  },
} satisfies Record<Lang, unknown>;
