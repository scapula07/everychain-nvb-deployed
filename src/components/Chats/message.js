import React,{useState,useEffect} from 'react'
import { Player, useAssetMetrics, useCreateAsset } from '@livepeer/react';
import { providers } from "ethers";
import Avater from "../../assests/avater.webp" 
import { ethers } from 'ethers';

export default function Message({message,sender}) {
    console.log(message,"mmmmssg")
    console.log(message?.slice(0,3),"mmmmssg")
    console.log(message?.slice(3),"id")
    const [ensName,setName]=useState("")
    const [img,setImg]=useState("")
   useEffect(()=>{
     const getENSdetails=async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const resolvedENSname= await provider?.lookupAddress(sender);
        setName( resolvedENSname)
        console.log(resolvedENSname)
        const resolvedENSAvater= await provider?.getAvatar(resolvedENSname ) 
        setImg( resolvedENSAvater)
      }

      getENSdetails()
   },[message])
  console.log(img,"img")
  return (
    <div>
       {message?.slice(0,3)==="mp4"?
      <div className='flex space-x-4 '>
       {img===null?
              
              <img src={Avater} className="h-8 w-8 rounded-full"/>
              :
              <img src={img} className="h-8 w-8 rounded-full"/>
            }
      <main className='flex flex-col space-y-2'>
      <h5 className='text-xs flex space-x-6 font-thin'>
          <span className='font-semibold'>{ensName}</span>
          <span>{"5 minutes ago"}</span>
        </h5>
         <p className='text-sm font-semibold w-3/4'>
         <Player title={""} playbackId={message?.slice(3)}/>
         </p>
      </main>
    
 </div>

         :
       <div className='flex space-x-4 '>
         <img src={img} className="h-8 w-8 rounded-full"/>
         <main className='flex flex-col space-y-2'>
         <h5 className='text-xs flex space-x-6 font-thin'>
             <span className='font-semibold'>{ensName}</span>
             <span>{"5 minutes ago"}</span>
        </h5>
            <p className='text-sm font-semibold'>
            {message?.length>0&&  <span> {message}</span>}  
            </p>
         </main>
       
    </div>
          }

 </div> 
  )
}
