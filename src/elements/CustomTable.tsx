import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, } from '@heroicons/react/24/solid'
import {
    Collapse,
    Ripple,
    Dropdown,
    initTE,
} from "tw-elements";
import CollapsibleRow from './CollapsibleRow';
import axios from 'axios';
import mockdata from './mockdata.json'



interface Item {
    id: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    isCollapsed: boolean
}
const CustomTable: React.FC = () => {
    initTE({ Collapse, Ripple, Dropdown }, true);
    const [data, setData] = useState<Item[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [isSearchExpand, setIsSearchExpand] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(10);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);




    useEffect(() => {
        const getData = async () => {
            try {
                // const response = {
                //     data : mockdata
                // }

                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, {
                    params: {
                        page: currentPage,
                        per_page:perPage 
                    }
                }
                );
                const items = response.data.map(function (responseItem ) {

                    return {
                        id: responseItem.id,
                        name: responseItem.name,
                        image: responseItem.image,
                        current_price: responseItem.current_price,
                        market_cap: responseItem.market_cap,
                        isCollapsed: false,
                    }
                })
                setData(items);
                setError("");
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.message);
                }
                setData([]);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [currentPage, perPage]);

    const onClickSearch = () => {
        setIsSearchExpand(true)
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 1)


    }

    const onLoseFocus = () => {
        if (inputRef.current) {
            inputRef.current.blur()
        }
        setIsSearchExpand(false)
    }

    const onCollapse = (index: number) => {
        const newData = [...data]
        newData[index].isCollapsed = !newData[index].isCollapsed
        setData(newData)
    }

    const onChangePerPage = (perPage: number) => {
        setPerPage(perPage)
        setIsDropdownOpen(false)
    }

    const onIncreasePage = () => {
        // limit page number to 3 since we don't have any information about how many pages are there
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1)
        }
    }

    const onDecreasePage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='relative h-4 bg-[#3E76FF] rounded-t-lg w-[340px] sm:w-full'>


            <div className="rounded-lg overflow-hidden shadow-lg w-[340px] sm:w-full absolute top-2 left-0 bg-white">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-between py-4 px-2 ">
                        {/* <button onClick={onClickSearch}>Focus input</button> */}

                        <p className={isSearchExpand ? "hidden" : "visible"}>Cryptocurrency </p>
                        <div className={`border border-[#BDBCBC] rounded-lg p-2 ${isSearchExpand ? 'hidden' : 'visible'}`}
                            onClick={onClickSearch}
                        >
                            <MagnifyingGlassIcon className="h-5 w-5 text-[#3E76FF]" />
                        </div>

                        <div className={`relative mt-1 ${isSearchExpand ? "visible" : "hidden"}`}
                        >
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5 text-[#3E76FF]" />
                            </div>
                            <input type="text" id="table-search" className="block text-sm p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="search"
                                ref={inputRef}
                                onBlur={onLoseFocus}
                            />
                        </div>

                    </div>

                    <div className="flex text-[#3E76FF] font-semibold py-3.5 border border-[#EFF4FF] sm:px-8">
                        <div className="flex-none w-12 sm:hidden">
                        </div>
                        <div className="flex-1 w-32 sm:flex-none ">
                            Logo
                        </div>
                        <div className="flex-1 w-64 grow sm:flex-none sm:w-5/12 ">
                            Name
                        </div>
                        <div className="hidden flex-1 w-32 sm:flex-none sm:block sm:w-72">
                            Current Price
                        </div>

                        <div className="hidden flex-1 w-32 sm:block">
                            Market Cap
                        </div>

                    </div>
                    {data.map((item, index) => (
                        <CollapsibleRow name={item.name} onCollapse={onCollapse} logo={item.image} id={item.id} key={item.id} currentPrice={item.current_price} marketCap={item.market_cap} isCollapsed={item.isCollapsed} className='p-3.5 border border-[#EFF4FF] hover:bg-[#EFF8FF] sm:px-8' idx={index} />
                    ))}
                </div>
                <div className='flex justify-between items-center text-xs my-2 text-[#3E76FF] font-semibold sm:justify-end sm:gap-32'>
                    <div className='flex justify-between'>
                        Rows per page:  

                        <div className="relative sm:ml-2" data-te-dropdown-position="dropup">
                            <button
                                className="flex items-center"
                                type="button"
                                id="dropdownPerPage"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <div className='flex justify-between items-center'>
                                    <div className='sm:mr-2'>
                                        {perPage}
                                        
                                    </div>

                                    <ChevronDownIcon className='w-4' />
                                </div>


                            </button>
                            {
                                isDropdownOpen ?
                                    <div className='absolute bottom-6 bg-white shadow-lg z-40 '>
                                        <ul>
                                            <li className='border-1 px-4 py-2 hover:bg-gray-200' onClick={() => onChangePerPage(10)}>
                                                10
                                            </li>
                                            <li className='border-1 px-4 py-2 hover:bg-gray-200' onClick={() => onChangePerPage(20)}>
                                                20
                                            </li>
                                            <li className='border-1 px-4 py-2 hover:bg-gray-200' onClick={() => onChangePerPage(30)}>
                                                30
                                            </li>

                                        </ul>

                                    </div> : <></>
                            }

                        </div>
                    </div>
                    <div>
                        {currentPage} of 3
                    </div>
                    <div className='flex justify-between sm:gap-6'>
                        <div>
                            <ChevronLeftIcon className='w-4' onClick={() => onDecreasePage()} />
                        </div>
                        <div>
                            <ChevronRightIcon className='w-4' onClick={() => onIncreasePage()} />
                        </div>

                    </div>

                </div>
            </div >

        </div >
    );
};

export default CustomTable;