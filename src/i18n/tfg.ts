import type { Lang } from "../lib/i18n";

export const tfg = {
  es: {
    meta: {
      title: "Resonancia sintética con contraste en neuro-oncología | Laura Riera Alonso",
      description:
        "TFG: una U-Net con encoder ResNet-50 genera la resonancia T1 con gadolinio a partir de secuencias sin contraste en pacientes con glioma, validada con un radiólogo.",
    },
    kicker: ["Trabajo Fin de Grado", "Ingeniería Biomédica, UC3M, septiembre de 2023"],
    title: "Resonancia T1 con contraste sintetizada con deep learning en neuro-oncología",
    lead: "Entrené una red U-Net con encoder ResNet-50 que genera la resonancia T1 con contraste (gadolinio) a partir de tres secuencias sin contraste: T1, FLAIR y SWI. El objetivo es reducir el uso de gadolinio en el seguimiento de pacientes con glioma.",
    role: {
      title: "Tutores",
      body: "Daniel Sanderson Moreno y Manuel Desco Menéndez (Bioingeniería, UC3M y Hospital General Universitario Gregorio Marañón).",
    },
    facts: [
      { k: "Problema", v: "El gadolinio mejora la detección de tumores, pero tiene coste, alarga el estudio y puede acumularse en el cerebro con administraciones repetidas." },
      { k: "Datos", v: "RM 3D de pacientes con glioma del HGUGM (1,5 T, Philips Ingenia)." },
      { k: "Modelo", v: "U-Net 2D con encoder ResNet-50 preentrenado en ImageNet. Entrada de 3 canales (T1, FLAIR y SWI magnitud) y salida T1 con contraste." },
      { k: "Stack", v: "Python, PyTorch, fastai, segmentation-models-pytorch, MONAI, nibabel, Nipype, FSL, ANTs, MATLAB" },
      { k: "Resultado", v: "SSIM de un 65 % y PSNR de 23,5 dB en validación con el modelo final. Detecta tumores y vasos, pero no alcanza la precisión del contraste real." },
    ],
    flow: {
      title: "Flujo del proyecto",
      sub: "De las imágenes del hospital a una evaluación con métricas y con un radiólogo.",
      steps: [
        { title: "PACS del hospital", detail: "Imágenes DICOM" },
        { title: "Plataforma CIBERSAM", detail: "Seudonimización" },
        { title: "Organización", detail: "Limpieza y control de calidad en MATLAB" },
        { title: "Preprocesado", detail: "FSL, ANTs y Nipype" },
        { title: "Cortes 2D", detail: "Normalizados a [0, 1]" },
        { title: "U-Net ResNet-50", detail: "fastai y PyTorch" },
        { title: "Postprocesado", detail: "Etiqueta T1-SUB y ajuste de rango" },
        { title: "Evaluación", detail: "SSIM, PSNR, t-test y radiólogo" },
      ],
    },
    data: {
      title: "Datos reales, tratados con cuidado",
      body: "Esta parte importa tanto como el modelo. Los datos no podían salir del hospital sin más: se obtuvieron del PACS, se seudonimizaron en la plataforma CIBERSAM y solo entonces se descargaron, conforme a la Ley Orgánica 3/2018 de Protección de Datos. El estudio contempló los aspectos éticos y la exención de consentimiento informado.",
      noImages: "Por eso aquí no hay ninguna resonancia: el repositorio solo publica código, un .gitignore bloquea los formatos de imagen médica y los notebooks van sin salidas.",
      cohortTitle: "Pacientes en cada paso",
      cohort: [
        { label: "Iniciales", note: "" },
        { label: "Tras control de calidad", note: "20 sin las cuatro secuencias" },
        { label: "En los experimentos", note: "80 % entrenamiento y 20 % validación" },
      ],
    },
    prep: {
      title: "Preprocesado reproducible",
      sub: "Un pipeline de Nipype deja las cuatro secuencias comparables entre sí y guarda un registro de comprobación por paso para auditar cada volumen.",
      steps: [
        "Reorientación a la orientación estándar (RAS).",
        "Recorte de cuello y hombros con RobustFOV.",
        "Corrección del campo de sesgo con N4BiasFieldCorrection (ANTs).",
        "Remuestreo isotrópico a 0,71875 mm con interpolación bilineal.",
        "Extracción de cerebro con plantilla (BrainExtraction, ANTs).",
        "Corregistro de T1, FLAIR y SWI sobre la T1 con contraste (FLIRT, información mutua), midiendo la similitud antes y después.",
        "Recorte a 178 × 126, troceado en cortes 2D y normalización a [0, 1].",
      ],
      organise: "Antes, un script de MATLAB descomprime las exportaciones, renombra las secuencias, separa magnitud y fase de SWI y distingue T1 de T1 con contraste por la hora de adquisición, porque el exportador las nombraba igual. La clasificación se comprobó paciente a paciente.",
    },
    model: {
      title: "Modelo y entrenamiento",
      items: [
        "U-Net 2D con encoder ResNet-50 (segmentation-models-pytorch), entrenada con fastai.",
        "60 épocas con política de un solo ciclo, tasa de aprendizaje 0,0017 elegida con lr_find, weight decay 1e-3, rotación de ±10° y volteo.",
        "Pérdidas implementadas a medida: MS-SSIM, MAE, su combinación y una pérdida local que enfoca el aprendizaje en las zonas hiperintensas (tumor y vasos).",
      ],
    },
    results: {
      title: "Cuatro experimentos, siete modelos",
      sub: "Media y desviación típica sobre la validación. Se muestra el mejor modelo de los experimentos 3 y 4; los siete están en la memoria.",
      ssim: "SSIM (%)",
      psnr: "PSNR (dB)",
      table: { exp: "Exp.", target: "Etiqueta", loss: "Pérdida" },
    },
    decision: {
      title: "Por qué no ganó la métrica más alta",
      items: [
        "MS-SSIM y MS-SSIM + MAE no se diferenciaban de forma significativa (t-test, p = 0,985 en SSIM y p = 0,765 en PSNR): las métricas solas no permitían decidir.",
        "El experimento 4 sacaba mejor SSIM que el 2 (p < 0,01), pero el radiólogo prefirió el 2: las imágenes del 4 parecían más reales, pero introducían ruido, que en diagnóstico puede acabar en falsos positivos.",
        "MAE se descartó por infraestimar vasos. Con T1-SUB, MS-SSIM + MAE sobreestimaba zonas realzadas, y el radiólogo lo penalizó por el riesgo de falsos positivos.",
      ],
      verdict: "Modelo final: experimento 2 (MS-SSIM + MAE + pérdida local), elegido por criterio clínico además de numérico, con la valoración de un radiólogo con 20 años de experiencia.",
    },
    limits: {
      title: "Limitaciones y trabajo futuro",
      items: [
        "La calidad global queda por debajo del estado del arte y las imágenes sintéticas no sustituyen al contraste real para planificar tratamiento. Podrían apoyar el seguimiento de ciertos pacientes, como los gliomas de bajo grado, para reducir la exposición a gadolinio.",
        "Muestra pequeña: 40 pacientes. Al cierre de la memoria se estaba reentrenando con los 100.",
        "Arquitectura 2D por el límite de memoria de la GPU. Quedan como líneas futuras los modelos 3D, las GAN y un estudio de ablación de las secuencias de entrada.",
      ],
    },
    code: {
      title: "Qué mirar en el código",
      links: [
        { label: "Preprocesado de neuroimagen", path: "tfg/src/02_preprocesado/01_preprocesado_estructural.ipynb" },
        { label: "Entrenamiento de la U-Net ResNet-50", path: "tfg/src/03_modelo_dl/entrenamiento_unet_resnet50.ipynb" },
        { label: "Entrenamiento con pérdida local", path: "tfg/src/03_modelo_dl/entrenamiento_perdida_local.ipynb" },
        { label: "Organización de datos en MATLAB", path: "tfg/src/01_organizacion_datos/organizar_datos_cibersam.m" },
      ],
    },
  },
  en: {
    meta: {
      title: "Synthetic contrast MRI in neuro-oncology | Laura Riera Alonso",
      description:
        "Bachelor's thesis: a U-Net with a ResNet-50 encoder generates the gadolinium-enhanced T1 MRI from non-contrast sequences in glioma patients, validated with a radiologist.",
    },
    kicker: ["Bachelor's thesis", "Biomedical Engineering, UC3M, September 2023"],
    title: "Synthetic post-contrast T1 MRI with deep learning in neuro-oncology",
    lead: "I trained a U-Net with a ResNet-50 encoder that generates the post-contrast (gadolinium) T1 MRI from three non-contrast sequences: T1, FLAIR and SWI. The goal is to reduce gadolinium use in the follow-up of glioma patients.",
    role: {
      title: "Supervisors",
      body: "Daniel Sanderson Moreno and Manuel Desco Menéndez (Bioengineering, UC3M and Gregorio Marañón University Hospital).",
    },
    facts: [
      { k: "Problem", v: "Gadolinium improves tumour detection, but it is costly, makes scans longer and can build up in the brain after repeated doses." },
      { k: "Data", v: "3D MRI of glioma patients at HGUGM (1.5 T, Philips Ingenia)." },
      { k: "Model", v: "2D U-Net with a ResNet-50 encoder pretrained on ImageNet. Three input channels (T1, FLAIR and SWI magnitude), post-contrast T1 output." },
      { k: "Stack", v: "Python, PyTorch, fastai, segmentation-models-pytorch, MONAI, nibabel, Nipype, FSL, ANTs, MATLAB" },
      { k: "Result", v: "SSIM of about 65% and PSNR of 23.5 dB on validation with the final model. It picks up tumours and vessels, but does not match real contrast." },
    ],
    flow: {
      title: "Project flow",
      sub: "From hospital images to an evaluation with metrics and a radiologist.",
      steps: [
        { title: "Hospital PACS", detail: "DICOM images" },
        { title: "CIBERSAM platform", detail: "Pseudonymisation" },
        { title: "Organisation", detail: "Cleaning and quality control in MATLAB" },
        { title: "Preprocessing", detail: "FSL, ANTs and Nipype" },
        { title: "2D slices", detail: "Normalised to [0, 1]" },
        { title: "U-Net ResNet-50", detail: "fastai and PyTorch" },
        { title: "Post-processing", detail: "T1-SUB target and range adjustment" },
        { title: "Evaluation", detail: "SSIM, PSNR, t-test and radiologist" },
      ],
    },
    data: {
      title: "Real data, handled with care",
      body: "This part matters as much as the model. The data could not simply leave the hospital: it was pulled from the PACS, pseudonymised on the CIBERSAM platform and only then downloaded, in line with Spain's data protection law (Organic Law 3/2018). The study covered ethics and the informed consent waiver.",
      noImages: "That is why there are no MRI scans here: the repository only publishes code, a .gitignore blocks medical image formats and notebooks ship without outputs.",
      cohortTitle: "Patients at each step",
      cohort: [
        { label: "Initial", note: "" },
        { label: "After quality control", note: "20 lacked all four sequences" },
        { label: "Used in the experiments", note: "80% training and 20% validation" },
      ],
    },
    prep: {
      title: "Reproducible preprocessing",
      sub: "A Nipype pipeline makes the four sequences comparable and keeps a per-step check log to audit every volume.",
      steps: [
        "Reorientation to the standard orientation (RAS).",
        "Neck and shoulder cropping with RobustFOV.",
        "Bias field correction with N4BiasFieldCorrection (ANTs).",
        "Isotropic resampling to 0.71875 mm with bilinear interpolation.",
        "Template-based brain extraction (BrainExtraction, ANTs).",
        "Registration of T1, FLAIR and SWI onto the post-contrast T1 (FLIRT, mutual information), measuring similarity before and after.",
        "Cropping to 178 × 126, slicing into 2D and normalising to [0, 1].",
      ],
      organise: "Before that, a MATLAB script unpacks the exports, renames the sequences, splits SWI magnitude and phase, and tells T1 from post-contrast T1 by acquisition time, because the exporter gave them the same name. The classification was checked patient by patient.",
    },
    model: {
      title: "Model and training",
      items: [
        "2D U-Net with a ResNet-50 encoder (segmentation-models-pytorch), trained with fastai.",
        "60 epochs with a one-cycle policy, a 0.0017 learning rate picked with lr_find, 1e-3 weight decay, ±10° rotation and flips.",
        "Custom loss functions: MS-SSIM, MAE, their combination and a local loss that focuses learning on hyperintense areas (tumour and vessels).",
      ],
    },
    results: {
      title: "Four experiments, seven models",
      sub: "Mean and standard deviation on validation. The best model from experiments 3 and 4 is shown; all seven are in the thesis.",
      ssim: "SSIM (%)",
      psnr: "PSNR (dB)",
      table: { exp: "Exp.", target: "Target", loss: "Loss" },
    },
    decision: {
      title: "Why the highest metric did not win",
      items: [
        "MS-SSIM and MS-SSIM + MAE were not significantly different (t-test, p = 0.985 for SSIM and p = 0.765 for PSNR): the metrics alone could not decide.",
        "Experiment 4 scored a higher SSIM than experiment 2 (p < 0.01), but the radiologist preferred 2: the images from 4 looked more realistic but added noise, which in diagnosis can turn into false positives.",
        "MAE was dropped because it underestimated vessels. With T1-SUB, MS-SSIM + MAE overestimated enhancing areas, and the radiologist penalised it for the risk of false positives.",
      ],
      verdict: "Final model: experiment 2 (MS-SSIM + MAE + local loss), chosen on clinical as well as numerical grounds, with the assessment of a radiologist with 20 years of experience.",
    },
    limits: {
      title: "Limitations and future work",
      items: [
        "Overall quality is below the state of the art, and synthetic images do not replace real contrast for treatment planning. They could support the follow-up of some patients, such as low-grade gliomas, to reduce gadolinium exposure.",
        "A small sample: 40 patients. When the thesis closed, the model was being retrained on all 100.",
        "A 2D architecture because of GPU memory limits. 3D models, GANs and an ablation study of the input sequences remain future work.",
      ],
    },
    code: {
      title: "Where to look in the code",
      links: [
        { label: "Neuroimaging preprocessing", path: "tfg/src/02_preprocesado/01_preprocesado_estructural.ipynb" },
        { label: "U-Net ResNet-50 training", path: "tfg/src/03_modelo_dl/entrenamiento_unet_resnet50.ipynb" },
        { label: "Training with the local loss", path: "tfg/src/03_modelo_dl/entrenamiento_perdida_local.ipynb" },
        { label: "Data organisation in MATLAB", path: "tfg/src/01_organizacion_datos/organizar_datos_cibersam.m" },
      ],
    },
  },
} satisfies Record<Lang, unknown>;
