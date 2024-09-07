import React, { useState } from "react";
import Button from "../components/Button.jsx";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Modal from "../components/Modal.jsx";

const CashbackHistory = () => {
  const [showModal, setShowModal,] = useState(false);
  const [modalText, setModalText,] = useState('');

  const openModal = (text) => {
    setModalText(text);
    setShowModal(true);
  }

  return (
    <>
      <Header />
      <section>
        <div className="bg-gray-100 p-6">
          <div className="bg-white max-w-3xl mx-auto container-sm mx-auto rounded-lg ">
            {/* <!-- Cashback Details Header --> */}
            <div className=" shadow rounded p-6">
              <div className="flex items-center">
                <span className="text-primary-blue mr-2 cursor-pointer">
                  <Link to="/EarningsOverview">
                    <FaArrowAltCircleLeft size={20} />
                  </Link>
                </span>

                <h1 className="text-primary-blue font-semibold">
                  Cashback Details
                </h1>
              </div>
              <div className="flex items-center justify-between mt-4 bg-gray-100 text-black text-center rounded-lg p-3">
                <div>
                  <p className="font-semibold">Cashback</p>
                  <h1 className="text-3xl font-bold text-primary-blue">
                    <span className="text-lg">₦</span>2.40
                  </h1>
                </div>
                <div>
                  <Button className="bg-primary-blue">How to use</Button>
                </div>
              </div>
            </div>

            {/* <!-- Earnings & Expenses Section --> */}
            <div className="p-6">
              <h3 className="text-primary-blue text-xl font-semibold mb-4">
                Earnings & Expenses
              </h3>
              <div className="flex justify-between items-center mt-2 bg-gray-100 rounded px-8 py-3">
                <div>
                  <p className="text-sm text-black">Earnings this month</p>
                  <p className="text-lg font-bold text-primary-blue">₦0.00</p>
                </div>
                <div>
                  <p className="text-sm text-black">Earnings this year</p>
                  <p className="text-lg font-bold text-primary-blue">₦438.38</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-center items-center">
                  <div className="flex space-x-2">
                    <button className="bg-primary-blue text-white px-4 py-1 rounded-md focus:outline-none">
                      All
                    </button>
                    <button className="bg-gray-600 text-white hover:bg-primary-blue hover:text-white px-4 py-1 rounded-md focus:outline-none">
                      Earnings
                    </button>
                    <button className="bg-gray-600 text-white hover:bg-primary-blue hover:text-white px-4 py-1 rounded-md focus:outline-none">
                      Expenses
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between px-8 py-3 my-4 bg-gray-100 rounded">
                  <div className="text-base text-black mb-2">Aug, 2024</div>
                  <div className="flex items-center space-x-4">
                    <p className="text-black">
                      Earnings
                      <span className="text-primary-blue">: ₦54.14</span>
                    </p>
                    <p className="text-black">
                      Expenses<span className="text-red-400">: ₦53.24</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Transaction List --> */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4 space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary-blue text-lg">Car Tires</p>
                    <p className="text-primary-blue text-lg font-bold mr-2">
                      +₦2.40
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">30 Aug, 2024, 05:33</p>
                    <p className="text-gray-500 text-sm">
                      Balance after: ₦2.40
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary-blue text-lg">Engine Tune-Up</p>
                    <p className="text-primary-blue text-lg font-bold mr-2">
                      +₦2.40
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">30 Aug, 2024, 05:33</p>
                    <p className="text-gray-500 text-sm">
                      Balance after: ₦2.40
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary-blue text-lg">Car Tire</p>
                    <p className="text-primary-blue text-lg font-bold mr-2">
                      +₦2.40
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">30 Aug, 2024, 05:33</p>
                    <p className="text-gray-500 text-sm">
                      Balance after: ₦2.40
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary-blue text-lg">Engine Oil</p>
                    <p className="text-primary-blue text-lg font-bold mr-2">
                      +₦2.40
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">30 Aug, 2024, 05:33</p>
                    <p className="text-gray-500 text-sm">
                      Balance after: ₦2.40
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6">
          <div className="max-w-3xl mx-auto bg-white p-6 text-black rounded-lg shadow-md">
            {/*<!-- Cashout Options -->*/}
            <h2 className="font-bold text-[1.5rem]">Cashout Options</h2>
            <div className="mt-6 flex space-x-4">
              <div className="flex items-center justify-center bg-gray-100">
                <button
                  className="px-4 py-2 bg-primary-blue text-white rounded"
                  onClick={() => openModal('Sorry! You have no cashback to cashout.')}
                >
                  Direct Cashout
                </button>
              </div>
              
              <div className="flex items-center justify-center bg-gray-100">
                <button
                  className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-primary-blue hover:text-white"
                  onClick={() => openModal('Sorry! You have no promo code at the moment.')}
                >
                  Convert to Promo Code
                </button>
              </div>
              <Modal showModal={showModal} setShowModal={setShowModal} text={modalText} />

            </div>

            <p className="text-xl mt-8 mb-4">
              You have no promo code at the moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CashbackHistory;
