// Datos de Laura. Fuentes: su repo `portfolio-biomedico`, su CV (es/en, 2026-10-12) y su carta de
// motivación. No añadas nada que no salga de ahí.
import type { T } from "../lib/i18n";

export const profile = {
  name: "Laura Riera Alonso",
  shortName: "Laura Riera",
  email: "lrieralonso@gmail.com",
  linkedin: "https://www.linkedin.com/in/laura-riera-alonso-b60299251",
  github: "https://github.com/laura-riera-alonso",
  repo: "https://github.com/laura-riera-alonso/portfolio-biomedico",
  role: { es: "Ingeniera biomédica", en: "Biomedical engineer" } satisfies T,
};

/** Enlace a un fichero o carpeta del repo de proyectos. */
export function repoFile(path: string): string {
  const kind = path.endsWith("/") ? "tree" : "blob";
  return `${profile.repo}/${kind}/main/${path.replace(/\/$/, "")}`;
}

export interface SkillGroup {
  id: "data" | "models" | "delivery" | "hardware";
  title: T;
  items: T[];
}

const same = (s: string): T => ({ es: s, en: s });

export const skillGroups: SkillGroup[] = [
  {
    id: "data",
    title: { es: "Datos clínicos", en: "Clinical data" },
    items: [
      same("Python (pandas, psycopg2)"),
      { es: "SQL, PostgreSQL y SQLite", en: "SQL, PostgreSQL and SQLite" },
      same("R"),
      { es: "ETL sobre historia clínica electrónica", en: "ETL on electronic health records" },
      { es: "CIE-9 y CIE-10", en: "ICD-9 and ICD-10" },
      { es: "Datos seudonimizados, RGPD y LOPDGDD", en: "Pseudonymised data, GDPR and LOPDGDD" },
    ],
  },
  {
    id: "models",
    title: { es: "IA e imagen médica", en: "AI and medical imaging" },
    items: [
      { es: "PyTorch y fastai", en: "PyTorch and fastai" },
      { es: "TensorFlow y Keras", en: "TensorFlow and Keras" },
      same("scikit-learn"),
      { es: "Deep learning y síntesis de imagen", en: "Deep learning and image synthesis" },
      { es: "Validación de modelos y estadística", en: "Model validation and statistics" },
      { es: "Nipype, FSL y ANTs", en: "Nipype, FSL and ANTs" },
      { es: "3D Slicer e ImageJ", en: "3D Slicer and ImageJ" },
      same("MATLAB"),
    ],
  },
  {
    id: "delivery",
    title: { es: "Producto, BI y proyectos", en: "Product, BI and projects" },
    items: [
      { es: "Power BI, Tableau y Excel", en: "Power BI, Tableau and Excel" },
      { es: "Aplicaciones web (Python, HTML, JavaScript)", en: "Web apps (Python, HTML, JavaScript)" },
      same("Git"),
      same("BPMN 2.0"),
      { es: "Fundamentos de AWS", en: "AWS fundamentals" },
      { es: "Process mining (Celonis)", en: "Process mining (Celonis)" },
      {
        es: "Proyectos transversales en entornos regulados",
        en: "Cross-functional projects in regulated settings",
      },
    ],
  },
  {
    id: "hardware",
    title: { es: "Electrónica y hardware", en: "Electronics and hardware" },
    items: [
      { es: "Diseño de PCB (EAGLE)", en: "PCB design (EAGLE)" },
      { es: "Simulación de circuitos (LTSpice)", en: "Circuit simulation (LTSpice)" },
      { es: "Estimulación neural", en: "Neural stimulation" },
    ],
  },
];

/**
 * Hueco para skills nuevas, en el grupo que toque: `data: [{ es: "Docker", en: "Docker" }]`.
 * Se pintan al final de su grupo.
 */
export const extraSkills: Partial<Record<SkillGroup["id"], T[]>> = {};

