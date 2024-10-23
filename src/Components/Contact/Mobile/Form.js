function Form() {
  return (
    <div className="  flex    smallhide largehide bg-peach w-full h-[764px]   overflow-hidden">
      <div className="flex flex-col  pattern   bg-cover items-center w-full   ">
        <div className="flex flex-col font-regular w-full mt-[60px]">
          <div className="flex">
            <p className=" text-white   jostmed w-full text-center tracking-wide">
              Contact Us
            </p>
          </div>
        </div>
        <p className="jost14  mt-5  mb-5 text-center tracking-widest  text-white leading-7 px-5 ">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <div className="flex flex-col w-[327px] h-[387px] ">
          <form class="w-full max-w-lg  ">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  class="appearance-none block w-full bg-peach placeholder-white text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                  id="grid-city"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full bg-peach placeholder-white  text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                  id="grid-city"
                  type="text"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input
                  class="appearance-none block w-full placeholder-white bg-peach text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                  id="grid-city"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <textarea
                  rows="5"
                  class="appearance-none block w-full bg-peach placeholder-white  text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                  id="grid-city"
                  type="text"
                  placeholder="Your Message"
                />
              </div>
            </div>
            <div className="flex justify-center w-full ">
              <button class="bg-white hover:bg-hoverbrown  text-black font-medium py-5 px-10 rounded-xl ">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
