import React,{useState} from 'react'
import {CiSettings} from "react-icons/ci"
import {AiOutlineExpandAlt} from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
import {CiCircleInfo,CiMicrophoneOn,CiVideoOn} from "react-icons/ci"
import Avater from "../../assests/avater.webp" 
import {MdSend} from "react-icons/md"



function LiveMessage({message}) {
  return (
    <div className='flex space-x-4 '>
         <img src={ Avater} className="h-8 w-8 rounded-full"/>
         <main className='flex flex-col space-y-2'>
         <h5 className='text-xs flex space-x-6 font-thin'>
            <span className='font-semibold'>{"John wad"}</span>
            <span>{"5 minutes ago"}</span>
        </h5>
            <p className='text-sm font-semibold'>
               {message}
            </p>
         </main>
       
    </div>
  )
}


export default function StreamChats() {
  const [messages,setMessages] =useState([1,2,3, 4,6,7,8])
  const [msg,setMsg] =useState("")


   const sendMsg=()=>{

   }

  return (
    <div>
    <div className='bg-purple-600 px-2 py-1 flex items-center justify-between'>
       <h5 className='text-xs'>Live Chats</h5>

       <main className='flex items-center space-x-1'>
           <CiSettings />
           <AiOutlineExpandAlt />
           <RiArrowDropDownLine />
       </main>
    </div>

    <div className='h-full bg-purple-900 px-2 py-4'>
        <div className='flex flex-col '>
        <main className='h-64 overflow-y-scroll'>
            <div className=' flex flex-col space-y-4 py-4  px-4'>
            {messages?.map((msessage)=>{
                return(
                    <LiveMessage message={"Hello"} />
                )
            })

            }
            </div>

        </main>
        < div className='w-full flex flex items-center justify-center '>

        <main className='flex items-center justify-center  bg-purple-700 rounded-lg py-1 px-6 space-x-4 w-11/12'>
               <input 
                  placeholder="Type message ..."
                  className="bg-purple-700 w-3/4"
                  name='msg'
                  value={msg}
                  onChange={(e)=>setMsg(e.target.value)}

                />
                <h5 className='bg-purple-900 rounded-full p-2'
                  onClick={sendMsg}
                 >
                 <MdSend className='text-white'/>
                </h5>
            </main>
        </div>
     
            </div>
            </div>

</div>
  )
}
