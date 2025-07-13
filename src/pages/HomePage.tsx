import PeriodicTile from "../components/PeriodicTile";
import elementsData from "../data/PeriodicTable_nl.json";


export default function HomePage() {
  return (

    <div
      className="grid gap-[10px] mt-[47px] mx-[45px]"
      style={{
        gridTemplateColumns: "repeat(18, 110px)",
        gridAutoRows: "110px",
      }}
    >
      {elementsData.elements.map((el) => (
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
  );
}
