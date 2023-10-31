'use client'

import {useSearchParams, usePathname} from 'next/navigation'

import {IoDiamond} from 'react-icons/io5'
import {TbBeach,TbPool} from 'react-icons/tb'
import {MdOutlineVilla} from 'react-icons/md'
import { GiWindmill,GiIsland} from 'react-icons/gi'
import CategoryBox from './CategoryBox'

export const categories = [
    {
        label:"Beach",
        icon:TbBeach,
        description:'this property is close to the beach'
    },
    {
        label:"Modern",
        icon:MdOutlineVilla,
        description:'this property is modern'
    },
    {
        label:"Pools",
        icon:TbPool,
        description:'this property has a pool'
    },
    {
        label:"Islands",
        icon:GiIsland,
        description:'this property is on an island'
    },
    {
        label:"Luxury",
        icon:IoDiamond,
        description:'this property is luxurious'
    }
]

const Categories = ()=>{

    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()

    const isMainPage = pathname === '/'

    if(!isMainPage){
        return null
    }
    return(
        <div className="mx-5 pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item)=>(
                <CategoryBox 
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected = {category === item.label}
                />
            )
                
            )}
        </div>
    )
}
export default Categories