import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import {
    Collapse, Ripple,
    initTE,
} from "tw-elements";
interface Props {
    className: string,
    name: string,
    logo: string,
    id: string,
    currentPrice: number,
    marketCap: number,
    isCollapsed: boolean,
    onCollapse: (idx: number) => void,
    idx: number

}

function formatMarketCap(num: number): string {
    const prefixes = ['k', 'M', 'G', 'T', 'P'];
    const base = 1000;
    let prefixIndex = 0;
    while (num >= base && prefixIndex < prefixes.length - 1) {
        num /= base;
        prefixIndex++;
    }
    return num.toFixed(2) + ' ' + prefixes[prefixIndex];
}
function formatCurrentPrice(num: number): string {
    const prefixes = ['K', 'M', 'B', 'T', 'Q'];
    const base = 1000;
    let prefixIndex = 0;
    while (num >= base && prefixIndex < prefixes.length - 1) {
        num /= base;
        prefixIndex++;
    }
    return num.toFixed(2) + ' ' + prefixes[prefixIndex];
}


const CollapsibleRow: React.FC<Props> = ({ className, name, logo, id, currentPrice, marketCap, isCollapsed, onCollapse, idx }) => {
    useEffect(() => {
        initTE({ Collapse, Ripple });
    }, []);
    return (
        <div className={className}>
            <div className="flex items-center"

                onClick={() => onCollapse(idx)}
            >
                <div className="flex flex-none w-8 items-center sm:hidden">
                    <div
                        className="flex justify-center items-center rounded-full border border-[#3E75FC] p-1"
                    >
                        <ChevronDownIcon className="w-[14px] h-[14px] text-[#3E75FC]" />
                    </div>
                </div>
                <div className="flex-1 w-32  sm:flex-none ">
                    <img src={logo} className='w-[44px] h-[44px]' />
                </div>
                <div className="flex-1 w-32 sm:flex-none sm:w-5/12 ">
                    {name}
                </div>
                <div className="hidden flex-1 w-32 sm:flex-none sm:block sm:w-72">
                    {formatCurrentPrice(currentPrice)}
                </div>

                <div className="hidden flex-1 w-32 sm:block">
                    {formatMarketCap(marketCap)}
                </div>

            </div>
            <div
                id={"collapse" + id}
                className={`${isCollapsed ? "visible" : "hidden"} sm:hidden`}

            >
                <div className="px-5 py-4">
                    <p className='text-[#3E76FF] font-semibold'>Current Price</p>
                    <p>{formatCurrentPrice(currentPrice)}</p>
                    <br />
                    <p className='text-[#3E76FF] font-semibold'>Market Cap</p>
                    <p>{formatMarketCap(marketCap)}</p>
                </div>
            </div>
        </div>


    );

}


export default CollapsibleRow