function TabletServices() {
  return (
    <div className="flex flex-col w-[698px] h-full space-y-10 mt-20 mediumhide largehide">
      <div className="flex  h-[310px]     justify-center  w-full   text-white">
        <div className="w-[338px] h-full  change bg-cover   "></div>

        <div className="flex w-[360px] flex-col h-full justify-center  bg-pink-100 tracking-widest space-y-5  px-5  rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            TIM BROWN
          </p>
          <p className="text-black jostreg text-center">
            A book cover designed for Tim Brown's new release,"Change"
          </p>
        </div>
      </div>
      <div className="flex  h-[310px]     justify-center  w-full   text-white">
        <div className="w-[338px] h-full  boxwater bg-cover   "></div>

        <div className="flex w-[360px] flex-col h-full justify-center  bg-pink-100 tracking-widest space-y-5  px-5  rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            BOXED WATER
          </p>
          <p className="text-black jostreg text-center">
            A simple packaging concept made for Boxed Water
          </p>
        </div>
      </div>
      <div className="flex  h-[310px]     justify-center  w-full   text-white">
        <div className="w-[338px] h-full  science bg-cover   "></div>

        <div className="flex w-[360px] flex-col h-full justify-center  bg-pink-100 tracking-widest space-y-5  px-5  rounded-b-2xl">
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

export default TabletServices;
