export const themeCatalog = [
  {
    id: "light",
    label: "Light",
    swatch: "#f5f5f7",
    accent: "#09090b",
    scheme: "light",
  },
  {
    id: "dark",
    label: "Dark",
    swatch: "#09090b",
    accent: "#fafafa",
    scheme: "dark",
  },
  {
    id: "navy",
    label: "Navy",
    swatch: "#0b1c33",
    accent: "#d4af77",
    scheme: "dark",
  },
  {
    id: "midnight-gold",
    label: "Midnight Gold",
    swatch: "#0a0a0a",
    accent: "#d4af37",
    scheme: "dark",
  },
  {
    id: "champagne",
    label: "Champagne",
    swatch: "#f6edd9",
    accent: "#b45309",
    scheme: "light",
  },
] as const;

export type Theme = (typeof themeCatalog)[number]["id"];

export const themes = themeCatalog.map((theme) => theme.id);

export const DEFAULT_THEME: Theme = "light";
export const THEME_STORAGE_KEY = "tb-agency-theme";

export function isTheme(value: string): value is Theme {
  return themeCatalog.some((theme) => theme.id === value);
}

export function getTheme(id: Theme) {
  return themeCatalog.find((theme) => theme.id === id) ?? themeCatalog[0];
}
