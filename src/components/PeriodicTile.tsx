type PeriodicTileProps = {
  category: string;
  name: string;
  symbol: string;
  atomicNumber: number;
};
import { Link } from "react-router-dom";
import "./PeriodicTile.css";

function PeriodicTile({
  category,
  name,
  symbol,
  atomicNumber,
}: PeriodicTileProps)

{
  // Map category to a group number for styling
  const groupMap: { [key: string]: number } = {
    "alkalimetaal": 1,
    "alkalisch aarde metaal": 2,
    "overgangsmetaal": 3,
    "metaal na de overdracht": 4,
    "metalloïde": 5,
    "diatomee niet -metaal": 6,
    "polyatomisch niet -metaal": 6,
    "edelgas": 7,
    "lanthanide": 8,
    "actinide": 9,
    "onbekend": 10,
  };

  const group = groupMap[category.toLowerCase()] || 10; // Als niet gevonden, groep = 10

  return (
    <>
      <Link to={`/element/${atomicNumber}`}>
      <div
        className={`w-[110px] select-none h-[110px] rounded-[10px] flex flex-col justify-between bg-g${group} text-white`}
      >
        <div className="text-[20px] mt-[4px] ml-[10px] font-header text-left">{atomicNumber}</div>

        <div className="text-center mt-[-10px] mb-[4px]">
          <div className="text-[48px] font-black font-header leading-none">
            {symbol}
          </div>
        </div>

        <div className="text-center text-[16px] font-display font-[700] mb-[7px]">{name}</div>
      </div>
      </Link>
    </>
  );
}

export default PeriodicTile;
