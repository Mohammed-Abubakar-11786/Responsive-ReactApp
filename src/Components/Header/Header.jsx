// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  let [selected, setSelected] = useState("Home");
  let [show, setShow] = useState("hidden");
  return (
    <div className="sticky top-0 xl:px-32 lg:px-16 max-[950px]:px-2 w-full p-4 text-xl shadow-md flex items-center bg-white">
      <div className="left ml-20 max-xl:ml-0">
        <Link to={"/"}>
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className=" h-12"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="middle m-auto w-1/2 max-[850px]:hidden">
        <ul className="flex justify-evenly">
          <li className="">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700 font-bold" : "text-black"
                } hover:text-green-700 hover:font-bold`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700 font-bold" : "text-black"
                } hover:text-green-700 hover:font-bold `
              }
            >
              About
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700 font-bold" : "text-black"
                } hover:text-green-700 hover:font-bold`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/github"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700 font-bold" : "text-black"
                } hover:text-green-700 hover:font-bold `
              }
            >
              Github
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col min-[850px]:hidden ml-auto items-center">
        <div
          onClick={() => setShow((e) => (e ? "" : "hidden"))}
          className="flex bg-gray-100 shadow-lg text-orange-700 font-bold px-5 py-1 rounded-lg"
        >
          <p className="mr-3">{selected}</p>
          <i className="text-black fa-solid fa-angle-down text-2xl hover:scale-100"></i>
        </div>
        <div
          className={`absolute top-16 transition ease-in-out duration-500 flex flex-col justify-evenly shadow-lg rounded-xl  bg-gray-100 ${show}`}
        >
          <ul className={` px-5 py-1 mt-3 `}>
            <li
              onClick={() => {
                setSelected("Home");
                setShow("hidden");
              }}
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700 font-bold" : "text-black"
                  } hover:text-green-700 hover:font-bold`
                }
              >
                Home
              </NavLink>
            </li>
            <li
              onClick={() => {
                setSelected("About");
                setShow("hidden");
              }}
            >
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700 font-bold" : "text-black"
                  } hover:text-green-700 hover:font-bold `
                }
              >
                About
              </NavLink>
            </li>
            <li
              onClick={() => {
                setSelected("Contact");
                setShow("hidden");
              }}
            >
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700 font-bold" : "text-black"
                  } hover:text-green-700 hover:font-bold`
                }
              >
                Contact
              </NavLink>
            </li>
            <li
              onClick={() => {
                setSelected("GitHub");
                setShow("hidden");
              }}
            >
              <NavLink
                to={"/github"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700 font-bold" : "text-black"
                  } hover:text-green-700 hover:font-bold `
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
          <div className="min-[590px]:hidden bg-white text-orange-500 text-center hover:bg-black hover:text-white border-orange-500">
            <button className="text-lg font-bold rounded-xl p-1 px-3">
              Log in
            </button>
          </div>{" "}
          <div className="min-[590px]:hidden bg-orange-700 text-white text-center hover:bg-black rounded-b-xl">
            <button className="text-lg font-bold rounded-xl p-1 px-3">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="max-[453px]:hidden ml-auto right mr-12 max-xl:mr-0  hover:text-green-700 hover:font-bold">
        <button className="max-[590px]:hidden text-lg mt-1 mr-3 text-red-500 font-bold rounded-xl p-1 px-3  hover:text-green-700 hover:border-white hover:shadow-2xl">
          Log in
        </button>
        <button className="bg-orange-700 text-lg mt-1 text-white font-bold border-black rounded-xl border-2 p-1 px-3 hover:bg-black hover:border-white hover:shadow-2xl">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Header;
