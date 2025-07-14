import { useLocation } from "react-router-dom";
import elementsData from "../data/PeriodicTable_nl.json";
import PeriodicTile from "../components/PeriodicTile";
import BackButton from "../components/BackButton";

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
    return (
      data.name.toLowerCase().includes(query.toLowerCase()) ||
      data.category.toLowerCase().includes(query.toLowerCase()) ||
      data.number.toString().match(query.toLowerCase()) ||
      data.symbol.toLowerCase().includes(query.toLowerCase())
    );
  });
  if (!element) {
    return (
      <>
        <BackButton />
        <p className="mx-[80px] mt-[60px]">Geen element gevonden.</p>
      </>
    );
  }

  return (
    <div className="overflow-auto">
      <BackButton />
      <div className="flex flex-wrap gap-[10px] mt-[47px] mx-[45px]">
        {element.map((element) => (
          <PeriodicTile
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
