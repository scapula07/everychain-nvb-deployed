import React ,{useState} from 'react'
import pic from "../../assests/streampic.webp"
import {GoPrimitiveDot} from "react-icons/go"
import SearchBox from './searchBox'
import {RiAddFill} from "react-icons/ri"
import { Outlet,Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

 
export default function Friends({xtmpClient,setCurrentChat}) {
  console.log(xtmpClient,"ffff")
  const [trigger,setTrigger] =useState(false)
  const [newAddr,setnewAddr]=useState("")
   const createConvservation=async()=>{
      try{
        const newConversation = await xtmpClient.conversations.newConversation(
            newAddr
           )
           setCurrentChat(newConversation)
        
      }catch(e){
        console.log(e)
        toast(e.message)
      }
    
      setnewAddr("")
       setTrigger(false)
   }


  return (
    <div className='py-4 bg-purple-900 msg-h py-4 px-4 rounded-lg overflow-y-scroll '>

        <main>
          < SearchBox />
           <div className='flex items-center justify-between'>
             <main className='flex items-center space-x-4 py-4'>
                  <Link to="all"><h5 className='text-xs'>All</h5></Link>  
                  <Link to="recents"> <h5  className='text-xs'>Recents</h5></Link>  
             </main>
             { trigger?
             
                <main className='px-4 flex w-full space-x-2'>
                     <input className='w-11/12 bg-purple-700 outline-none border-0 rounded-md text-xs px-2'
                       value={newAddr}
                       name="newAddr"
                      onChange={(e)=>setnewAddr(e.target.value)}
                     />
                     <h5 className='flex items-center justify-center bg-purple-700 p-1 rounded-md '>
                     <RiAddFill onClick={ createConvservation} />
                     </h5>
                  </main>
            
            
                  :
                  <h5 className='flex items-center justify-center bg-purple-700 p-1 rounded-md '
                    onClick={()=>setTrigger(true)}
                   >
                  <RiAddFill />
                  </h5>
              
                 }

              </div>

              
             
       
              <Outlet  context={[xtmpClient,setCurrentChat]}/>

        </main>
      
    

    </div>
  )
}
