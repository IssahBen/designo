function MobileHero() {
  return (
    <div className="  flex    smallhide largehide bg-peach w-full h-[320px]   overflow-hidden">
      <div className="flex flex-col  pattern   bg-cover items-center w-full   ">
        <div className="flex flex-col font-regular w-full mt-[60px]">
          <div className="flex">
            <p className=" text-white   jostmed w-full text-center tracking-wide">
              Graphic Design
            </p>
          </div>
        </div>
        <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-white leading-7 px-5 ">
          We deliver branding materials that are tailored to meet your business
          objectives
        </p>
      </div>
    </div>
  );
}

export default MobileHero;
