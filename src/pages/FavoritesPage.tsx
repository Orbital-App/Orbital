import BackButton from "../components/BackButton";
import PeriodicTile from "../components/PeriodicTile";
import elementsData from "../data/PeriodicTable_nl.json";
import useFavorites from "../utils/useFavorites";

function FavoritesPage() {
  const { favorites } = useFavorites();
  const element = elementsData.elements.filter((data) => {
    return favorites.includes(data.number);
  });

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

export default FavoritesPage;
