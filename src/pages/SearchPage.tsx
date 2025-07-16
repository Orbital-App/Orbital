import { useLocation } from "react-router-dom";
import elementsData from "../data/PeriodicTable_nl.json";
import PeriodicTile from "../components/PeriodicTile";
import BackButton from "../components/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SearchPage() {
  const query = useQuery().get("q");
  function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
  }

  if (!query) {
    return (
      <>
        <BackButton />
        <p className="mx-[80px] mt-[60px]">Voer een zoekopdracht in.</p>
      </>
    );
  }

  const element = elementsData.elements.filter((data) => {
    if (!query) return false;
    try {
      return (
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.category.toLowerCase().includes(query.toLowerCase()) ||
        data.number.toString().match(query.toLowerCase()) ||
        data.symbol.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error("Error processing element data:", error);
      return false;
    }
  });
  if (!element || element.length === 0) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-[70vh] overflow-auto">
          <div className="relative text-center">
            <h1 className="mt-2 text-[64px] font-bold text-balance text-gray-900">
              De zoekopdracht heeft geen resultaten opgeleverd
            </h1>
            <button
              onClick={() => window.history.back()}
              className="mt-[40px] inline-flex items-center bg-[#3A73EE] text-white rounded-[10px] h-[60px] cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[26px] ml-[24px] mr-[10px]"
              />
              <p className="text-[24px] font-header font-semibold mr-[24px]">
                Ga terug
              </p>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="overflow-auto">
      <BackButton />
      <div className="flex flex-wrap gap-[10px] mt-[47px] mx-[45px]">
        {element.map((element) => (
          <PeriodicTile
            key={element.number}
            category={element.category}
            name={element.name}
            symbol={element.symbol}
            atomicNumber={element.number}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
