function TabletHero() {
  return (
    <div className="flex justify-center w-full mediumhide largehide mt-10">
      <div className="  flex  flex-col  mediumhide largehide bg-white w-[689px]   overflow-hidden space-y-10  mb-[400px]">
        <div className="flex flex-col  space-y-10    items-center w-full h-[714px]  bg-white ">
          <div className="w-[689px] h-[326px] rounded-xl canada bg-cover  bg-white"></div>
          <div className="flex flex-col w-full h-[326px] rounded-xl bg-pink-100 items-start px-20 space-y-5 py-5">
            <div className="flex flex-col font-regular w-full   mt-[60px]">
              <div className="flex">
                <p className=" text-peach   jostmed w-full  tracking-wide">
                  Canada
                </p>
              </div>
            </div>
            <div className="flex space-x-32">
              {" "}
              <div className="flex flex-col jost14 items-center  space-y-1 font-light text-black">
                <p className=" font-bold">Designo Central Office</p>
                <p className="hover:text-hoverbrown">3886 Wellington Street</p>
                <p to="/speakers" className="hover:text-hoverbrown">
                  Toronto,Ontario M9C 3J5
                </p>
              </div>
              <div className="flex flex-col jost14 items-center  space-y-1 font-light text-black ">
                <p className=" font-bold">Contact Us (Central Office)</p>
                <p className="hover:text-hoverbrown">P: +1 253-863-8967</p>
                <p to="/speakers" className="hover:text-hoverbrown">
                  M: contact@designo.co
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  space-y-10    items-center w-full h-[714px]  bg-white ">
          <div className="w-[689px] h-[326px] rounded-xl australia bg-cover  bg-white"></div>
          <div className="flex flex-col w-full h-[326px] rounded-xl bg-pink-100 items-start px-20 space-y-5 py-5">
            <div className="flex flex-col font-regular w-full   mt-[60px]">
              <div className="flex">
                <p className=" text-peach   jostmed w-full  tracking-wide">
                  Australia
                </p>
              </div>
            </div>
            <div className="flex space-x-32">
              {" "}
              <div className="flex flex-col jost14 items-center  space-y-1 font-light text-black">
                <p className=" font-bold">Designo AU Office</p>
                <p className="hover:text-hoverbrown">19 Barlone Street</p>
                <p to="/speakers" className="hover:text-hoverbrown">
                  New South Wales 2443
                </p>
              </div>
              <div className="flex flex-col jost14 items-center  space-y-1 font-light text-black ">
                <p className=" font-bold">Contact Us (Central Office)</p>
                <p className="hover:text-hoverbrown">P: (02) 6720 9092</p>
                <p to="/speakers" className="hover:text-hoverbrown">
                  M: contact@designo.co
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  space-y-10    items-center w-full h-[714px]  bg-white ">
          <div className="w-[689px] h-[326px] rounded-xl uk bg-cover  bg-white"></div>
          <div className="flex flex-col w-full h-[326px] rounded-xl bg-pink-100 items-start px-20 space-y-5 py-5">
            <div className="flex flex-col font-regular w-full   mt-[60px]">
              <div className="flex">
                <p className=" text-peach   jostmed w-full  tracking-wide">
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="flex space-x-32">
              {" "}
              <div className="flex flex-col jost14 items-center  space-y-1 font-light text-black">
                <p className=" font-bold">Designo UK Office</p>
                <p className="hover:text-hoverbrown">13 Colorado Way</p>
                <p to="/speakers" className="hover:text-hoverbrown">
                  Rhyd-fro SA8 9GA
                </p>
              </div>
              <div className="flex flex-col jost14 items-center  space-y-1 font-light text-black ">
                <p className=" font-bold">Contact Us (Central Office)</p>
                <p className="hover:text-hoverbrown">P: 078 3115 1400</p>
                <p to="/speakers" className="hover:text-hoverbrown">
                  M: contact@designo.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletHero;
