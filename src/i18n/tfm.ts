import type { Lang } from "../lib/i18n";

export const tfm = {
  es: {
    meta: {
      title: "Riesgo de insuficiencia renal en diabetes tipo 1 | Laura Riera Alonso",
      description:
        "TFM en equipo: cohorte de 2.220 pacientes de MIMIC-IV en PostgreSQL, ETL clínico en Python, modelo Lasso (AUC 0,83) y cuadro de mando en Power BI.",
    },
    kicker: ["Trabajo Fin de Máster", "Big Data & Business Analytics, EAE Business School, 2025"],
    title: "Predicción del riesgo de insuficiencia renal en diabetes tipo 1 con MIMIC-IV",
    lead: "Construimos de punta a punta una herramienta de apoyo a la decisión clínica: extrajimos con SQL una cohorte de pacientes con diabetes tipo 1, unificamos demografía, comorbilidades, medicación y analíticas, entrenamos modelos que predicen la insuficiencia renal y lo llevamos a un cuadro de mando que prioriza a los pacientes por riesgo.",
    role: {
      title: "Proyecto en equipo",
      body: "Participé en todas las fases: la base de datos en PostgreSQL, la selección de cohorte, la limpieza e integración de datos, el análisis exploratorio, el modelado y el cuadro de mando en Power BI.",
    },
    facts: [
      { k: "Problema", v: "La insuficiencia renal es una de las complicaciones más graves de la diabetes tipo 1. Detectarla pronto evita pruebas repetidas, reingresos y mal uso de recursos." },
      { k: "Datos", v: "MIMIC-IV, módulo hosp (Beth Israel Deaconess Medical Center, 2008-2022). De 364.627 pacientes a una cohorte final de 2.220 con diabetes tipo 1." },
      { k: "Modelo", v: "Lasso con umbral ajustado, elegido entre seis modelos con validación cruzada de 5 particiones y 10 repeticiones." },
      { k: "Stack", v: "PostgreSQL, SQL, Python (pandas, psycopg2), códigos ICD-9 e ICD-10, R (tidymodels), Power BI" },
      { k: "Resultado", v: "AUC 0,83, sensibilidad 0,77, especificidad 0,71 y F1 0,64." },
    ],
    heroCaption: "Simulación de impacto asistencial en el cuadro de mando. Cada barra es la proporción de pacientes revisados que tienen insuficiencia renal.",
    heroAlt: "Cuadro de mando de simulación: entre los pacientes del decil de más riesgo según el modelo, el 92 % tiene insuficiencia renal, frente al 31 % con un seguimiento al azar.",
    flow: {
      title: "Flujo de datos",
      sub: "Del CSV de MIMIC-IV a un panel con alertas por nivel de riesgo.",
      steps: [
        { title: "CSV de MIMIC-IV", detail: "Módulo hosp" },
        { title: "PostgreSQL", detail: "Esquema mimi_hosp con claves e índices" },
        { title: "Cohorte DT1", detail: "Esquema mimi_diabetic por ICD-9 250.x1 e ICD-10 E10" },
        { title: "Python + pandas", detail: "Criterios de inclusión y exclusión" },
        { title: "Cuatro fuentes", detail: "Demografía, comorbilidades, medicación y analíticas" },
        { title: "Tabla por paciente", detail: "66 variables unidas por patient_id" },
        { title: "Modelos en R", detail: "Validación cruzada repetida" },
        { title: "Power BI", detail: "Riesgo, alertas y simulación" },
      ],
    },
    cohort: {
      title: "Selección de la cohorte",
      start: "pacientes en el módulo hospitalario",
      end: "pacientes con diabetes tipo 1 en la cohorte final",
      criteria: [
        "Pacientes con diabetes tipo 1 por ICD-9 (250.x1) e ICD-10 (E10), con trazabilidad entre tablas.",
        "Solo ingresos hospitalarios: el paso exclusivo por UCI se excluye para no sesgar el modelo.",
        "Entre 18 y 75 años y en su primera admisión.",
        "Sin enfermedad grave que enmascare la señal: hepatopatía grave, cáncer metastásico o terminal, autoinmunes graves, insuficiencia renal terminal previa o embarazo.",
      ],
      split: "Partición estratificada 70/30 con semilla fija: 1.554 pacientes de entrenamiento y 666 de test.",
    },
    sources: {
      title: "Limpieza e integración de cuatro fuentes",
      items: [
        { k: "Comorbilidades", v: "Diagnósticos agrupados en 11 especialidades. Se descartan los poco representados (menos de 20 pacientes), salvo los renales por ser el objetivo." },
        { k: "Medicación", v: "Cuatro tablas integradas (emar, emar_detail, prescriptions, pharmacy), sin duplicados ni dosis no administradas, unidades unificadas, normalización por grupo terapéutico y Box-Cox. 6.879 de 166.926 registros revisados a mano." },
        { k: "Analíticas", v: "Estrategia según el porcentaje de nulos: fuera las variables con más del 60 %, mediana entre el 25 y el 45 % y KNN (k = 5) por debajo del 20 %. Cálculo de eGFR y ratio BUN/creatinina." },
        { k: "Demografía", v: "Variables seleccionadas y unidas por patient_id. El IMC se descarta por exceso de nulos." },
      ],
      note: "El proceso se documentó con diagramas BPMN 2.0 para que cualquier perfil, técnico o clínico, pudiera auditarlo.",
    },
    models: {
      title: "Elegir modelo con criterio clínico",
      body: "Se priorizó detectar casos reales sin disparar los falsos positivos: F1 y sensibilidad antes que exactitud, porque las clases están desbalanceadas. Lasso gana por equilibrio entre rendimiento e interpretabilidad, porque selecciona variables por sí mismo.",
      caption: "Resultados del entrenamiento final de los cinco modelos de la tabla resumida; el sexto comparado, Elastic Net, no aparece en ella. En acento, el modelo elegido.",
      cols: { model: "Modelo", auc: "AUC", sens: "Sensibilidad", spec: "Especificidad", f1: "F1" },
      vars: "Variables más relevantes: eGFR, hematocrito, ratio BUN/creatinina, hemoglobina y MCH.",
      rNote: "Los scripts de R del modelado no están publicados en el repositorio; los resultados proceden de la memoria del TFM.",
    },
    impact: {
      title: "De modelo a herramienta",
      body: "La curva lift por deciles dice dónde mirar: en el 10 % de pacientes con más riesgo, el 92,5 % tiene insuficiencia renal, frente a una tasa base del 31,7 % (lift 2,92).",
    },
    dashboard: {
      title: "El cuadro de mando",
      body: "Resumen de cohorte, filtros por especialidad, ficha individual con biomarcadores fuera de rango resaltados, tratamientos activos, probabilidad y decil de riesgo, y validación del modelo.",
      alt: "Cuadro de mando en Power BI con la distribución por sexo, edad, riesgo de insuficiencia renal, alertas y comorbilidades de la cohorte con el filtro de sexo en mujeres.",
      caption: "Caracterización de la cohorte, con el filtro de sexo en mujeres (606 pacientes). Del panel solo se publican las vistas agregadas: las de paciente individual muestran registros de MIMIC-IV, cuya licencia prohíbe redistribuirlos.",
    },
    privacy: {
      title: "Datos, privacidad y ética",
      items: [
        "MIMIC-IV está desidentificada conforme a HIPAA y su uso exige acceso acreditado en PhysioNet, tras el curso CITI de investigación con datos.",
        "Su licencia prohíbe redistribuir los datos: el código del TFM se publica sin datos ni tablas derivadas y con los notebooks sin salidas, y del cuadro de mando aquí solo se enseñan las vistas agregadas.",
      ],
    },
    limits: {
      title: "Limitaciones",
      items: [
        "Datos de un único hospital de EE. UU., sin validación externa. Convendría validarlo en población española y en otros periodos.",
        "Cohorte reducida por centrarse en diabetes tipo 1, y con muchos nulos que obligaron a imputar.",
        "La eGFR está muy ligada al propio concepto de función renal: el modelo sirve para priorizar, pero haría falta una validación prospectiva antes de cualquier uso asistencial.",
        "La simulación de intervención es hipotética: no se midió el impacto en pacientes ni en el flujo de trabajo clínico.",
      ],
    },
    code: {
      title: "Qué mirar en el código",
      links: [
        { label: "Cohorte de diabetes tipo 1 en SQL", path: "tfm/sql/mimi_diabetic_schema.sql" },
        { label: "Selección de cohorte y limpieza", path: "tfm/notebooks/01_seleccion_cohorte_postgres.ipynb" },
        { label: "Preprocesado sobre PostgreSQL", path: "tfm/notebooks/02_preprocesado_postgres.ipynb" },
        { label: "Unión, EDA y preparación del modelo", path: "tfm/notebooks/03_union_eda_y_preparacion_modelo.ipynb" },
      ],
    },
  },
  en: {
    meta: {
      title: "Kidney failure risk in type 1 diabetes | Laura Riera Alonso",
      description:
        "Team master's thesis: a 2,220-patient MIMIC-IV cohort in PostgreSQL, clinical ETL in Python, a lasso model (AUC 0.83) and a Power BI dashboard.",
    },
    kicker: ["Master's thesis", "Big Data & Business Analytics, EAE Business School, 2025"],
    title: "Predicting kidney failure risk in type 1 diabetes with MIMIC-IV",
    lead: "We built a clinical decision support tool end to end: we extracted a type 1 diabetes cohort with SQL, merged demographics, comorbidities, medication and lab tests, trained models that predict kidney failure and turned them into a dashboard that ranks patients by risk.",
    role: {
      title: "Team project",
      body: "I took part in every stage: the PostgreSQL database, cohort selection, data cleaning and integration, exploratory analysis, modelling and the Power BI dashboard.",
    },
    facts: [
      { k: "Problem", v: "Kidney failure is one of the most serious complications of type 1 diabetes. Catching it early avoids repeated tests, readmissions and wasted resources." },
      { k: "Data", v: "MIMIC-IV, hosp module (Beth Israel Deaconess Medical Center, 2008-2022). From 364,627 patients to a final cohort of 2,220 with type 1 diabetes." },
      { k: "Model", v: "Lasso with a tuned threshold, chosen among six models with 5-fold cross-validation repeated 10 times." },
      { k: "Stack", v: "PostgreSQL, SQL, Python (pandas, psycopg2), ICD-9 and ICD-10 codes, R (tidymodels), Power BI" },
      { k: "Result", v: "AUC 0.83, sensitivity 0.77, specificity 0.71 and F1 0.64." },
    ],
    heroCaption: "Care impact simulation in the dashboard. Each bar is the share of reviewed patients who have kidney failure.",
    heroAlt: "Simulation dashboard: among the patients in the model's highest-risk decile, 92% have kidney failure, against 31% with random follow-up.",
    flow: {
      title: "Data flow",
      sub: "From the MIMIC-IV CSV files to a dashboard with risk-level alerts.",
      steps: [
        { title: "MIMIC-IV CSV", detail: "hosp module" },
        { title: "PostgreSQL", detail: "mimi_hosp schema with keys and indexes" },
        { title: "T1D cohort", detail: "mimi_diabetic schema by ICD-9 250.x1 and ICD-10 E10" },
        { title: "Python + pandas", detail: "Inclusion and exclusion criteria" },
        { title: "Four sources", detail: "Demographics, comorbidities, medication and lab tests" },
        { title: "One row per patient", detail: "66 variables joined on patient_id" },
        { title: "Models in R", detail: "Repeated cross-validation" },
        { title: "Power BI", detail: "Risk, alerts and simulation" },
      ],
    },
    cohort: {
      title: "Selecting the cohort",
      start: "patients in the hospital module",
      end: "patients with type 1 diabetes in the final cohort",
      criteria: [
        "Type 1 diabetes patients by ICD-9 (250.x1) and ICD-10 (E10), traceable across tables.",
        "Hospital admissions only: ICU-only stays are excluded so they do not bias the model.",
        "Aged 18 to 75, first admission.",
        "No severe disease that masks the signal: severe liver disease, metastatic or terminal cancer, severe autoimmune disease, prior end-stage kidney disease or pregnancy.",
      ],
      split: "Stratified 70/30 split with a fixed seed: 1,554 training patients and 666 test patients.",
    },
    sources: {
      title: "Cleaning and merging four sources",
      items: [
        { k: "Comorbidities", v: "Diagnoses grouped into 11 specialties. Rare ones (fewer than 20 patients) are dropped, except kidney diagnoses, which are the target." },
        { k: "Medication", v: "Four tables merged (emar, emar_detail, prescriptions, pharmacy), with no duplicates or undelivered doses, unified units, per-drug-group normalisation and Box-Cox. 6,879 of 166,926 records reviewed by hand." },
        { k: "Lab tests", v: "A strategy by share of missing values: variables above 60% dropped, median for 25-45% and KNN (k = 5) below 20%. eGFR and BUN/creatinine ratio computed." },
        { k: "Demographics", v: "Selected variables joined on patient_id. BMI is dropped because too many values are missing." },
      ],
      note: "The process was documented in BPMN 2.0 diagrams so anyone, technical or clinical, could audit it.",
    },
    models: {
      title: "Choosing a model on clinical criteria",
      body: "The priority was to catch real cases without flooding false positives: F1 and sensitivity over accuracy, because the classes are imbalanced. Lasso wins on the balance between performance and interpretability, since it selects variables on its own.",
      caption: "Final training results for the five models in the summary table; the sixth one compared, Elastic Net, is not in it. The chosen model is highlighted.",
      cols: { model: "Model", auc: "AUC", sens: "Sensitivity", spec: "Specificity", f1: "F1" },
      vars: "Most relevant variables: eGFR, haematocrit, BUN/creatinine ratio, haemoglobin and MCH.",
      rNote: "The R modelling scripts are not published in the repository; the results come from the thesis report.",
    },
    impact: {
      title: "From model to tool",
      body: "The decile lift curve shows where to look: among the riskiest 10% of patients, 92.5% have kidney failure, against a base rate of 31.7% (lift 2.92).",
    },
    dashboard: {
      title: "The dashboard",
      body: "Cohort summary, filters by specialty, a patient card with out-of-range biomarkers highlighted, active treatments, risk probability and decile, and model validation.",
      alt: "Power BI dashboard showing the cohort by sex, age, kidney failure risk, active alerts and comorbidities with the sex filter set to women.",
      caption: "Cohort profile, with the sex filter set to women (606 patients). Only the aggregate views of the dashboard are published: the patient views show MIMIC-IV records, and its licence forbids redistributing them.",
    },
    privacy: {
      title: "Data, privacy and ethics",
      items: [
        "MIMIC-IV is de-identified under HIPAA and requires credentialed access on PhysioNet, after the CITI research data course.",
        "Its licence forbids redistributing the data: the thesis code is published without data or derived tables and with notebooks stripped of outputs, and only the aggregate dashboard views are shown here.",
      ],
    },
    limits: {
      title: "Limitations",
      items: [
        "Data from a single US hospital, with no external validation. It should be validated on a Spanish population and other periods.",
        "A small cohort, since it focuses on type 1 diabetes, with many missing values that had to be imputed.",
        "eGFR is closely tied to the very idea of kidney function: the model helps to prioritise, but it would need prospective validation before any clinical use.",
        "The intervention simulation is hypothetical: the impact on patients and on clinical workflow was not measured.",
      ],
    },
    code: {
      title: "Where to look in the code",
      links: [
        { label: "Type 1 diabetes cohort in SQL", path: "tfm/sql/mimi_diabetic_schema.sql" },
        { label: "Cohort selection and cleaning", path: "tfm/notebooks/01_seleccion_cohorte_postgres.ipynb" },
        { label: "Preprocessing on PostgreSQL", path: "tfm/notebooks/02_preprocesado_postgres.ipynb" },
        { label: "Merge, EDA and model preparation", path: "tfm/notebooks/03_union_eda_y_preparacion_modelo.ipynb" },
      ],
    },
  },
} satisfies Record<Lang, unknown>;
