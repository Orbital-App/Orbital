import { useState } from "react";
import PeriodicTile from "../components/PeriodicTile";
import elementsData from "../data/PeriodicTable_nl.json";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

type HomePageProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (v: boolean) => void;
};

const filters = [
  {
    id: "category",
    name: "Categorie",
    options: [
      { value: "1", label: "Alkalimetaal", checked: false },
      { value: "2", label: "Aardalkalimetaal", checked: false },
      { value: "3", label: "Overgangsmetaal", checked: false },
      { value: "4", label: "Hoofdgroepmetaal", checked: false },
      { value: "5", label: "Metalloïde", checked: false },
      { value: "6", label: "Niet-metalen", checked: false },
      { value: "7", label: "Edelgas", checked: false },
      { value: "8", label: "Lanthanide", checked: false },
      { value: "9", label: "Actinide", checked: false },
      { value: "10", label: "Onbekend", checked: false },
    ],
  },
  {
    id: "phase",
    name: "Toestand",
    options: [
      { value: "gas", label: "Gas", checked: false },
      { value: "vloeibaar", label: "Vloeibaar", checked: false },
      { value: "vast", label: "Vast", checked: false },
    ],
  },
];

export default function HomePage({
  isFilterOpen,
  setIsFilterOpen,
}: HomePageProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);

  function handleFilterClick() {
    setFilterActive(true);
  }

  return (
    <div
      className="overflow-auto cursor-grab active:cursor-grabbing pb-[150px] no-scrollbar"
      style={{
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
      onMouseDown={(e) => {
        const el = e.currentTarget;
        let startX = e.pageX;
        let startY = e.pageY;
        let scrollLeft = el.scrollLeft;
        let scrollTop = el.scrollTop;

        const onMouseMove = (ev: MouseEvent) => {
          const x = ev.pageX - startX;
          const y = ev.pageY - startY;
          el.scrollLeft = scrollLeft - x;
          el.scrollTop = scrollTop - y;
        };

        const onMouseUp = () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      }}
    >
      <div
        className="grid gap-[10px] my-[47px] mx-[45px] min-w-[1980px] min-h-[990px]"
        style={{
          gridTemplateColumns: "repeat(18, 110px)",
          gridAutoRows: "110px",
        }}
      >
        {elementsData.elements
          .filter((el) => {
            const groupMap: { [key: string]: number } = {
              Alkalimetaal: 1,
              Aardalkalimetaal: 2,
              Overgangsmetaal: 3,
              Hoofdgroepmetaal: 4,
              Metalloïde: 5,
              "Niet-metalen": 6,
              Edelgas: 7,
              Lanthanide: 8,
              Actinide: 9,
              Onbekend: 10,
            };

            const elementGroup =
              groupMap[
                el.category.charAt(0).toUpperCase() +
                  el.category.slice(1).toLowerCase()
              ] || 10;

            const matchCategory =
              selectedCategories.length === 0 ||
              selectedCategories.includes(String(elementGroup));

            const matchPhase =
              selectedPhases.length === 0 ||
              selectedPhases.includes(el.phase.toLowerCase());

            return matchCategory && matchPhase;
          })
          .map((el) => (
            <div
              key={el.number}
              style={{
                gridColumn: el.xpos,
                gridRow: el.ypos,
              }}
            >
              <PeriodicTile
                category={el.category}
                name={el.name}
                symbol={el.symbol}
                atomicNumber={el.number}
              />
            </div>
          ))}
      </div>

      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50"
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                setIsFilterOpen(false);
                setIsClosing(false);
              }, 150);
            }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div
              className={`bg-white rounded-lg p-6 max-w-2xl max-h-full min-w-[500px] overflow-auto ${
                isClosing ? "animate-popup-out" : "animate-popup-in"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Filteropties</h3>
                <button
                  onClick={() => {
                    setIsClosing(true);
                    setTimeout(() => {
                      setIsFilterOpen(false);
                      setIsClosing(false);
                    }, 150);
                  }}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <form
                  className="hidden lg:block"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsClosing(true);
                    setTimeout(() => {
                      setIsFilterOpen(false);
                      setIsClosing(false);
                    }, 150);
                  }}
                >
                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {/*<PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />*/}
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="group-data-open:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel
                        className="pt-6"
                        data-headlessui-state="open"
                      >
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    defaultChecked={option.checked}
                                    checked={
                                      section.id === "category"
                                        ? selectedCategories.includes(
                                            option.value
                                          )
                                        : selectedPhases.includes(option.value)
                                    }
                                    onChange={() => {
                                      if (section.id === "category") {
                                        setSelectedCategories((prev) =>
                                          prev.includes(option.value)
                                            ? prev.filter(
                                                (v) => v !== option.value
                                              )
                                            : [...prev, option.value]
                                        );
                                      } else if (section.id === "phase") {
                                        setSelectedPhases((prev) =>
                                          prev.includes(option.value)
                                            ? prev.filter(
                                                (v) => v !== option.value
                                              )
                                            : [...prev, option.value]
                                        );
                                      }
                                    }}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  <div className="flex gap-[15px] items-center">
                    <button>
                      <div className="inline-flex items-center cursor-pointer bg-[#3A73EE] text-white rounded-[10px] h-[50px] mt-10 mb-[15px]">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-[20px] ml-[24px] mr-[10px]"
                        />
                        <p className="text-[20px] font-header font-semibold mr-[24px]">
                          Sluiten
                        </p>
                      </div>
                    </button>
                    {selectedCategories.length > 0 || selectedPhases.length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategories([]);
                          setSelectedPhases([]);
                        }}
                        className="inline-flex items-center cursor-pointer bg-[#5D5D5D] text-white rounded-[10px] h-[50px] mt-10 mb-[15px]"
                      >
                        <p className="text-[20px] font-header font-semibold mx-[24px]">
                          Reset filters
                        </p>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
