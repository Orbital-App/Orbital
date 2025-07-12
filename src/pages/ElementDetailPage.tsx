import { useParams } from "react-router-dom";

export default function ElementDetail() {
  const { symbol } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Element: {symbol}</h2>
      <p>Meer info volgt...</p>
    </div>
  );
}
