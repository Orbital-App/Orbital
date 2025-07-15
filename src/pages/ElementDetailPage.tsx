import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import elementsData from "../data/PeriodicTable_nl.json";
import "../components/PeriodicTile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import AtomView from "../components/AtomView";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { getUserData, toggleFavorite } from "../utils/userData";

export default function ElementDetail() {
  const userData = getUserData();
  const { symbol } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  let category = "onbekend";

  const element = elementsData.elements.find((data) => {
    if (!symbol) return false;
    return (
      data.symbol.toLowerCase() === symbol.toLowerCase() ||
      data.number === Number(symbol)
    );
  });

  if (!element) {
    return <p className="mx-[80px] mt-[60px]">Geen element gevonden.</p>;
  }

  useEffect(() => {
    if (element) {
      setIsFavorite(userData.favorites.includes(element.symbol));
    }
  }, [element]);

  category = element.category.toLowerCase();
  const groupMap: { [key: string]: number } = {
    alkalimetaal: 1,
    aardalkalimetaal: 2,
    overgangsmetaal: 3,
    hoofdgroepmetaal: 4,
    metalloïde: 5,
    "niet-metalen": 6,
    edelgas: 7,
    lanthanide: 8,
    actinide: 9,
    onbekend: 10,
  };
  const group = groupMap[category.toLowerCase()] || 10;

  useEffect(() => {
    if (group === 10) {
      setImageAvailable(false);
    } else {
      setImageAvailable(true);
    }
  }, [group]);

  function setFavorite() {
    setIsFavorite(!isFavorite);
    if (element) {
      toggleFavorite(element.symbol);
    }
  }

  return (
    <div className="h-full overflow-auto">
      <BackButton />
      <div className="grid grid-cols-2 gap-[40px] mx-[80px] mt-[60px] mb-[20px]">
        <div className="">
          <div className="flex items-center gap-[25px]">
            <h1 className="text-[64px] font-black">{element.name}</h1>
            <button onClick={() => setFavorite()} className="cursor-pointer">
              {isFavorite ? (
                <FontAwesomeIcon
                  icon={faStar}
                  className="mt-[8px] text-2xl text-yellow-500"
                />
              ) : (
                <FontAwesomeIcon icon={faStar} className="mt-[8px] text-2xl" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-[10px] mt-[-6px]">
            <div className={`rounded-4xl bg-g${group} w-[18px] h-[18px]`}></div>
            <p className="font-light font-header text-[20px]">
              {element.category}
            </p>
          </div>

          <p className="mt-[40px] font-display text-[26px] font-regular">
            {element.summary}
          </p>

          {/***<div className="my-[40px] text-[24px] font-display font-regular">
            <p>
              Symbool: <span className="text-[#5D5D5D]">{element.symbol}</span>
            </p>
            <p>
              Atomaire massa:{" "}
              <span className="text-[#5D5D5D]">{element.atomic_mass} u</span>
            </p>
            <p>
              Dichtheid:{" "}
              <span className="text-[#5D5D5D]">{element.density} g/cm3</span>
            </p>
            <p>
              Uiterlijk:{" "}
              <span className="text-[#5D5D5D]">{element.appearance}</span>
            </p>
            <p>
              Smeltpunt:{" "}
              <span className="text-[#5D5D5D]">{element.melt} K</span>
            </p>
            <p>
              Kookpunt: <span className="text-[#5D5D5D]">{element.boil} K</span>
            </p>
            <p>
              Ontdekt door:{" "}
              <span className="text-[#5D5D5D]">{element.discovered_by}</span>
            </p>
          </div> ***/}

          <div className="mt-[40px] mb-[50px] text-[24px] font-display font-regular max-w-[800px]">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className=" font-medium  text-black">Symbool</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.symbol || "Onbekend"}
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className=" font-medium  text-black">Atoomnummer</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.number || "Onbekend"}
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="  font-medium  text-black">Atomaire massa</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.atomic_mass || "Onbekend"} u
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="  font-medium  text-black">Dichtheid</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.density || "Onbekend"} g/cm3
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="  font-medium  text-black">Uiterlijk</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.appearance || "Onbekend"}
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="  font-medium  text-black">Smeltpunt</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.melt || "Onbekend"} K
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="  font-medium  text-black">Kookpunt</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.boil || "Onbekend"} K
                </dd>
              </div>

              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="  font-medium  text-black">Ontdekt door</dt>
                <dd className="mt-1 text-[#5D5D5D] sm:col-span-2 sm:mt-0">
                  {element.discovered_by || "Onbekend"}
                </dd>
              </div>
            </dl>
          </div>

          <a
            href={`${element.source}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-flex items-center cursor-pointer bg-[#3A73EE] text-white rounded-[10px] h-[60px] mb-10">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-[26px] ml-[24px] mr-[10px]"
              />
              <p className="text-[24px] font-header font-semibold mr-[24px]">
                Meer over {element.name}
              </p>
            </div>
          </a>

          {imageAvailable && (
            <button onClick={() => setIsModalOpen(true)}>
              <div className="inline-flex items-center cursor-pointer bg-[#5D5D5D] text-white rounded-[10px] h-[60px] ml-[20px]">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[26px] ml-[24px] mr-[10px]"
                />
                <p className="text-[24px] font-header font-semibold mr-[24px]">
                  Bekijk afbeelding
                </p>
              </div>
            </button>
          )}
        </div>

        <div className="px-[50px] mt-[40px]">
          <div className="cursor-grab">
            <AtomView shells={element.shells} />
          </div>
          <div className="flex gap-[20px] mt-[20px]">
            <div className="flex items-center gap-[8px]">
              <div
                className={`rounded-4xl bg-[#882a2a] w-[18px] h-[18px]`}
              ></div>
              <p className="font-light font-header text-[20px]">Proton</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <div
                className={`rounded-4xl bg-[#585858] w-[18px] h-[18px]`}
              ></div>
              <p className="font-light font-header text-[20px]">Neutron</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <div
                className={`rounded-4xl bg-[#457a88] w-[18px] h-[18px]`}
              ></div>
              <p className="font-light font-header text-[20px]">Elektron</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-2xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                Afbeelding van {element.name}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <img
                src={element.image.url}
                alt={element.image.title || element.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-gray-700">
                Bron: {element.image.attribution || "onbekend"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
