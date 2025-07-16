import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isWeb } from "../utils/IsWeb";

export default function DownloadPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] overflow-auto">
      <div className="relative text-center">
        <h1 className="mt-2 text-[64px] font-bold text-balance font-header">
          Download Orbital
        </h1>
        {(isWeb() && (
          <>
            <p className="mt-1 text-[24px] font-display">
              Download de laatste versie van Orbital voor Windows.
            </p>
            <a
              href="https://orbital.tijshendriks.nl/download/Orbital.exe"
              className="mt-[60px] inline-flex items-center bg-[#3A73EE] text-white rounded-[10px] h-[60px] cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[26px] ml-[24px] mr-[10px]"
              />
              <p className="text-[24px] font-header font-semibold mr-[24px]">
                Download voor Windows
              </p>
            </a>
          </>
        )) || <p className="mt-1 text-[24px] font-display">Bedankt voor het downloaden van Orbital!</p>}
      </div>
    </div>
  );
}
