import BackButton from "../components/BackButton";
import useSettings from "../utils/useSettings";

function SettingsPage() {
  const { settings, updateSetting } = useSettings();

  return (
    <div className="overflow-auto">
      <BackButton />
      <div className="mt-[47px] mx-[45px] grid grid-cols-2">
        <div>
          <h1 className="text-[64px] font-header font-semibold">
            Instellingen
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-[20px] text-[26px] font-display pt-[20px]">
          <p>Rotatiesnelheid elektronen</p>
          <p className="text-[#5D5D5D]">
            <button
              value="slow"
              className={`cursor-pointer ${ settings.rotationSpeedElektrons === "slow" ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "rotationSpeedElektrons",
                  (e.target as HTMLButtonElement).value as
                    | "slow"
                    | "normal"
                    | "fast"
                )
              }
            >
              Langzaam
            </button>{" "}
            —{" "}
            <button
              value="normal"
              className={`cursor-pointer ${ settings.rotationSpeedElektrons === "normal" ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "rotationSpeedElektrons",
                  (e.target as HTMLButtonElement).value as
                    | "slow"
                    | "normal"
                    | "fast"
                )
              }
            >
              Normaal
            </button>{" "}
            —{" "}<button
              value="fast"
              className={`cursor-pointer ${ settings.rotationSpeedElektrons === "fast" ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "rotationSpeedElektrons",
                  (e.target as HTMLButtonElement).value as "slow" | "normal" | "fast"
                )}
            >
              Snel
            </button>
          </p>

          <p>Animaties inschakelen</p>
          <p className="text-[#5D5D5D]">
            <button
              type="button"
              data-value="true"
              className={`cursor-pointer ${ settings.enableAnimations ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "enableAnimations",
                  e.currentTarget.dataset.value === "true"
                )
              }
            >
              Aan
            </button>{" "}
            —{" "}
            <button
              type="button"
              data-value="false"
              className={`cursor-pointer ${ !settings.enableAnimations ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "enableAnimations",
                  e.currentTarget.dataset.value === "true"
                )
              }
            >
              Uit
            </button>
          </p>

          <p>Visualisatie atoom</p>
          <p className="text-[#5D5D5D]">
            <button
              type="button"
              data-value="true"
              className={`cursor-pointer ${ settings.enableAtomVisualisation ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "enableAtomVisualisation",
                  e.currentTarget.dataset.value === "true"
                )
              }
            >
              Aan
            </button>{" "}
            —{" "}
            <button
              type="button"
              data-value="false"
              className={`cursor-pointer ${ !settings.enableAtomVisualisation ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "enableAtomVisualisation",
                  e.currentTarget.dataset.value === "true"
                )
              }
            >
              Uit
            </button>
          </p>

          <p>Taal data</p>
          <p className="text-[#5D5D5D]">
            <button
              value="nl"
              className={`cursor-pointer ${ settings.languageData === "nl" ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "languageData",
                  (e.target as HTMLButtonElement).value as "nl" | "en"
                )
              }
            >
              Nederlands
            </button>{" "}
            —{" "}
            <button
              value="en"
              className={`cursor-pointer ${ settings.languageData === "en" ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "languageData",
                  (e.target as HTMLButtonElement).value as "nl" | "en"
                )
              }
            >
              Engels
            </button>
          </p>

          <p>Temperatuureenheid</p>
          <p className="text-[#5D5D5D]">
            <button
              type="button"
              data-value="true"
              className={`cursor-pointer ${ settings.useKelvin ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "useKelvin",
                  e.currentTarget.dataset.value === "true"
                )
              }
            >
              Kelvin
            </button>{" "}
            —{" "}
            <button
              type="button"
              data-value="false"
              className={`cursor-pointer ${ !settings.useKelvin ? "underline" : ""}`}
              onClick={(e) =>
                updateSetting(
                  "useKelvin",
                  e.currentTarget.dataset.value === "true"
                )
              }
            >
              Celsius
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
