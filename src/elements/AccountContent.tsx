import React from "react";
import account from "../assets/images/account.png";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Cookie from "js-cookie";
import { saveDataToLocalStorage } from "../utils/localStorage";
import { useAppSelector, useAppDispatch } from "../store/hook";
import { setTheme } from "../store/ThemeSlice";
const AccountContent: React.FC = () => {
  const logOut = () => {
    Cookie.remove("isLoggedIn");
    window.location.href = "/";
  };

  const currentTheme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const onClickTheme = (theme: "blue" | "green") => {
    saveDataToLocalStorage(
      {
        theme,
      },
      "theme"
    );
    dispatch(setTheme(theme));
  };

  return (
    <div>
      <div className="flex gap-4  shadow-md px-2 py-4 rounded-lg">
        <div className="bg-[#F1F1F2] rounded-full flex justify-center items-center w-12 h-12">
          <img src={account} className="w-8 h-8 rounded-full" />
        </div>
        <div>
          <p className="text-sm font-medium">Deny Septian</p>
          <p
            className={`${
              currentTheme == "green" ? "text-[#6EB659]" : "text-[#3E76FF]"
            } text-xs font-medium`}
          >
            ID : COSIRI01021220130139
          </p>
        </div>
      </div>

      <div className="my-4">
        <p className="text-[#4C4C4C] font-medium">Select Theme Color</p>
      </div>

      <button
        className="border w-full flex gap-4 px-2 py-4 shadow-sm rounded-lg items-center hover:border-[#3E76FF] my-2"
        onClick={() => onClickTheme("blue")}
      >
        {currentTheme == "blue" ? (
          <div className="w-6 h-6">
            <CheckCircleIcon className="text-[#3E76FF]" />
          </div>
        ) : (
          <div className="border rounded-full w-6 h-6"></div>
        )}

        <div className="flex justify-start items-center gap-4">
          <div className="border-4 bg-[#3E76FF] w-12 h-12 rounded-full"></div>
          <div>Blue</div>
        </div>
      </button>

      <button
        className="border w-full flex gap-4 px-2 py-4 shadow-sm rounded-lg items-center focus:border-[#7FC45F] hover:border-[#7FC45F]"
        onClick={() => onClickTheme("green")}
      >
        {currentTheme == "green" ? (
          <div className="w-6 h-6">
            <CheckCircleIcon className="text-[#7FC45F]" />
          </div>
        ) : (
          <div className="border rounded-full w-6 h-6"></div>
        )}

        <div className="flex justify-start items-center gap-4">
          <div className="border-4 bg-[#7FC45F] w-12 h-12 rounded-full "></div>
          <div>Green</div>
        </div>
      </button>

      <button
        className="w-full flex gap-4 px-2 py-4 mt-4 shadow-sm rounded-lg items-center focus:border-[#7FC45F] hover:border-[#7FC45F] hover:bg-red-300"
        onClick={logOut}
      >
        <div className="border rounded-md w-6 h-8 bg-red-400 relative">
          <ArrowRightIcon className="absolute top-1/2  transform translate-x-1/2 -translate-y-1/2 text-[#FF4040]" />
        </div>
        <div className="flex justify-start items-center gap-4">
          <div></div>
          <div className="text-[#FF4040]">Log Out</div>
        </div>
      </button>
    </div>
  );
};

export default AccountContent;
