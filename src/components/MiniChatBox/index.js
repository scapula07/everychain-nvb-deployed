import React ,{useState,useEffect} from 'react'
import pic from "../../assests/streampic.webp"
import {GoPrimitiveDot} from "react-icons/go"
import {CiCircleInfo,CiMicrophoneOn,CiVideoOn} from "react-icons/ci"
import {RiSendPlaneFill} from "react-icons/ri"
import {BsEmojiSmile} from "react-icons/bs"
import TextareaAutosize from 'react-textarea-autosize';
import Message from './message'
import {MdOutlineAdd,MdSend} from "react-icons/md"
import { ethers } from 'ethers'


export default function MiniChats({name,cname,currentChat}) {
    // console.log(currentChat.peerAddress)
      const [messages,setMessages] =useState([])
      const [msg,setMsg] =useState("")

      const [ensName,setName]=useState("")
      const [img,setImg]=useState("")
     useEffect(()=>{
       const getENSdetails=async()=>{
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const resolvedENSname= await provider?.lookupAddress(currentChat?.peerAddress);
          setName( resolvedENSname)
          console.log(resolvedENSname)
          const resolvedENSAvater= await provider?.getAvatar(resolvedENSname ) 
          setImg( resolvedENSAvater)
        }
  
        getENSdetails()
     },[currentChat])

      const sendMessage=async()=>{
         try{
          const res=await currentChat.send(msg)
          console.log(res.content,"resssss")
          setMessages([...messages,{content:msg}])
           }catch(e){
            console.log(e)
          }

        }

        useEffect(()=>{
            const fetchAllMsgs=async()=>{
                const opts = {
                 
                    startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
                    endTime: new Date(),
                  }
                  const messages = await currentChat?.messages(opts)
                  setMessages(messages)
                  setMsg("")
                  console.log(messages ,"msggg")
            }
            fetchAllMsgs()

         },[currentChat])


  return (
    <div className='h-full bg-purple-900 rounded-md'>
        <div className='flex rounded-lg py-1 bg-purple-700 justify-between  px-4'>
            <div className='space-x-4 flex'>
            {img===null?
              
              <img src={pic} className="h-8 w-8 rounded-full"/>
              :
              <img src={img} className="h-8 w-8 rounded-full"/>
            }
                <main className='flex'>
                {ensName.length===0?
                    <h5 className='flex items-center'>
                    {currentChat?.peerAddress!=undefined&&
                    <span>{currentChat?.peerAddress?.slice(0,7)+ "..."+ currentChat?.peerAddress?.slice(-4)}</span>  
                     }
                    <GoPrimitiveDot />
                        </h5>
                        :
                        <h5 className='flex items-center'>
                        {currentChat?.peerAddress!=undefined&&
                        <span>{ensName}</span>  
                         }
                        <GoPrimitiveDot />
                            </h5>
                  }
                </main>
            </div>
             <main className='flex items-center space-x-2'> 
               <CiMicrophoneOn className='text-lg' />
               <CiVideoOn className='text-lg' />
             </main>

        </div>
          <div className='h-4/5 bg-purple-900 py-6 px-4 flex flex-col space-y-4'>
             {
              messages?.map((message)=>{
                return(
                  <Message message={message?.content} sender={message?.senderAddress}/>
                )
              })

             }

          </div>

     
      
          <div className='flex justify-center  w-full'>
            <main className='flex items-center justify-center  bg-purple-700 rounded-lg py-1 px-6 space-x-4 w-4/5'>
               <h5 className='bg-purple-900 rounded-full p-2'>
                 <MdOutlineAdd className='text-white'/>
                </h5> 
               <input 
                  placeholder={"Type a message....."}
                  className="bg-purple-700 w-3/4 text-sm"
                   name='msg'
                   value={msg}
                   onChange={(e)=>setMsg(e.target.value)}
                />
                <h5 className='bg-purple-900 rounded-full p-2'
                  onClick={sendMessage}
                >
                 <MdSend className='text-white'/>
                </h5>
            </main>
        </div>

    </div>
  )
}
