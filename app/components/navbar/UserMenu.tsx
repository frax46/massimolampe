'use client'

import {useState,useCallback} from 'react'

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRentModal from '@/app/hooks/useRentModal'


import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface userMenuProps{
    currentUser?: User|null
}

const UserMenu:React.FC<userMenuProps> = ({currentUser})=>{

    const router = useRouter()
    const registerModal = useRegisterModal();
    const rentModal = useRentModal()
    const loginModal = useLoginModal();
    const [isOpen,setIsOpen] = useState(false);

    const toggleOpen = useCallback(()=>{
        setIsOpen((value)=> !value)
    },[])

    const onRent = useCallback(()=>{
        if(!currentUser){
            return loginModal.onOpen()
        }

        rentModal.onOpen()

    },[currentUser,loginModal])

    return(
        
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div 
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" 
                onClick={onRent}>
                    Aibnb your home
                </div>
                <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                    onClick={toggleOpen}
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}  />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm ">
                    <div className="flex flex-col cursor-pointer">
                        {
                            currentUser ?(
                                <>
                                    <MenuItem onClick={()=>router.push('/trips')} label="My trips" />
                                    <MenuItem onClick={()=>router.push('/favorites')} label="My favorites" />
                                    <MenuItem onClick={()=>router.push('/reservations')} label="My Reservations" />
                                    <MenuItem onClick={()=>{}} label="My properties" />
                                    <MenuItem onClick={onRent} label="Air bnb my home" />
                                    <MenuItem onClick={()=>signOut()} label="Log Out" />


                                </>
                            ):(
                                <>
                                    <MenuItem onClick={loginModal.onOpen} label="Login" />
                                    <MenuItem onClick={registerModal.onOpen} label="SignUp" />
                                </>
                            )
                        }
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu