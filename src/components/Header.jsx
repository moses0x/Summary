import React from "react";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { IoIosNotifications } from "react-icons/io";
import LogoImg from "../assets/Balamcee.jpg";

const Header = () => {
  return (
    <>
     <Sidebar />
      <header className="fixed left-0 top-0 w-full h-20 bg-white shadow flex justify-around z-10 items-center mb-6 p-8">
        <div className="lg:invisible visible" id="main-header">
          <div id="title">
            <img src={LogoImg} />
            <h1>Balanceè</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative invisible sm:visible">
            <input
              type="text"
              placeholder="Search"
              className="text-black border border-blue-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2 text-gray-400 ">
              <CiSearch size={20} className="text-blue-500" />
            </span>
          </div>
        </div>

        <div className="flex items-center invisible sm:visible">
          <IoIosNotifications
            size={30}
            className="text-primary-blue cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
