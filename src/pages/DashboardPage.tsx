import React, { FC, useRef, useState } from "react";
import profilePict from "../assets/images/profile.png";
import chart from "../assets/images/chart.png";
import CustomTable from "../elements/CustomTable";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAppSelector } from "../store/hook";
function Dashboard() {
  const currentTheme = useAppSelector((state) => state.theme.value);
  if (!Cookies.get("isLoggedIn")) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mx-4">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 sm:col-span-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md flex p-4 py-4 items-center gap-6">
            <div className="flex-none">
              <img
                className="w-full rounded-lg"
                src={profilePict}
                alt="profile picture"
              />
            </div>
            <div className="flex-initial w-64">
              <p className="text-[#323A46] font-medium text-sm">James Warden</p>
              <p className="text-[#6D6E71] font-medium text-xs">
                Admin - Company A
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-2">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md flex p-4 py-4 items-center justify-between">
            <div>
              <p className="text-[#6D6E71] text-xs font-medium mb-2">
                Crypto Paid
              </p>
              <p
                className={`${
                  currentTheme == "green" ? "text-[#6EB659]" : "text-[#3E74FB]"
                } text-2xl font-bold`}
              >
                20
              </p>
            </div>
            <div
              className={`h-14 w-14   ${
                currentTheme == "green"
                  ? "bg-[#6EB659]"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500"
              } flex justify-center items-center rounded-lg`}
            >
              <img src={chart} alt="chart" className="m-auto" />
            </div>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md flex p-2 sm:p-4 py-4 items-center justify-between ">
            <div>
              <p className="text-[#6D6E71] text-xs font-medium mb-2">
                Crypto In Progress
              </p>
              <p className="text-[#9F9F9F] text-2xl font-bold">5</p>
            </div>

            <div
              className={`h-14 w-14   bg-gradient-to-br to-[#9B9B9B] from-[#B0B0B0] flex justify-center items-center rounded-lg`}
            >
              <img src={chart} alt="chart" className="m-auto" />
            </div>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md flex p-2 sm:p-4 py-4 items-center justify-between">
            <div>
              <p className="text-[#6D6E71] text-xs font-medium mb-2">
                Crypto Unpaid
              </p>
              <p className="text-[#D41919] text-2xl font-bold">2</p>
            </div>
            <div
              className={`h-14 w-14   bg-gradient-to-br to-[#CF0808] from-[#FFCCCC] flex justify-center items-center rounded-lg`}
            >
              <img src={chart} alt="chart" className="m-auto" />
            </div>
          </div>
        </div>
        <div className="col-span-6 justify-center flex w-full">
          <CustomTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
