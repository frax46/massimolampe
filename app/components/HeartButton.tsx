'use client'

import {User} from '@prisma/client'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import useFavourite from '../hooks/useFavourite';
import { SafeUser } from '../types';

interface HeartButtonProps{
    listingId:string;
    currentUser?:SafeUser|User|null
}

const HeartButton:React.FC<HeartButtonProps> = ({listingId,currentUser})=>{

    const {hasFavorited,toggleFavorite} = useFavourite({
        listingId,currentUser
    })

    return(
        <div onClick={toggleFavorite} className="
            relative
            hover:opacity-80
            transition
            cursor-pointer
        ">
            <AiOutlineHeart
                size={28}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart
                size={24}
                className={
                   hasFavorited?'fill-rose-500':'fill-neutral-500/70' 
                }
            />
        </div>
    )
}
export default HeartButton