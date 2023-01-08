import React from 'react'
import userprofile from "../../assests/userprofile.webp"
import {GoPrimitiveDot} from "react-icons/go"
import {BsTwitter} from "react-icons/bs"
import {FaDiscord} from "react-icons/fa"
import {RiFacebookFill} from "react-icons/ri"
import background from "../../assests/profilebackground.jpeg"
import { EnsNameState,AvaterState } from '../../recoil/globalState'
import { useRecoilValue } from 'recoil'
import Content from './content'

export default function Profile() {
    const ensName=useRecoilValue(EnsNameState)
    const img =useRecoilValue(AvaterState)
  return (
      <div>

        <div className='w-full h-32 rounded-md'>
           <img src={background } className="w-full h-full rounded-md" />
        </div>
         <div className='flex items-center space-x-20 py-4'>
            <button className='bg-purple-900 text-xs font-semibold px-4 py-1 rounded-md'>Send Notification</button>
            <main className='flex items-center space-x-10'>
                <h5 className='flex flex-col items-center space-y-1'>
                    <span>{"0"}</span>
                     <button className='bg-rose-900 text-xs font-semibold px-4 py-1 rounded-md'>Follow</button>
                </h5>
                < div className='-mt-10 relative z-10'>
                    <img src={img} className="h-24 w-24 rounded-full" />
                </div>
                <h5 className='flex flex-col items-center space-y-1'>
                    <span>{"0"}</span>
                     <button className='bg-rose-900 text-xs font-semibold px-4 py-1 rounded-md'>Following</button>
                </h5>
            </main>
            <button className='bg-purple-900 text-xs font-semibold px-4 py-1 rounded-md'>Create profile</button>
         </div>
          
          <div className='py-8 flex space-x-4'>
            <main className='w-3/5'>
               <Content />
            </main>
           <main className='w-2/5 py-4'>
              <h5>About</h5>
              <p className='text-xs'>
                {
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molli molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu       optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"

                }
              </p>
           </main>

         </div>

    </div>
  )
}
