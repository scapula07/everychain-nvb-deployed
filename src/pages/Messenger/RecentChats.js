import React,{useState,useEffect} from 'react'
import pic from "../../assests/streampic.webp"
import {GoPrimitiveDot} from "react-icons/go"
import { useOutletContext } from 'react-router-dom'
const Friend=({name,recentMsg})=>{
    return(
        
        <div className='flex items-center justify-between border-b pb-4 border-purple-800 '>
            <div className='flex space-x-2 items-center'>
            <main className='flex '>

                <img src={pic} className="h-8 w-8 rounded-full"/>
                <GoPrimitiveDot className='-ml-2 text-green-400' />

                <h5 className='flex flex-col'>
                    <span className='text-sm'>{name}</span>
                    <p className='text-xs'>{recentMsg}</p>
                </h5>
            </main>
            </div>
           
           <main className='flex flex-col items-center space-y-2'>
               <h5  className='text-xs'>{"09:42pm"}</h5>
               <h5 className='bg-purple-600  rounded-full py-1 px-2 flex justify-center text-xs'>1</h5>
           </main>
           
           
        </div>
    )
}

export default function RecentChats() {
    const [friends,setFriends] =useState([])
    const xtmpClient = useOutletContext();
    console.log(xtmpClient,"reee")
    
    useEffect(()=>{
       
        const fetchRecentConv=async()=>{
            const conv =[]
          const conversations = xtmpClient.conversations
          const stream = await conversations.stream()
          console.log(stream,"stream")
          console.log(stream.messages,"mmmm")
          for await (const conversation of stream) {
            console.log(`New conversation started with ${conversation}`)
            conv.push(conversation)
            break
        //   setFriends(stream )
        }
        console.log(conv,"conv")
        setFriends(conv)
    }
    fetchRecentConv()
  },[])
  return (
    <div>
         <div className ='flex py-4 flex-col space-y-6'>
            {friends.map(()=>{

                return(
                    <Friend  name="Samuel mike" recentMsg="Hello"/>
                )
            })}
         
        </div>
    </div>
  )
}
