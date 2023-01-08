import React ,{useEffect,useState} from 'react'
import {BiHash} from "react-icons/bi"
import {MdOutlineAdd,MdSend} from "react-icons/md"
import VideoConference from './VideoConference/videoConference'
import RoomAccess from './roomAccess'
import { AccountState } from '../../recoil/globalState'
import { useRecoilValue } from 'recoil'
import { streamrClient } from '../../streamrutils'
import Message from './Message'
import { async } from '@firebase/util'
import { useNavigate } from "react-router-dom";



export default function Room({currentRoom,setCurrentRoom}) {
  const account =useRecoilValue(AccountState)
  const [messages,setMessages] =useState([1,2,3,4])
  const [msg,setMsg] =useState("")
  const [checkAccess,setAccess]=useState(false)

  let navigate = useNavigate();

       useEffect(()=>{

         const checkForAccess=async()=>{
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: '5ac96cad-d645-41cc-880f-1e85c554dd4a'
            }
          };
          
          fetch(`https://api.nftport.xyz/v0/accounts/${account}?chain=goerli&page_size=50&include=default&include=metadata&contract_address=0xbb01D6DA9D221609D102f413e5A444888798075c`, options)
            .then(response => response.json())
            .then(response => {
             
              console.log(response,"response")
              if(response.total >0 ){
                setAccess(true)
              }else{
                setCurrentRoom("access")
              }
           
            
            })
            .catch(err => console.error(err));
        
        }

          
         checkForAccess()
       },[])

       useEffect(()=>{

       },[])

       useEffect(()=>{
          const fetchMsg=async()=>{
            const sub1 = await streamrClient.subscribe({
              id: "0xc792746196cb489c50d2b0126192338de5339189/general",
              resend: {
                  last: 10,
              }
          },console.log("received"))
           
        // console.log( sub1) 
        sub1.once('resendComplete', (msgs) => {
          console.log('Received all requested historical messages! Now switching to real time!')
          console.log(msgs,"mmmm")
      })
            }

           fetchMsg()
       })


       const sendMsg=async()=>{
         const res = await streamrClient.publish("0xc792746196cb489c50d2b0126192338de5339189/general", msg)
         console.log(res)
         }


      return (
    <div className='h-full'>
         <main className='py-1 flex  items-center space-x-4 px-4 bg-purple-700' >
            <BiHash />
             <h5 className='text-sm font-semibold'>
              {currentRoom} 
            </h5>
          </main>
        
          <div className='h-4/5 flex flex-col space-y-6 py-4 px-4 overflow-y-scroll'>

            {
              messages?.map((message)=>{
                return(
                  <>
                   <Message message={"Hello"}/>
                  </>
                
                )
              })

             }
             
         </div>
           

            <div className='flex justify-center '>
            <main className='flex items-center justify-center  bg-purple-700 rounded-lg py-1 px-6 space-x-4 w-3/5'>
               <h5 className='bg-purple-900 rounded-full p-2'>
                 <MdOutlineAdd className='text-white'/>
                </h5> 
               <input 
                  placeholder={`Message #${currentRoom}`}
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
  )
}
