import React from 'react'
import SearchBar from '../SearchBar'
import StreamingBtn from '../StreamingButton'
import {FiSettings} from "react-icons/fi"
import {MdNotificationsNone} from "react-icons/md"
import ConnectWallet from '../ConnectWallet'

export default function Header() {
  return (
    <div className='flex fixed w-full justify-center px-10'>
       <header className=' w-full '>
            <div className='flex items-cente  space-x-20 '>
            <main>
            <SearchBar />
            </main>
            <main>
             <StreamingBtn />
            </main>
            
             <main className='flex space-x-4 items-center px-4  border-l  border-r'>
               <FiSettings className='text-lg'/>
                <MdNotificationsNone className='text-lg '/>

             </main>

             <main>
                <ConnectWallet />
             </main>

            </div>
       
       </header>
       


    </div>
  )
}
