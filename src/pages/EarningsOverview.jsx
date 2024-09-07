import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Header from "../components/Header";

const EarningsOverview = () => {
  return (
    // Earnings Overview Section -->

    <>
      <Header />
      <section>
        <div className="bg-gray-100 p-6">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {/* <!-- Earnings Section --> */}
            <div className="flex items-center justify-between flex-wrap">
              <h1 className="text-2xl font-bold mb-4 text-primary-blue bg-gray-100 px-4 py-2 rounded">
                Earnings Overview
              </h1>
              <Link to="/CashbackHistory">
                <div className="flex items-center mb-4 cursor-pointer bg-gray-100 px-4 py-2 rounded">
                  <h1 className="text-2xl font-bold mr-2 underline text-primary-blue">
                    Cashback Details
                  </h1>
                  <span className="text-primary-blue">
                    <FaArrowAltCircleRight size={20} />
                  </span>
                </div>
              </Link>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {/* <!-- Total Earnings --> */}
              <div className="bg-gray-50 text-black p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-50">
                <p className="text-gray-500 pb-5 text-primary-blue">
                  Total Earnings
                </p>
                <p className="text-xl">₦45,670</p>
                <p className="text-primary-blue">+17.1% from last month</p>
              </div>
              {/* <!-- Current Balance --> */}
              <div className="bg-gray-50 text-black p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-50">
                <p className="text-gray-500 pb-5 text-primary-blue">
                  Current Balance
                </p>
                <p className="text-xl">₦21,200</p>
                <p className="text-red-600">-27.5% from last month</p>
              </div>
              {/* <!-- Total Bookings --> */}
              <div className="bg-gray-50 text-black p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-50">
                <p className="text-gray-500 pb-5 text-primary-blue">
                  Total Bookings
                </p>
                <p className="text-xl">123+</p>
                <p className="text-primary-blue">+10.1% from last month</p>
              </div>
              {/* <!-- Total Cashback --> */}
              <div className="bg-gray-50 text-black p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-50">
                <p className="text-gray-500 pb-5 text-primary-blue">
                  Total Cashback
                </p>
                <p className="text-xl">₦43,000</p>
                <p className="text-primary-blue">+20.1% from last month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-white max-w-md mx-auto md:max-w-3xl rounded-xl shadow overflow-hidden">
          {/* <!-- Daily Bonus Section --> */}
          <div className="p-4 rounded-lg shadow mb-4 px-8">
            <div className="text-lg font-bold underline decoration-2 text-primary-blue mb-4">
              Daily Bonus
            </div>

            {/* <!-- Airtime Options --> */}
            <div className="space-y-4">
              {/* <!-- Glo Airtime --> */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-800 font-medium">
                    Engine Tune-Up
                  </div>
                  <div className="text-primary-blue text-sm">+6% Cashback</div>
                </div>
                <button className="bg-primary-blue text-white px-4 py-2 rounded-md">
                  Go
                </button>
              </div>

              {/* <!-- 9 Mobile Airtime --> */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-800 font-medium">
                    Alignment Service
                  </div>
                  <div className="text-primary-blue text-sm">+5% Cashback</div>
                </div>
                <button className="bg-gray-600 text-white hover:bg-primary-blue hover:text-white px-4 py-2 rounded-md">
                  Go
                </button>
              </div>

              {/* <!-- MTN/Airtel Airtime --> */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-800 font-medium">
                    Tire Replacement
                  </div>
                  <div className="text-primary-blue text-sm">+3% Cashback</div>
                </div>
                <button className="bg-gray-600 text-white hover:bg-primary-blue hover:text-white px-4 py-2 rounded-md">
                  Go
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Refer Friends Section --> */}
          <div className="p-4 rounded shadow px-8">
            <div className="text-gray-800 text-lg font-bold mb-2">
              Introduce your mechanic to{" "}
              <span className="text-primary-blue">Balanceè</span> today, earn
            </div>
            <div className="text-primary-blue text-2xl font-bold mb-4">
              ₦2000 Cash
            </div>
            <a href="https://www.customer.balancee.app/">
              <button className="bg-gray-600 text-white hover:bg-primary-blue hover:text-white w-full py-2 rounded-md">
                Refer Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EarningsOverview;
