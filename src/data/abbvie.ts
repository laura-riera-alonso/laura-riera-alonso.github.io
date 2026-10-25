import type { T } from "../lib/i18n";

/**
 * Lo que hace la aplicación de reuniones, según el README de Laura. `managed` es algo que la app gestiona;
 * `input` es una entrada de datos (la importación), que se cuenta aparte.
 */
export const appFeatures: { icon: string; kind: "managed" | "input"; label: T }[] = [
  { icon: "users-three", kind: "managed", label: { es: "Participantes", en: "Participants" } },
  { icon: "airplane-tilt", kind: "managed", label: { es: "Viajes", en: "Travel" } },
  { icon: "list-checks", kind: "managed", label: { es: "Tareas", en: "Tasks" } },
  { icon: "seal-check", kind: "managed", label: { es: "Aprobaciones", en: "Approvals" } },
  { icon: "bell-ringing", kind: "managed", label: { es: "Alertas", en: "Alerts" } },
  { icon: "microsoft-excel-logo", kind: "input", label: { es: "Importación desde Excel y Outlook", en: "Import from Excel and Outlook" } },
];
