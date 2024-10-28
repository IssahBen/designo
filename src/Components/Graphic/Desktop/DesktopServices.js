function DesktopServices() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-10 w-[1110px]   mt-20 desktophide">
      <div className="flex flex-col h-[478px]     justify-center  w-full   text-white">
        <div className="w-[350px] h-[320px]  change bg-cover   "></div>

        <div className="flex w-[350px] flex-col h-[158px] justify-center  bg-pink-100 tracking-widest space-y-5  px-5  rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            TIM BROWN
          </p>
          <p className="text-black jostreg text-center">
            A book cover designed for Tim Brown's new release,'Change'
          </p>
        </div>
      </div>
      <div className="flex flex-col h-[478px]     justify-center  w-full   text-white">
        <div className="w-[350px] h-[320px]  boxwater bg-cover   "></div>

        <div className="flex w-[350px] flex-col h-[158px] justify-center  bg-pink-100 tracking-widest space-y-5  px-5  rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            BOXED WATER
          </p>
          <p className="text-black jostreg text-center">
            A simple packaging concept made for Boxed Water
          </p>
        </div>
      </div>
      <div className="flex flex-col h-[478px]     justify-center  w-full   text-white">
        <div className="w-[350px] h-[320px]  science bg-cover   "></div>

        <div className="flex w-[350px] flex-col h-[158px] justify-center  bg-pink-100 tracking-widest space-y-5  px-5  rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            SCIENCE!
          </p>
          <p className="text-black jostreg text-center">
            A poster made in collaboration with the Federal Art Project
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesktopServices;
