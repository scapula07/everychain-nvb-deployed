import React ,{useState} from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {RiAddFill,RiKeyFill} from "react-icons/ri"
import { useOutletContext } from "react-router-dom";
import {BiHash} from "react-icons/bi"
import { streamrClient } from '../../streamrutils';
import CommunityModal from './CommunityModal';
import  {AiOutlineCloseCircle } from "react-icons/ai"
import {GiVideoConference} from "react-icons/gi"
import { AccountState } from '../../recoil/globalState'
import { useRecoilValue } from 'recoil'
const { STREAMR_STORAGE_NODE_GERMANY } = require('streamr-client')

export default function Channels({ channel,setTrigger,setCurrentRoom,currentRoom}) {

    const [roomTrigger,setRoomTriger] =useState(false)
    const [rooms,setRooms] =useState()
    const [roomName,setRoomName] =useState("")
    const account =useRecoilValue(AccountState)
    

   //  0xc792746196cb489c50d2b0126192338de5339189/general


   console.log( streamrClient ,"streammmm")



    const createRoom =async()=>{
       console.log("gggggggg")
       try{
        const stream = await streamrClient.createStream({
         id: `${account}/${channel.comm.name}/${roomName}`

           })

           console.log(stream.id,"id")
           const res =await stream.addToStorageNode(STREAMR_STORAGE_NODE_GERMANY)
           console.log(res,"storage")
       }
    
      
       catch(e){
        console.log(e)
       }

    }
   
  return (
     <>
    <div className='w-full bg-purple-900 comm-h py-4 px-2'>
        <div className='flex items-center justify-between border-b pb-6 border-purple-700'>
            <main className='flex space-x-1'>
                <img src={channel.comm.img} className="h-4 w-4 rounded-lg"/>
                <h5 className='text-xs font-semibold'>{channel.comm.name}</h5>
            </main>
        <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-sm" /></button>
        </div>

        <div className=''>
            <main className='flex text-sm font-semibold py-4 justify-between items-center '>
              <h5 className=' text-sm font-semibold py-4'>Rooms</h5>
              
               <h5 className='flex items-center justify-center bg-purple-700 p-1 rounded-md '
                    onClick={()=>setRoomTriger(true)}
                   >
                  <RiAddFill />
               </h5>
               </main >

                <main className="flex flex-col space-y-4 ">
                <h5 className='flex  items-center space-x-4 '
                 onClick={()=>setCurrentRoom("access")}
                  >
                     <RiKeyFill className='text-xl text-yellow-500' />
                     <span>access</span>
                  </h5>
                <h5 className='flex  items-center space-x-4 '
                 onClick={()=>setCurrentRoom("introduction")}
                  >
                     <BiHash className='text-xl' />
                     <span>introduction</span>
                  </h5>
                  <h5 className='flex items-center space-x-4 '
                     onClick={()=>setCurrentRoom("general")}
                   >
                     <BiHash className='text-xl' />
                     <span>general</span>
                  </h5>

                  <h5 className='flex items-center space-x-4 '
                     onClick={()=>setCurrentRoom("conference")}
                   >
                     <GiVideoConference className='text-xl' />
                     <span>conference</span>
                  </h5>


               </main>
                  
        </div>

    </div>
       <CommunityModal trigger={roomTrigger} cname="h-2/5 w-2/5 shadow rounded-lg py-4 px-8">
             
         <main className='flex justify-between border-b pb-4'>
             <h5 className='text-xl font-thin'>Create a room</h5>
             <button onClick={()=>setRoomTriger(false)}><AiOutlineCloseCircle className="text-md font-thin" /></button>
         </main>
          
          <div className='flex flex-col space-y-4 pt-4'>
              <h5  className='text-sm font-semibold'>Room Name</h5>
              <main className='rounded-md px-4 py-1 flex items-center bg-purple-700 space-x-2'>
                <BiHash  />
                <input 
                  placeholder='new-channel '
                  className='bg-purple-700 outline-none'
                  value={roomName}
                  name="roomName"
                  onChange={(e)=>setRoomName(e.target.value)}
                 />
              </main>
              
              <main className='flex items-center  space-x-6'>

                <button className=''
                   onClick={()=>setRoomTriger(false)}
                >
                    Cancel
                 </button>

                 <button className='bg-purple-700 px-4 py-1 rounded-md'
                    onClick={createRoom}
                  >
                    Create room
                 </button>
              </main>
             
          </div>
       </CommunityModal>
    
    </>
  )
}
