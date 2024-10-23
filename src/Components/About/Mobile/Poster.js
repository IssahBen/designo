function Poster() {
  return (
    <div className="flex flex-col  pattern   bg-cover items-center w-full h-[865px] bg-pink-100 mb-[300px]  ">
      <div className="w-[375px] h-[320px] real bg-cover bg-white"></div>
      <div className="flex flex-col font-regular w-full mt-[60px]">
        <div className="flex">
          <p className=" text-peach   jostmed w-full text-center tracking-wide">
            The real deal
          </p>
        </div>
      </div>
      <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-black leading-7 px-5 ">
        As strategic partners in our clients’ businesses, we are ready to take
        on any challenge as our own. Solving real problems require empathy and
        collaboration, and we strive to bring a fresh perspective to every
        opportunity. We make design and technology more accessible and give you
        tools to measure success.
      </p>
      <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-black leading-7 px-5 ">
        We are visual storytellers in appealing and captivating ways. By
        combining business and marketing strategies, we inspire audiences to
        take action and drive real results.
      </p>
    </div>
  );
}

export default Poster;
