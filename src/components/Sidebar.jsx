import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt, FaCar, FaHistory, FaTools } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdCarRepair, MdContactSupport, MdDashboard } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";

import logoImg from "../assets/Balamcee.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="fixed z-30 flex items-center cursor-pointer left-0 top-6 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenuAlt3 size={26} />
        </button>
      ) : (
        <button
          className="text-xl text-black fixed top-4 left-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdClose size={26} />
        </button>
      )}

      <div
        className={`top-0 fixed w-80 shadow bg-white min-h-screen p-10 ${
          isOpen ? "translate-x-0 z-30" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        <nav>
          <div className="flex flex-col items-center justify-center mb-4">
            <div id="main-header" className="my-8">
              <div id="title">
                <img src={logoImg} alt="A logo" />
                <h1>Balanceè</h1>
              </div>
            </div>

            <div className="flex flex-col items-center text-center justify-center">
              <div className="bg-primary-blue rounded-full h-10 w-10 flex items-center justify-center mb-3">
                {/* <!-- Profile Image or Icon --> */}
                <span className="text-white text-lg font-bold">M</span>
              </div>
              <div>
                <h2 className="text-gray-700 font-semibold">Moses</h2>
                <a href="#" className="text-sm text-gray-500">
                  View Profile
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-primary-blue text-lg  font-normal my-4">MENU</h3>
          </div>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <MdDashboard size={20} />
                </span>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <FaTools size={20} />
                </span>
                <span className="ml-3">Book a Repair</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <FaCalendarAlt size={20} />
                </span>
                <span className="ml-3">Appointments</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <FaCar size={20} />
                </span>
                <span className="ml-3">My Vehicles</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <FaHistory size={20} />
                </span>
                <span className="ml-3">Repair History</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <MdCarRepair size={20} />
                </span>
                <span className="ml-3">Repair Station</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <RiNewsLine size={20} />
                </span>
                <span className="ml-3">Newsletter</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-gray-600 hover:bg-gray-200 p-2 rounded"
              >
                <span className="text-primary-blue">
                  <MdContactSupport size={20} />
                </span>
                <span className="ml-3">Support</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-red-500 hover:bg-red-100 p-2 rounded"
              >
                <span className="text-red-500">
                  <CiLogout size={20} />
                </span>
                <span className="ml-3">Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