export interface TimelineItem {
  kind: "education" | "work";
  /** Fechas tal cual las da el CV. */
  when: T;
  title: T;
  /** Nombre corto para la fila del gráfico. */
  short: T;
  place: T;
  body: T;
  /**
   * Tramo que se dibuja, en "AAAA-MM". `to: null` es "hasta hoy". Cuando el CV solo da años
   * (grado y máster), se dibuja el curso académico (septiembre a julio) y se marca `approx`.
   */
  span: { from: string; to: string | null; approx?: boolean };
  /** Puesto actual: se marca en la línea de tiempo. */
  current?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    kind: "education",
    when: same("2019 - 2024"),
    title: { es: "Grado en Ingeniería Biomédica", en: "BSc in Biomedical Engineering" },
    short: { es: "Grado, UC3M", en: "BSc, UC3M" },
    place: same("Universidad Carlos III de Madrid"),
    body: {
      es: "Nota media 8,8/10. TFG sobre resonancia sintética con contraste mediante deep learning.",
      en: "Average grade 8.8/10. Thesis on synthetic contrast MRI with deep learning.",
    },
    span: { from: "2019-09", to: "2024-07", approx: true },
  },
  {
    kind: "education",
    when: { es: "sep 2022 - jun 2023", en: "Sep 2022 - Jun 2023" },
    title: {
      es: "Estancia en UC Santa Cruz con beca de movilidad",
      en: "Exchange at UC Santa Cruz with a mobility scholarship",
    },
    short: same("UC Santa Cruz"),
    place: { es: "University of California, Santa Cruz (EE. UU.)", en: "University of California, Santa Cruz (USA)" },
    body: {
      es: "Electrónica e interfaces hombre-máquina. GPA 4.0.",
      en: "Electronics and computer interfaces. GPA 4.0.",
    },
    span: { from: "2022-09", to: "2023-06" },
  },
  {
    kind: "work",
    when: { es: "jun 2023 - jun 2024", en: "Jun 2023 - Jun 2024" },
    title: { es: "Ingeniera biomédica, imagen médica e IA", en: "Biomedical engineer, medical imaging and AI" },
    short: { es: "IiSGM, imagen médica e IA", en: "IiSGM, medical imaging and AI" },
    place: same("Instituto de Investigación Sanitaria Gregorio Marañón"),
    body: {
      es: "Redes convolucionales (Python, TensorFlow) para generar resonancia cerebral con contraste a partir de T1 y FLAIR, en el equipo de IA del Laboratorio de Imagen Médica.",
      en: "Convolutional networks (Python, TensorFlow) to generate contrast-enhanced brain MRI from T1 and FLAIR, in the AI team of the Medical Imaging Laboratory.",
    },
    span: { from: "2023-06", to: "2024-06" },
  },
  {
    kind: "education",
    when: { es: "feb - jul 2024", en: "Feb - Jul 2024" },
    title: {
      es: "Estancia en la University of Sydney con beca de movilidad",
      en: "Exchange at the University of Sydney with a mobility scholarship",
    },
    short: same("University of Sydney"),
    place: same("University of Sydney (Australia)"),
    body: {
      es: "Bioelectrónica y estimulación neural. Nota media 9,5/10.",
      en: "Bioelectronics and neural stimulation. Average grade 9.5/10.",
    },
    span: { from: "2024-02", to: "2024-07" },
  },
  {
    kind: "education",
    when: same("2024 - 2025"),
    title: { es: "Máster en Big Data y Business Analytics", en: "MSc in Big Data and Business Analytics" },
    short: { es: "Máster, EAE", en: "MSc, EAE" },
    place: same("EAE Business School Madrid"),
    body: {
      es: "Especialización en Project Management. TFM en equipo sobre MIMIC-IV, de PostgreSQL a Power BI.",
      en: "Minor in Project Management. Team thesis on MIMIC-IV, from PostgreSQL to Power BI.",
    },
    span: { from: "2024-09", to: "2025-07", approx: true },
  },
  {
    kind: "work",
    when: { es: "feb 2025 - feb 2026", en: "Feb 2025 - Feb 2026" },
    title: { es: "Analista de Business Excellence", en: "Business Excellence Analyst" },
    short: { es: "AbbVie, Business Excellence", en: "AbbVie, Business Excellence" },
    place: { es: "AbbVie España", en: "AbbVie Spain" },
    body: {
      es: "Extracción de datos y reporting automatizados con Power BI, cuadros de mando de indicadores y gestión y limpieza de bases de datos.",
      en: "Automated data extraction and reporting with Power BI, KPI dashboards, and database management and cleansing.",
    },
    span: { from: "2025-02", to: "2026-02" },
  },
  {
    kind: "work",
    when: { es: "feb 2026 - hoy", en: "Feb 2026 - now" },
    title: same("Project Specialist, Government Affairs"),
    short: { es: "AbbVie, Government Affairs", en: "AbbVie, Government Affairs" },
    place: { es: "AbbVie España", en: "AbbVie Spain" },
    current: true,
    body: {
      es: "Proyectos con la Administración, hospitales y socios externos, y herramientas propias para seguirlos.",
      en: "Projects with public administration, hospitals and external partners, and my own tools to track them.",
    },
    span: { from: "2026-02", to: null },
  },
];

