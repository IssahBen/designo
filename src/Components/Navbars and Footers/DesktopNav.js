import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function DesktopNav() {
  const navigate = useNavigate();

  function Home() {
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center bg-white  desktophide h-[70px] px-[75px]">
      <div className="flex w-full bg-white py-4  px-4 items-center justify-between ">
        <div className="flex justify-between w-full bg-white h-[27px]">
          <div onClick={Home} className="w-[202px] darklogo  bg-cover"></div>

          <div className="flex space-x-16">
            <NavLink to="/about">OUR COMPANY</NavLink>
            <NavLink to="/location">LOCATIONS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
