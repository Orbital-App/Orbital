import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageNotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <div className="relative text-center">
          <h1 className="mt-2 text-[64px] font-bold text-balance text-gray-900">
            Pagina niet gevonden
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
