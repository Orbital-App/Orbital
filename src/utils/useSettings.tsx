import { useEffect, useState } from "react";

export type Settings = {
  languageData: "nl" | "en";
  enableAnimations: boolean;
  rotationSpeedElektrons: "slow" | "normal" | "fast";
  enableAtomVisualisation: boolean;
  useKelvin: boolean;
};

const defaultSettings: Settings = {
  languageData: "nl",
  enableAnimations: true,
  rotationSpeedElektrons: "slow",
  enableAtomVisualisation: true,
  useKelvin: true,
};

export default function useSettings() {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const stored = localStorage.getItem("settings");
      return stored
        ? { ...defaultSettings, ...JSON.parse(stored) }
        : defaultSettings;
    } catch (e) {
      console.error("Fout bij lezen van localStorage:", e);
      return defaultSettings;
    }
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { settings, updateSetting };
}
