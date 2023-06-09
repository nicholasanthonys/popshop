import { Sidenav, Ripple, initTE, Dropdown, Modal } from "tw-elements";
import logo from "../assets/images/logo.png";
import logoSlim from "../assets/images/logo-slim.png";
import account from "../assets/images/account.png";
import bell from "../assets/images/bell.png";
import needhelp from "../assets/images/needhelp.png";
import { Cog6ToothIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import AccountContent from "./AccountContent";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppSelector } from "../store/hook";

interface props {
  children?: React.ReactNode;
}

const MyNav: React.FC<props> = ({ children }) => {
  const [isDropdownOpen, setIsDropdownAccountOpen] = useState(false);
  const [isSidebarSlim, setIsSidebarSlim] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const currentTheme = useAppSelector((state) => state.theme.value);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initTE({ Sidenav, Ripple, Dropdown, Modal });
    document.getElementById("hamburger")?.addEventListener("click", () => {
      const instance = Sidenav.getInstance(document.getElementById("sidebar"));
      instance.toggle();
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        initTE({ Sidenav, Ripple, Dropdown, Modal });
        document.getElementById("hamburger")?.addEventListener("click", () => {
          const instance = Sidenav.getInstance(
            document.getElementById("sidebar")
          );
          instance.toggle();
        });

        setIsMobile(true);
        setIsSidebarSlim(false);
      } else {
        setIsMobile(false);
        setIsSidebarSlim(false);
        if (navRef.current) {
          navRef.current.style.transform = "none !important";
        }
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const toggleSlipSidebar = () => {
    setIsSidebarSlim(!isSidebarSlim);
    if (isSidebarSlim) {
      if (navRef.current) {
        navRef.current.style.transform = "translateX(0%) !important";
      }
    }
  };

  const determineSidebarClass = () => {
    let className = `fixed left-0 top-0 z-[1035] h-screen sm:!h-[86vh]  sm:overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 md:data-[te-sidenav-hidden='false']:translate-x-0`;
    if (!isMobile) {
      if (isSidebarSlim) {
        className += " !w-[77px]";
      } else {
        className += " w-60";
      }
      className += " sm:!translate-x-0 ";
    } else {
      className += " -translate-x-full";
    }
    return className;
  };

  return (
    <>
      <nav
        className={`${
          isSidebarSlim ? "sm:pl-20" : "sm:pl-60 "
        } sticky left-0 top-0 z-50 w-full dark:bg-neutral-800 bg-blue-[#F8F9FA]`}
      >
        <div className="px-8">
          <div className="relative flex h-[58px] items-center justify-between">
            <div className="flex  items-center sm:items-stretch sm:justify-start ">
              <div className="flex flex-shrink-0 items-center ">
                {!isMobile ? (
                  <div
                    id="hamburger-slim-toggler"
                    className={`hidden sm:block border ${
                      currentTheme == "green"
                        ? "border-[#6EB659]"
                        : "border-[#6E98FF]"
                    } rounded-full p-1 justify-center flex text-neutral-400 sm:mr-4`}
                    onClick={() => toggleSlipSidebar()}
                  >
                    <span
                      className={`block [&>svg]:h-5 [&>svg]:w-5  ${
                        currentTheme == "green"
                          ? "[&>svg]:text-[#6EB659]"
                          : "[&>svg]:text-[#6E98FF]"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                ) : (
                  <div
                    id="hamburger"
                    className={`border ${
                      currentTheme == "green"
                        ? "border-[#6EB659]"
                        : "border-[#6E98FF]"
                    } rounded-full p-1 justify-center flex text-neutral-400 sm:mr-4 sm:hidden`}
                    data-te-sidenav-toggle-ref
                    data-te-target="#sidebar"
                    data-te-ripple-init
                  >
                    <span
                      className={`block [&>svg]:h-5 [&>svg]:w-5  ${
                        currentTheme == "green"
                          ? "[&>svg]:text-[#6EB659]"
                          : "[&>svg]:text-[#6E98FF]"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                )}

                <div className="hidden w-6 h-6 text-[#6D6E71] sm:block">
                  <ol className="list-reset flex">
                    <li className="">
                      <HomeIcon className="w-6 h-6" />
                    </li>
                    <li>
                      <span className="mx-2 ">/</span>
                    </li>
                    <li>Dashboard</li>
                    <li>
                      <span className="mx-2">/</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="w-36 sm:hidden">
              <img src={logo} alt="logo" />
            </div>

            <div className="flex items-center justify-between gap-4 mx-4">
              <div className="relative sm:hidden">
                <img src={bell} alt="bell" className="w-6" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF0000] rounded-full"></div>
              </div>

              <div
                id="modal-profile"
                data-te-toggle="modal"
                data-te-target="#profileModal"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="sm:hidden"
              >
                <img src={account} alt="account" />
              </div>

              <div id="modal-profile-sm" className="hidden sm:block relative">
                <div
                  className="flex justify-between items-center gap-6"
                  onClick={() => setIsDropdownAccountOpen(!isDropdownOpen)}
                >
                  <div className="flex-1 flex justify-between items-center">
                    <img src={account} alt="account" className="mr-4" />
                    <div className="text-[#6D6E71]">James</div>
                  </div>
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
                {isDropdownOpen ? (
                  <div className="w-[400px] shadow-lg border rounded-xl absolute top-10 right-0 bg-white px-4 py-8 z-30 ">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                      <h5
                        className="text-xl font-medium leading-normal text-[#4C4C4C] dark:text-neutral-200"
                        id="profileModalLabel"
                      >
                        Profile
                      </h5>
                      <button
                        type="button"
                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        onClick={() => setIsDropdownAccountOpen(false)}
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <AccountContent />
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="hidden sm:block relative">
                <img src={bell} alt="bell" className="w-6" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF0000] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4">{children}</div>
      </nav>

      <nav
        ref={navRef}
        id="sidebar"
        className={determineSidebarClass()}
        data-te-sidenav-init
        data-te-sidenav-mode-breakpoint-over="0"
        data-te-sidenav-mode-breakpoint-side=""
        data-te-sidenav-hidden="false"
        data-te-sidenav-color="dark"
        data-te-sidenav-mode={`${isMobile ? "over" : "side"}`}
        data-te-sidenav-content="#content"
      >
        <div className="flex justify-center my-8">
          {isSidebarSlim ? (
            <div className="w-36 flex justify-center ">
              <img src={logoSlim} alt="logo" />
            </div>
          ) : (
            <div className="w-36 ">
              <img src={logo} alt="logo" />
            </div>
          )}
        </div>
        <div className="px-2">
          <div className="w-full" data-te-sidenav-link-ref>
            <div
              className={`flex items-center gap-2 ${
                isSidebarSlim ? "px-2" : "px-4"
              } rounded-lg py-2 ${
                currentTheme == "green"
                  ? "hover:bg-[#EDFFE8]"
                  : "hover:bg-[#EFF8FF]"
              } w-full`}
            >
              <div
                className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg ${
                  currentTheme == "green" ? "bg-[#6EB659]" : "bg-[#3E76FF]"
                }`}
              >
                <div>
                  <div className="flex justify-between gap-1 mb-1">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white opacity-[0.4] rounded-sm"></div>
                  </div>
                  <div className="flex justify-between gap-1">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div
                className={`text-[#6D6E71] ${isSidebarSlim ? "hidden" : ""} `}
              >
                Dashboards
              </div>
            </div>
          </div>
          <div
            className={`text-[#6D6E71] font-bold mx-2 my-4 ${
              isSidebarSlim ? "mx-1" : ""
            }`}
          >
            <p>Pages</p>
          </div>
          <div data-te-sidenav-link-ref className="w-full">
            <div
              className={`flex items-center gap-2 hover:bg-[#EFF8FF] rounded-lg ${
                isSidebarSlim ? "" : "mx-2"
              } px-2 py-2 w-full`}
            >
              <div className="w-[40px] h-[40px]  flex justify-center items-center rounded-lg shadow">
                <Cog6ToothIcon className="text-gray-400 w-6" />
              </div>
              <div
                className={`text-[#6D6E71] font-medium ${
                  isSidebarSlim ? "hidden" : ""
                }`}
              >
                Settings
              </div>
            </div>
          </div>
        </div>
        <div className={`m-4 ${isSidebarSlim ? "hidden" : ""}`}>
          <div className="absolute bottom-10">
            <div className="relative mx-4">
              <div className="w-[180px] h-[166px] rounded-lg">
                <img src={needhelp} />
              </div>

              <div
                className={`absolute   opacity-[0.4] w-[180px] h-[166px] top-0 z-10 flex justify-center py-4 rounded-lg ${
                  currentTheme == "green"
                    ? "bg-[#6EB659]"
                    : "bg-gradient-to-r from-blue-400 to-blue-900"
                }`}
              >
                <div className="text-center w-full px-4">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-md bg-white flex justify-center items-center w-8 h-8">
                      <p className="text-[#49994D] font-medium">?</p>
                    </div>
                  </div>
                  <p className="text-white text-base">Need Help</p>
                  <p className="text-white text-xs">Please Reach on</p>
                  <br />
                  <div className="text-center bg-white w-full py-1 rounded-md">
                    <p
                      className={`${
                        currentTheme == "green"
                          ? "text-[#6EB659]"
                          : "text-[#3E76FF]"
                      } font-bold`}
                    >
                      DETAILS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="profileModal"
        aria-labelledby="profileModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
              <h5
                className="text-xl font-medium leading-normal text-[#4C4C4C] dark:text-neutral-200"
                id="profileModalLabel"
              >
                Profile
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mx-4 my-4">
              <AccountContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNav;
