// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="sticky xl:px-40 lg:px-20 max-[950px]:px-2 px-2 w-full h-52 bg-white shadow-xl py-3 border-2 border-gray-100 text-justify">
        <div className="upper h-3/4 flex items-center justify-between max-[440px]:justify-around">
          <div className="leftUpper w-1/4 max-[440px]:w-[30%]">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="cursor-pointer h-16 max-[810px]:h-14 max-[685px]:h-12 max-[571px]:h-10"
              alt="Logo"
            />
          </div>
          <div className="rightUpper w-2/4 max-[949px]:w-[60%] max-[685px]:w-[70%] max-[604px]:w-[65%] max-[440px]:w-[40%] h-full flex justify-around">
            <div className="flex flex-col justify-evenly">
              <h4 className="cursor-pointer font-bold text-black">RESOURCES</h4>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700" : " text-gray-500"
                  } font-bold hover:text-orange-700`
                }
              >
                <h4>Home</h4>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700" : " text-gray-500"
                  } font-bold hover:text-orange-700`
                }
              >
                <h4>About</h4>
              </NavLink>
            </div>
            <div className="flex flex-col justify-evenly max-[440px]:hidden">
              <h4 className="cursor-pointer font-bold text-black">FOLLOW US</h4>
              <NavLink
                to={"/github"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700" : " text-gray-500"
                  } font-bold hover:text-orange-700`
                }
              >
                <h4>Github</h4>
              </NavLink>
              <h4 className="cursor-pointer font-bold text-gray-500">
                Discord
              </h4>
            </div>
            <div className="flex flex-col justify-evenly max-[604px]:hidden">
              <h4 className="cursor-pointer font-bold text-black">LEGAL</h4>
              <h4 className="cursor-pointer font-bold text-gray-500">
                Privacy Policy
              </h4>
              <h4 className="cursor-pointer font-bold text-gray-500">
                Terms & Conditions
              </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="lower py-3  max-[440px]:py-1 h-1/4 flex w-full justify-between">
          <div className="lowerLeft w-fit">
            <h3 className="text-gray-500">
              &copy; 2024 Mohammed-Abubakar-11786. All Rights Reserved.
            </h3>
          </div>
          <div className="lowerRight w-1/4 flex justify-evenly max-[571px]:hidden">
            <i className="text-2xl fa-brands fa-facebook hover:scale-110 cursor-pointer"></i>
            <i className="text-2xl fa-brands fa-discord hover:scale-110 cursor-pointer"></i>
            <i className="text-2xl fa-brands fa-x-twitter hover:scale-110 cursor-pointer"></i>
            <i className="text-2xl fa-brands fa-github hover:scale-110 cursor-pointer max-[604px]:hidden"></i>
            <i className="text-2xl fa-brands fa-linkedin hover:scale-110 cursor-pointer max-[604px]:hidden"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
