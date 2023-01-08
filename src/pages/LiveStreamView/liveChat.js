import React,{useState} from 'react'
import {MdSend } from "react-icons/md"
import LiveMessage from './message'


export default function LiveChat() {
   const [messages,setMessages] =useState([1,2,3, 4,6,7,8])
   const [msg,setMsg] =useState("")


    const sendMsg=()=>{

    }



  return (
    <div className='h-full bg-purple-900 px-2 py-4'>
        <h5 className='text-xs font-semibold px-4'>Live Chats</h5>
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
  )
}
