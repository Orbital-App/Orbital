import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header text-black px-[45px] h-[120px]">
      <div className="flex items-center pt-[32px]">
        <Link to={"/"}>
          <h1 className="text-[48px] text-[#3A73EE] font-[900] font-header">
            Orbital
          </h1>
        </Link>
        <div className="font-header text-[#5D5D5D] text-2xl ml-[75px]">
          <form action={"search"} method="get" className="flex items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="header-icons mr-[10px]"
            />
            <input type="text" placeholder="Zoek" name="i"></input>
          </form>
        </div>
        <div className="flex items-center ml-auto">
          <Link to={"/favorites"}>
            <FontAwesomeIcon
              icon={faStar}
              className="header-icons text-[#5D5D5D]"
            />
          </Link>
          <Link to={"/settings"}>
            <FontAwesomeIcon
              icon={faGear}
              className="header-icons ml-[30px] text-[#5D5D5D]"
            />
          </Link>
        </div>
      </div>
      <hr className="text-[#5D5D5D] border-t-2" />
    </header>
  );
}

export default Header;
