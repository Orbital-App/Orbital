import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import elementsData from "../data/PeriodicTable_nl.json";
import "../components/PeriodicTile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export default function ElementDetail() {
  const { symbol } = useParams();
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
  category = element.category.toLowerCase();
  const groupMap: { [key: string]: number } = {
    alkalimetaal: 1,
    "alkalisch aarde metaal": 2,
    overgangsmetaal: 3,
    "metaal na de overdracht": 4,
    metalloïde: 5,
    "diatomee niet -metaal": 6,
    "polyatomisch niet -metaal": 6,
    edelgas: 7,
    lanthanide: 8,
    actinide: 9,
    onbekend: 10,
  };
  const group = groupMap[category.toLowerCase()] || 10;

  return (
    <>
      <BackButton />
      <div className="grid grid-cols-2 gap-[40px] mx-[80px] my-[60px]">
        <div className="">
          <h1 className="text-[64px] font-black">{element.name}</h1>
          <div className="flex items-center gap-[10px] mt-[-6px]">
            <div className={`rounded-4xl bg-g${group} w-[18px] h-[18px]`}></div>
            <p className="font-light font-header text-[20px]">
              {element.category}
            </p>
          </div>

          <p className="mt-[40px] font-display text-[26px] font-regular">
            {element.summary}
          </p>

          <div className="my-[40px] text-[24px] font-display font-regular">
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
          </div>

          <a href={`${element.source}`} target="_blank" rel="noopener noreferrer">
            <div className="inline-flex items-center cursor-pointer bg-[#3A73EE] text-white rounded-[10px] h-[60px]">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[26px] ml-[24px] mr-[10px]"
              />
              <p className="text-[24px] font-header font-semibold mr-[24px]">
                Meer over {element.name}
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
