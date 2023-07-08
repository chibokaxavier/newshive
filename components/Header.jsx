import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="lg:w-[1140px] mx-auto">
        <div className="flex lg:flex-row flex-col items-center  justify-between ">
          <div className="flex space-x-3 uppercase">
            <p>About</p>
            <p>Contact</p>
            <p>Advertisement</p>
            <p>Privacy</p>
            <p className="hidden lg:block">Login</p>
          </div>
          <p className="lg:hidden">Login</p>
          <div>
            <SocialIcon
              url="https://www.instagram.com/manlikexavy/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://twitter.com/manlikexavy"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://wa.me/+2348121826916"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/chibokaxavier"
              fgColor="gray"
              bgColor="transparent"
            />
          </div>
        </div>
        <div className="text-5xl font-bold py-5 items-center flex justify-center lg:items-start lg:justify-start">
          NEWSHIVE
        </div>
      </div>

      <div className="bg-black h-[50px] flex justify-between text-white px-2 ">
        <div className=" space-x-5  lg:w-[910px] mx-auto hidden lg:flex ">
          <div className="border-r border-l border-gray-500 px-2 flex items-center">
            HOME
          </div>
          <div className=" flex items-center">NEWS</div>
          <div className="border-r border-l border-gray-500 px-2 flex items-center">
            SPORTS
          </div>
          <div className="flex items-center">LIFESTYLE</div>
          <div className="border-r border-l border-gray-500 px-2 flex items-center">
            FASHION
          </div>
          <div className="flex items-center">MUSIC</div>
          <div className="border-r border-l border-gray-500 px-2 flex items-center">
            BUISINESS
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center  rounded-lg p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input type="text" className=" bg-transparent pl-2 outline-none" />
        </div>
      </div>
    </header>
  );
};

export default Header;