/** Hueco para experiencia nueva. Si es el puesto actual, mueve ahí `current: true`. */
export const extraTimeline: TimelineItem[] = [];

export const certifications: { name: T; by: T; year: number }[] = [
  { name: same("CS50's Introduction to Computer Science"), by: same("Harvard / edX"), year: 2025 },
  { name: same("AWS Academy Introduction to Cloud"), by: same("Amazon Web Services"), year: 2025 },
  {
    name: {
      es: "Power BI: análisis de datos y business intelligence",
      en: "Power BI: Data Analysis and Business Intelligence",
    },
    by: same("Udemy"),
    year: 2025,
  },
  { name: same("Academic Process Mining Fundamentals"), by: same("Celonis"), year: 2025 },
  { name: same("CS50's Introduction to Programming with Python"), by: same("Harvard / edX"), year: 2024 },
  {
    name: same("Machine Learning"),
    by: { es: "Stanford y DeepLearning.AI (Coursera)", en: "Stanford and DeepLearning.AI (Coursera)" },
    year: 2022,
  },
];

export const languages: { name: T; level: T }[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "nativo", en: "native" } },
  { name: { es: "Inglés", en: "English" }, level: same("C1 (Cambridge)") },
  { name: { es: "Francés", en: "French" }, level: same("B1 (DELF)") },
];

export const beyond: { title: T; when: T; body: T }[] = [
  {
    title: { es: "Voluntaria en Fundación AVA", en: "Volunteer at Fundación AVA" },
    when: { es: "desde sep 2024", en: "since Sep 2024" },
    body: {
      es: "Acompañamiento a niños y adolescentes con discapacidad intelectual y física, con actividades lúdicas y deportivas que dan respiro a sus familias.",
      en: "Supporting children and teenagers with intellectual and physical disabilities through play and sport, giving their families some respite.",
    },
  },
  {
    title: { es: "Profesora particular", en: "Private tutor" },
    when: same("2017 - 2026"),
    body: {
      es: "Matemáticas, física, biología, química e inglés para secundaria y bachillerato, en Madrid por cuenta propia y con Cluey Learning (Sídney), presencial y en remoto.",
      en: "Maths, physics, biology, chemistry and English for secondary school students, independently in Madrid and with Cluey Learning (Sydney), in person and remotely.",
    },
  },
];

/** Proyectos de ingeniería e investigación del CV que no están en el repo. */
export const otherProjects: { icon: string; title: T; place: T; year: string; body: T }[] = [
  {
    icon: "circuitry",
    title: { es: "PCB para estimulación cerebral", en: "PCB for brain stimulation" },
    place: same("University of Sydney"),
    year: "2024",
    body: {
      es: "Diseño y caracterización de una placa de circuito impreso para estimulación neural con LTSpice y EAGLE, con el profesor Gregg Suaning.",
      en: "Designed and characterised a printed circuit board for neural stimulation with LTSpice and EAGLE, supervised by Prof. Gregg Suaning.",
    },
  },
  {
    icon: "ear",
    title: { es: "Sonido para implantes cocleares", en: "Sound processing for cochlear implants" },
    place: { es: "University of Sydney con Cochlear Ltd.", en: "University of Sydney with Cochlear Ltd." },
    year: "2024",
    body: {
      es: "Prueba y optimización de estrategias de procesamiento de sonido para mejorar la inteligibilidad del habla en entornos ruidosos.",
      en: "Tested and optimised sound-processing strategies to improve speech intelligibility in noisy environments.",
    },
  },
  {
    icon: "robot",
    title: { es: "Brazo robótico para microcirugía", en: "Robotic arm for microsurgery" },
    place: same("UC Santa Cruz"),
    year: "2023",
    body: {
      es: "Diseño y simulación cinemática de un brazo de seis grados de libertad, con interfaz de control en MATLAB.",
      en: "Kinematic design and simulation of a six-degree-of-freedom arm, with a MATLAB control interface.",
    },
  },
  {
    icon: "microscope",
    title: { es: "Imagen de proliferación celular", en: "Imaging of cell proliferation" },
    place: { es: "Brooks Lab, UC Santa Cruz", en: "Brooks Lab, UC Santa Cruz" },
    year: "2022 - 2023",
    body: {
      es: "Adquisición y análisis de imagen de células epiteliales bronquiales humanas con el BioTek Lionheart FX, con métricas de proliferación para investigación oncológica.",
      en: "Acquired and analysed images of human bronchial epithelial cells on the BioTek Lionheart FX, with proliferation metrics for cancer research.",
    },
  },
];
