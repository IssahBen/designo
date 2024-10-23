function MobileHero() {
  return (
    <div className="  flex  flex-col  smallhide largehide bg-white w-full h-[2150px]   overflow-hidden space-y-10 mb-[300px]">
      <div className="flex flex-col  pattern   bg-cover items-center w-full h-[714px]  bg-pink-100 ">
        <div className="w-[375px] h-[320px] canada bg-cover  bg-white"></div>
        <div className="flex flex-col font-regular w-full   mt-[60px]">
          <div className="flex">
            <p className=" text-peach   jostmed w-full text-center tracking-wide">
              Canada
            </p>
          </div>
        </div>
        <div className="flex flex-col jost14 items-center  space-y-2 font-light text-black">
          <p className=" font-bold">Designo Central Office</p>
          <p className="hover:text-hoverbrown">3886 Wellington Street</p>
          <p to="/speakers" className="hover:text-hoverbrown">
            Toronto,Ontario M9C 3J5
          </p>
        </div>
        <div className="flex flex-col jost14 items-center  space-y-2 font-light text-black mt-10 mb-10">
          <p className=" font-bold">Contact Us (Central Office)</p>
          <p className="hover:text-hoverbrown">P: +1 253-863-8967</p>
          <p to="/speakers" className="hover:text-hoverbrown">
            M: contact@designo.co
          </p>
        </div>
      </div>
      <div className="flex flex-col  pattern   bg-cover items-center w-full h-[715px]  bg-pink-100 ">
        <div className="w-[375px] h-[320px] canada bg-cover  bg-white"></div>
        <div className="flex flex-col font-regular w-full   mt-[60px]">
          <div className="flex">
            <p className=" text-peach   jostmed w-full text-center tracking-wide">
              Australia
            </p>
          </div>
        </div>
        <div className="flex flex-col jost14 items-center  space-y-2 font-light text-black">
          <p className=" font-bold">Designo AU Office</p>
          <p className="hover:text-hoverbrown">19 Balonne Street</p>
          <p to="/speakers" className="hover:text-hoverbrown">
            New South Wales 2443
          </p>
        </div>
        <div className="flex flex-col jost14 items-center  space-y-2 font-light text-black mt-10 mb-10">
          <p className=" font-bold">Contact Us (Central Office)</p>
          <p className="hover:text-hoverbrown">P: (02) 6720 9092</p>
          <p to="/speakers" className="hover:text-hoverbrown">
            M: contact@designo.co
          </p>
        </div>
      </div>
      <div className="flex flex-col  pattern   bg-cover items-center w-full h-[715px]  bg-pink-100 ">
        <div className="w-[375px] h-[320px] uk bg-cover  bg-white"></div>
        <div className="flex flex-col font-regular w-full   mt-[60px]">
          <div className="flex">
            <p className=" text-peach   jostmed w-full text-center tracking-wide">
              United Kingdom
            </p>
          </div>
        </div>
        <div className="flex flex-col jost14 items-center  space-y-2 font-light text-black">
          <p className=" font-bold">Designo UK Office</p>
          <p className="hover:text-hoverbrown">13 Colorado Way</p>
          <p to="/speakers" className="hover:text-hoverbrown">
            Rhyd-fro SA8 9GA
          </p>
        </div>
        <div className="flex flex-col jost14 items-center  space-y-2 font-light text-black mt-10 mb-10">
          <p className=" font-bold">Contact </p>
          <p className="hover:text-hoverbrown">P: +1 0783115 1400</p>
          <p to="/speakers" className="hover:text-hoverbrown">
            M: contact@designo.co
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
