import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <div className="ml-[45px] mt-[15px] font-header text-[40px] cursor-pointer">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-[#5D5D5D]"
        />
        <span className="ml-[10px] text-[#5D5D5D] font-semibold">Terug</span>
      </div>
    </button>
  );
}
