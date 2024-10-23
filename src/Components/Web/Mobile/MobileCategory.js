function MobileCategory() {
  return (
    <div className="flex flex-col w-[327px] h-[798px]  space-y-5 mt-10 smallhide largehide">
      <div className="flex flex-col items-center relative space-y-4 bg-black  mobilelyft  justify-center  w-[327px] h-[250px] rounded-2xl text-white">
        <div className="w-full h-full absolute bg-black z-5 opacity-65 rounded-2xl"></div>
        <p className="jost28 tracking-widest absolute z-10 top-[55px]">
          APP DESIGN
        </p>
        <div className="flex tracking-widest space-x-5 absolute z-10 ">
          <p className="jostreg font-regular">VIEW PROJECTS</p>
          <p className="text-peach">{">"}</p>
        </div>
      </div>
      <div className="flex flex-col items-center relative space-y-4 bg-black  mobilegraphic  justify-center  w-[327px] h-[250px] rounded-2xl text-white">
        <div className="w-full h-full absolute bg-black z-5 opacity-65 rounded-2xl"></div>
        <p className="jost28 tracking-widest absolute z-10 top-[55px]">
          GRAPHIC DESIGN
        </p>
        <div className="flex tracking-widest space-x-5 absolute z-10 ">
          <p className="jostreg font-regular">VIEW PROJECTS</p>
          <p className="text-peach">{">"}</p>
        </div>
      </div>
    </div>
  );
}

export default MobileCategory;
