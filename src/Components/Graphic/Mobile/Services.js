function Services() {
  return (
    <div className="flex flex-col w-[327px] h-[1514px]  space-y-10 mt-20 smallhide largehide">
      <div className="flex flex-col h-[478px]     justify-center  w-[327px]   text-white">
        <div className="w-full h-[320px]  change bg-cover   "></div>

        <div className="flex w-full flex-col h-[158px]  bg-pink-100 tracking-widest space-y-5  px-5 pt-5 rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            TIM BROWN
          </p>
          <p className="text-black jostreg text-center">
            A book cover designed for Tim Brown’s new release, ‘Change’
          </p>
        </div>
      </div>
      <div className="flex flex-col h-[478px]     justify-center  w-[327px]   text-white">
        <div className="w-full h-[320px]  boxwater bg-cover   "></div>

        <div className="flex w-full flex-col h-[158px]  bg-pink-100 tracking-widest space-y-5  px-5 pt-5 rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            BOXED WATER
          </p>
          <p className="text-black jostreg text-center">
            A simple packaging concept made for Boxed Water
          </p>
        </div>
      </div>
      <div className="flex flex-col h-[478px]     justify-center  w-[327px]   text-white">
        <div className="w-full h-[320px]  science bg-cover   "></div>

        <div className="flex w-full flex-col h-[158px]  bg-pink-100 tracking-widest space-y-5  px-5 pt-10 rounded-b-2xl">
          <p className="jost20 font-medium text-center text-peach tracking-widest">
            Science !
          </p>
          <p className="text-black jostreg text-center">
            A poster made in collaboration with the Federal Art Project
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
