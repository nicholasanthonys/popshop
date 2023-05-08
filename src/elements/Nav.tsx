import {
    Sidenav,
    Ripple,
    initTE,
    Dropdown,
    Modal
} from "tw-elements";
import logo from '../assets/images/logo.png';
import account from '../assets/images/account.png';
import bell from '../assets/images/bell.png';
import needhelp from '../assets/images/needhelp.png';
import {
    ChatBubbleOvalLeftEllipsisIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid"
import {
    HomeIcon,
} from "@heroicons/react/24/outline"
import AccountContent from "./AccountContent";
import { useState } from "react";

interface props {
    children?: React.ReactNode
}
const MyNav: React.FC<props> = ({ children }) => {
    initTE({ Sidenav, Ripple, Dropdown, Modal });
    const [isDropdownOpen, setIsDropdownAccountOpen] = useState(false)

    return (
        <>
            <nav className="sm:pl-60 sticky left-0 top-0 z-50 w-full bg-white dark:bg-neutral-800">
                <div className="px-3">
                    <div className="relative flex h-[58px] items-center justify-between">
                        <div className="flex  items-center sm:items-stretch sm:justify-start ">
                            <div className="flex flex-shrink-0 items-center ">
                                <div id="hamburger" className="border border-[#6E98FF] rounded-full p-1 justify-center flex text-neutral-400 sm:mr-4"
                                    data-te-sidenav-toggle-ref
                                    data-te-target="#sidebar"
                                    data-te-ripple-init
                                >
                                    <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-[#6E98FF]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="w-6 h-6 text-[#6D6E71]">
                                    <ol className="list-reset flex">
                                        <li className="">
                                            <HomeIcon className="w-6 h-6" />
                                        </li>
                                        <li>
                                            <span className="mx-2 ">/</span>
                                        </li>
                                        <li>
                                            Dashboard
                                        </li>
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
                                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF0000] rounded-full">

                                </div>
                            </div>

                            <div id="modal-profile"
                                data-te-toggle="modal"
                                data-te-target="#profileModal"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="sm:hidden"
                            >
                                <img src={account} alt="account" />
                            </div>


                            <div id="modal-profile-sm"
                                className="hidden sm:block relative">
                                <div className="flex justify-between items-center gap-6" onClick={() => setIsDropdownAccountOpen(!isDropdownOpen)}>
                                    <div className="flex-1 flex justify-between items-center">
                                        <img src={account} alt="account" className="mr-4" />
                                        <div className="text-[#6D6E71]">James</div>
                                    </div>
                                    <ChevronDownIcon className="w-4 h-4" />
                                </div>
                                {isDropdownOpen ?
                                    <div className="w-[400px] shadow-lg border rounded-xl absolute top-10 right-0 bg-white px-4 py-8 z-30 ">
                                        <div
                                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                                            <h5
                                                className="text-xl font-medium leading-normal text-[#4C4C4C] dark:text-neutral-200"
                                                id="profileModalLabel">
                                                Profile
                                            </h5>
                                            <button
                                                type="button"
                                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                                onClick={() => setIsDropdownAccountOpen(false)}
                                                aria-label="Close">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <AccountContent />
                                    </div> : <></>
                                }

                            </div>

                            <div className="hidden sm:block relative">
                                <img src={bell} alt="bell" className="w-6" />
                                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF0000] rounded-full">

                                </div>
                            </div>






                            {/* for desktop use dropdown*/}
                            {/* <div className="relative" data-te-dropdown-ref>
                                <img src={account} alt="account"
                                    className="flex items-center whitespace-nowrap rounded  transition  ease-in-out"
                                    id="dropdownMenuButton1"
                                    data-te-dropdown-toggle-ref
                                    data-te-dropdown-position="dropstart"
                                    aria-expanded="false"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"/>
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton1"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Action</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Another action</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Something else here</a
                                        >
                                    </li>
                                </ul>
                            </div> */}

                        </div>
                    </div>
                </div>
                <div className="mx-4">
                    {children}
                </div>
            </nav>



            <nav
                id="sidebar"
                className="fixed left-0 top-0 z-[1035] h-screen sm:h-[86vh] w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 md:data-[te-sidenav-hidden='false']:translate-x-0"
                data-te-sidenav-init

                data-te-sidenav-mode-breakpoint-over="0"
                data-te-sidenav-mode-breakpoint-side="sm"
                data-te-sidenav-hidden="false"
                data-te-sidenav-color="dark"
                data-te-sidenav-content="#content">

                <div className="flex justify-center">
                    <div className="w-36 " >
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="mx-2 py-4 px-2 relative">
                    <div className="flex items-center gap-2 hover:bg-[#EFF8FF] rounded-lg px-4 py-2">
                        <div className='w-[40px] h-[40px] bg-[#3E76FF] flex justify-center items-center rounded-lg'>
                            <div >
                                <div className="flex justify-between gap-1 mb-1">
                                    <div className="w-2 h-2 bg-white rounded-sm">
                                    </div>
                                    <div className="w-2 h-2 bg-white opacity-[0.4] rounded-sm">
                                    </div>
                                </div>
                                <div className="flex justify-between gap-1">
                                    <div className="w-2 h-2 bg-white rounded-sm">
                                    </div>
                                    <div className="w-2 h-2 bg-white rounded-sm">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#6D6E71] font-medium">
                            Dashboards
                        </div>
                    </div>
                    <div className="text-[#6D6E71] font-bold my-4">
                        <p>Pages</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#EFF8FF] rounded-lg px-4 py-2">
                        <div className='w-[40px] h-[40px]  flex justify-center items-center rounded-lg shadow'>
                            <ChatBubbleOvalLeftEllipsisIcon className="text-gray-400 w-6" />

                        </div>
                        <div className="text-[#6D6E71] font-medium">
                            Settings
                        </div>
                    </div>


                </div>
                <div className="m-4">
                    <div className="absolute bottom-10">
                        <div className="relative mx-4">
                            <div className="w-[180px] h-[166px] rounded-lg">
                                <img src={needhelp} />
                            </div>

                            <div className="absolute bg-gradient-to-r from-blue-400 to-blue-900 opacity-[0.4] w-[180px] h-[166px] top-0 z-10 flex justify-center py-4 rounded-lg">
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
                                        <p className="text-[#3E76FF] font-bold">DETAILS</p>
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
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                            <h5
                                className="text-xl font-medium leading-normal text-[#4C4C4C] dark:text-neutral-200"
                                id="profileModalLabel">
                                Profile
                            </h5>
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
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
