
'use client'

import { useCallback } from "react";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

interface CounterProps{
    title:string;
    subtitle:string;
    value:number;
    onChange:(value:number)=>void;
}

const Counter:React.FC<CounterProps> = ({
    title,
    subtitle,
    value,
    onChange
})=>{
    const onAdd = useCallback(()=>{
        onChange(value+1)
    },[onChange,value])

    const onReduce = useCallback(()=>{
        if(value ===1){
            return
        }
        onChange(value-1)
    },[onChange,value])
    return(
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <div className="font-medium">{title}</div>
                <div className="font-ligth text-gray-600">{subtitle}</div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div className="w-10 h-10 justify-center cursor-pointer 
                    flex items-center border-[1px] rounded-full border-neutral-400
                    text-neutral-600 hover:opacity-80 transition
                " onClick={onReduce}>
                    <AiOutlineMinus />
                </div>
                <div className="font-light text-xl text-neutral-600">{value}</div>
                <div className="w-10 h-10 justify-center cursor-pointer 
                    flex items-center border-[1px] rounded-full border-neutral-400
                    text-neutral-600 hover:opacity-80 transition
                " onClick={onAdd}>
                    <AiOutlinePlus />
                </div>
            </div>
        </div>
    )
}

export default Counter