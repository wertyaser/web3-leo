import React from "react";
import "./ComponentStyle.css";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 border-gray-700 border">
        <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4">
          <li className="flex items-center">
            <span className="self-center text-2xl font-semi whitespace-nowrap text-white">
              Leo
            </span>
          </li>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto "
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  className="block font-body py-2 pl-3 pr-4 text-white rounded md:p-0 md:text-pink-500 bg-pink-600 md:bg-transparent"
                  aria-current="page"
                >
                  <span className="learn">Learn</span>
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex font-body items-center justify-between w-full py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:w-auto text-white md:hover:text-pink-500 focus:text-white border-pink-700 hover:bg-prink-700 md:hover:bg-transparent"
                >
                  Build
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600 border border-pink-300"
                >
                  <ul
                    className="py-2 text-sm text-pink-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a className="block font-body px-4 py-2 hover:bg-gray-600 hover:text-white">
                        NFTs
                      </a>
                    </li>
                    <li>
                      <a className="block font-body px-4 py-2 hover:bg-gray-600 hover:text-white">
                        DeFi
                      </a>
                    </li>
                    <li>
                      <a className="block font-body px-4 py-2 hover:bg-gray-600 hover:text-white">
                        DAOs
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block font-body py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-pink-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Network
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block font-body py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-pink-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
