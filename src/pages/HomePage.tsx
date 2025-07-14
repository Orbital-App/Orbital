import PeriodicTile from "../components/PeriodicTile";
import elementsData from "../data/PeriodicTable_nl.json";

export default function HomePage() {
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
    </div>
  );
}
