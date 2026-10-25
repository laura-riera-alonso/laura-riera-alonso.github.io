// Resultados numéricos tal cual aparecen en los README del TFG y del TFM. No redondear ni inventar.

export interface TfgModel {
  id: string;
  exp: number;
  /** Etiqueta con la que se entrenó (T1 con contraste o T1-SUB). */
  target: "t1c" | "t1sub" | "t1sub-post";
  loss: string;
  ssim: { mean: number; sd: number };
  psnr: { mean: number; sd: number };
  chosen?: boolean;
}

// Tabla resumida del README: el mejor modelo de los experimentos 3 y 4; los 7 están en la memoria.
export const tfgModels: TfgModel[] = [
  { id: "e1-msssim", exp: 1, target: "t1c", loss: "MS-SSIM", ssim: { mean: 65.74, sd: 6.09 }, psnr: { mean: 23.96, sd: 1.88 } },
  { id: "e1-mae", exp: 1, target: "t1c", loss: "MAE", ssim: { mean: 63.85, sd: 5.09 }, psnr: { mean: 23.18, sd: 1.53 } },
  { id: "e1-mix", exp: 1, target: "t1c", loss: "MS-SSIM + MAE", ssim: { mean: 65.8, sd: 6.12 }, psnr: { mean: 23.68, sd: 1.8 } },
  { id: "e2", exp: 2, target: "t1c", loss: "MS-SSIM + MAE + local", ssim: { mean: 65.35, sd: 5.84 }, psnr: { mean: 23.49, sd: 1.66 }, chosen: true },
  { id: "e3", exp: 3, target: "t1sub", loss: "MS-SSIM", ssim: { mean: 75.12, sd: 5.32 }, psnr: { mean: 18.61, sd: 1.01 } },
  { id: "e4", exp: 4, target: "t1sub-post", loss: "MS-SSIM", ssim: { mean: 76.17, sd: 5.32 }, psnr: { mean: 20.58, sd: 1.04 } },
];

export const tfgCohort = { initial: 120, afterQc: 100, used: 40 };

export interface TfmModel {
  id: string;
  name: { es: string; en: string };
  auc: number;
  sens: number;
  spec: number;
  f1: number;
  chosen?: boolean;
}

export const tfmModels: TfmModel[] = [
  { id: "logit-pca", name: { es: "Regresión logística + PCA", en: "Logistic regression + PCA" }, auc: 0.809, sens: 0.668, spec: 0.782, f1: 0.625 },
  { id: "lasso", name: { es: "Lasso (umbral ajustado)", en: "Lasso (tuned threshold)" }, auc: 0.83, sens: 0.769, spec: 0.714, f1: 0.644, chosen: true },
  { id: "rf", name: { es: "Random Forest", en: "Random forest" }, auc: 0.793, sens: 0.408, spec: 0.971, f1: 0.555 },
  { id: "svm-lin", name: { es: "SVM lineal", en: "Linear SVM" }, auc: 0.808, sens: 0.725, spec: 0.738, f1: 0.634 },
  { id: "svm-rad", name: { es: "SVM radial", en: "Radial SVM" }, auc: 0.807, sens: 0.697, spec: 0.747, f1: 0.622 },
];

export const tfmCohort = {
  start: 364627,
  final: 2220,
  train: 1554,
  test: 666,
  variables: 66,
  medsRecords: 166926,
  medsManual: 6879,
};

/** Simulación ilustrativa del TFM: intervenir sobre el primer decil de riesgo frente a una selección al azar. */
export const tfmSimulation = {
  patients: 2220,
  cases: 636,
  reviewed: 222,
  foundByModel: 205,
  foundAtRandom: 70,
  topDecileRate: 92.5,
  baseRate: 31.7,
  lift: 2.92,
};
