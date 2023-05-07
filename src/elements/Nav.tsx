import {
    Sidenav,
    Ripple,
    initTE,
} from "tw-elements";
import logo from '../assets/images/logo.png';
import account from '../assets/images/account.png';
import bell from '../assets/images/bell.png';
import needhelp from '../assets/images/needhelp.png';
import {

    ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/solid"

initTE({ Sidenav, Ripple });
const MyNav = () => {
    return (
        <>
            <nav className="xl:pl-60 sticky left-0 top-0 z-50 w-full bg-white dark:bg-neutral-800">
                <div className="px-3">
                    <div className="relative flex h-[58px] items-center justify-between">
                        <div className="flex  items-center sm:items-stretch sm:justify-start ">
                            <div className="flex flex-shrink-0 ">
                                <div id="hamburger" className="border border-[#6E98FF] rounded-full p-1 justify-center xl:hidden flex text-neutral-400"
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

                            </div>

                        </div>

                        <div className="w-36">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <div className="relative">
                                <img src={bell} alt="bell" className="w-6" />
                                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF0000] rounded-full">

                                </div>
                            </div>
                            <img src={account} alt="account" />

                        </div>
                    </div>
                </div>
            </nav>


            <nav
                id="sidebar"
                className="relative left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
                data-te-sidenav-init
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

                <div className="absolute bottom-10">
                    <div className="relative">
                        <div className="w-[240px] h-[166px]">
                            <img src={needhelp} />
                        </div>

                        <div className="absolute bg-gradient-to-r from-blue-400 to-blue-900 opacity-[0.4] w-[240px] h-[166px] top-0 z-10 flex justify-center py-4">
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
            </nav>

        </>
    );
};

export default MyNav;
