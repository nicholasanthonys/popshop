import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon, } from '@heroicons/react/24/solid'
import {
    Collapse,
    Ripple,
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
interface Props {

}

const CustomTable: React.FC<Props> = ({ }) => {
    initTE({ Collapse, Ripple });
    const [data, setData] = useState<Item[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [isSearchExpand, setIsSearchExpand] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = mockdata
                // const response = await axios.get(
                //     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, {
                //     params: {
                //         page: 1,
                //         per_page: 10
                //     }
                // }
                // );
                const items = response.map(function (responseItem) {

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
    }, []);

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

    return (
        <div className='relative h-4 bg-[#3E76FF] m-6 rounded-t-lg w-[340px]'>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-[340px] absolute top-2 left-0 bg-white">
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

                    <div className="flex text-[#3E76FF] font-semibold py-3.5 border border-[#EFF4FF]">
                        <div className="flex-none w-12">
                        </div>
                        <div className="flex-1 w-64 ">
                            Logo
                        </div>
                        <div className="flex-1 w-32 ">
                            Name
                        </div>
                    </div>
                    {data.map((item, index) => (
                        <CollapsibleRow name={item.name} onCollapse={onCollapse} logo={item.image} id={item.id} key={item.id} currentPrice={item.current_price} marketCap={item.market_cap} isCollapsed={item.isCollapsed} className='p-3.5 border border-[#EFF4FF] hover:bg-[#EFF8FF]'  idx={index}/>
                    ))}
                </div>

            </div >
        </div >
    );
};

export default CustomTable;