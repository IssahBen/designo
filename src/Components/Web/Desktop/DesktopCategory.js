import { NavLink } from "react-router-dom";
function DesktopCategory() {
  return (
    <div className="flex  w-[1112px] h-[308px]  space-x-10 mt-32 desktophide mb-[300px]">
      <div className="flex flex-col items-center relative space-y-4 bg-black  desktoplyft  justify-center  w-[541px] h-[308px] rounded-2xl text-white">
        <div className="w-full h-full absolute bg-black z-5 opacity-65 rounded-2xl"></div>
        <p className="josth2 tracking-widest absolute z-10 top-[55px]">
          APP DESIGN
        </p>
        <NavLink
          to="/app"
          className="flex tracking-widest space-x-5 absolute z-10  top-[120px]"
        >
          <p className="jostreg font-regular">VIEW PROJECTS</p>
          <p className="text-peach">{">"}</p>
        </NavLink>
      </div>
      <div className="flex flex-col items-center relative space-y-4 bg-black  tabletgraphic  justify-center  w-[541px] h-[308px] rounded-2xl text-white">
        <div className="w-full h-full absolute bg-black z-5 opacity-65 rounded-2xl"></div>
        <p className="josth2 tracking-widest absolute z-10 top-[55px]">
          GRAPHIC DESIGN
        </p>
        <NavLink
          to="/graphic"
          className="flex tracking-widest space-x-5 absolute z-10 top-[120px] "
        >
          <p className="jostreg font-regular">VIEW PROJECTS</p>
          <p className="text-peach">{">"}</p>
        </NavLink>
      </div>
    </div>
  );
}

export default DesktopCategory;
