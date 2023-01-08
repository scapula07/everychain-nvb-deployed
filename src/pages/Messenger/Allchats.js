import React,{useState,useEffect} from 'react'
import pic from "../../assests/streampic.webp"
import {GoPrimitiveDot} from "react-icons/go"
import { xmtpClientState } from '../../recoil/globalState'
import { useRecoilState,useRecoilValue } from 'recoil'
import { useOutletContext } from "react-router-dom";
import { ethers } from 'ethers'

const Friend=({name,recentMsg,conv})=>{
    const [ensName,setName]=useState("")
    const [img,setImg]=useState("")
   useEffect(()=>{
     const getENSdetails=async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const resolvedENSname= await provider?.lookupAddress(conv?.peerAddress);
        setName( resolvedENSname)
        console.log(resolvedENSname)
        const resolvedENSAvater= await provider?.getAvatar(resolvedENSname ) 
        setImg( resolvedENSAvater)
      }

      getENSdetails()
   })

    return(
        
        <div className='flex items-center justify-between border-b pb-4 border-purple-800 '>
            <div className='flex space-x-2 items-center'>
            <main className='flex '>
            {img===null?
              
                <img src={pic} className="h-8 w-8 rounded-full"/>
                :
                <img src={img} className="h-8 w-8 rounded-full"/>
            }
                <GoPrimitiveDot className='-ml-2 text-green-400' />
                {ensName.length===0?
                <h5 className='flex flex-col'>
                    <span className='text-sm'>{conv?.peerAddress?.slice(0,7)+ "..." +conv?.peerAddress?.slice(-4)}</span>
                    <p className='text-xs'>{recentMsg}</p>
                </h5>

                :
                <h5 className='flex flex-col'>
                <span className='text-sm'>{ensName}</span>
                <p className='text-xs'>{recentMsg}</p>
            </h5>

                }
            </main>
            </div>
           
           <main className='flex flex-col items-center space-y-2'>
               <h5  className='text-xs'>{"09:42pm"}</h5>
               <h5 className='bg-purple-600  rounded-full py-1 px-2 flex justify-center text-xs'>1</h5>
           </main>
           
           
        </div>
    )
}

export default function Allchats() {
    const [friends,setFriends] =useState([])
   
    const [xtmpClient,setCurrentChat ]= useOutletContext();
    console.log(xtmpClient,"alll")
    useEffect(()=>{
          const fetchAllConv=async()=>{
            const conversations = xtmpClient.conversations
            const allConversations = await conversations.list()
            setFriends(allConversations)
          }
          fetchAllConv()
    },[])

  return (
    <div>
            <div className ='flex py-4 flex-col space-y-6'>
            {friends.map((conv)=>{

                return(
                    <div onClick={()=>setCurrentChat(conv)}>
                           <Friend  name="Samuel mike" recentMsg="Hello" conv={conv} />
                    </div>
                 
                )
            })}
         
        </div>
    </div>
  )
}
