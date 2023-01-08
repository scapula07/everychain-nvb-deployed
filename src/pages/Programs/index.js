import { useState } from "react"
import { useLocation,useParams} from "react-router-dom";
import  profileBg from "../../assests/profileBg.webp"
import {MdLocationOn} from "react-icons/md"
import {AiOutlineEdit} from "react-icons/ai"
import {BsChatDots} from "react-icons/bs"
import SideModal from '../../components/SideModal';
import {AiOutlineCloseCircle } from "react-icons/ai"
import Chats from '../../components/Chats';
import Escrow from '../../components/Escrow';
import MiniChats from '../../components/MiniChatBox';
import { AccountState,EnsNameState,AvaterState } from '../../recoil/globalState';
import { useRecoilValue } from 'recoil';


export default function ProgramPage() {
    const location =useLocation()
    const [locationState,setlocationState] = useState(location.state)
    const [chattrigger,setChatTrigger] =useState(false)
    const [hiretrigger,setHireTrigger] =useState(false)

  return (
     <>
    <div>
        
        <div className=' py-8 bg-purple-600 h-56'>
            <h5 className='font-bold text-sm px-8 -mt-6'> Profile</h5>
            
               <img src={profileBg }  className="w-full h-32 pt-2 "/>

       
           
            <main className='flex  px-8 justify-between '>
                <div className='flex space-x-4'>
                  <main className="p-2 w-1/2 h-44 -mt-6 rounded-lg bg-purple-900 ">
                    <img src={locationState.program.imgUrl} className="w-full h-full  rounded-lg"/>

                  </main>
                 
                  <h5 className='pt-2'>
                   <span className='font-semibold text-sm'>{locationState.program.name} </span> 
                  
                  </h5>
                </div>

                <div className='pt-4'
                   onClick={()=>setHireTrigger(true)}
                >
                   <button className='bg-rose-900 space-x-1  px-4 py-2 rounded-sm text-xs font-semibold'
                   
                   >Enroll now</button>
                </div>
             
             
            </main>
        </div>


         <div className='flex pt-44 space-x-4'>

            <main className='w-2/5 '>
                <div className='flex justify-between items-center bg-purple-900 py-1 px-4'>
                   <h5 className='text-sm'>Profile</h5>
                   <h5 className='flex items-center'>
                     <AiOutlineEdit  className='text-sm text-rose-300'/>
                     <span  className='text-rose-300 text-sm'>Edit</span>
                   </h5>
                </div>

                <div className='flex flex-col py-1 px-4'>
                   <main className='flex items-center justify-between'>

                     <h5 className='flex flex-col text-xs'>
                        <span>Name</span>
                        <span>{locationState.program.name} </span>
                     </h5>
                     <h5 className='flex flex-col text-xs'>
                        <span className='item-end'>E-mail</span>
                        <span>binance@gmail.com</span>
                     </h5>
                   </main>
             
                </div>

                <div className='flex flex-col py-1 px-4'>
                   <main className='flex items-center justify-between'>

                     <h5 className='flex flex-col text-xs'>
                        <span>Phone</span>
                        <span>{"08154271289"}</span>
                     </h5>
                     <h5 className='flex flex-col text-xs'>
                        <span className='item-end'>Date of Birth</span>
                        <span>{"23/08/02"}</span>
                     </h5>
                   </main>
             
                </div>

            </main>
            <main className='w-2/6 px-2'>
               <h5 className='font-semibold text-sm'>About </h5>
                <div className='flex items-center justify-between pt-4'>
                   <main className='flex space-x-4'>
                      <img  src={locationState.program.imgUrl} className="h-10 w-10 rounded-full"/>
                      <h5 className='flex flex-col text-sm'>
                         <span> {locationState.program.name}</span>
                      </h5>
                   </main>
                   <main className=''>
                   
                    {/* <button className='flex items-center space-x-2 bg-purple-600 space-x-1  px-4 py-2 rounded-sm text-xs font-semibold'>
                    <BsChatDots className='text-sm'/>
                        <span>Chat</span>
                    </button> */}
                   </main>
                </div>

                <div className='pt-4'>
                    <p className='text-xs'>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat"}</p>

                </div>

                <div className='pt-10'>
                    <h5>Reviews</h5>
                </div>
            </main>
            <main className='w-1/5 pt-4' >
               <h5 className='text-sm'>Price : <span className='font-semibold'>Free</span></h5>
               <p className='text-xs pt-4'>Learn with teh best and have a great experience</p>

               <div className='pt-4 flex justify-center '>
                   <button className='bg-rose-900 space-x-1  px-4 py-2 rounded-sm text-xs font-semibold' onClick={()=>setHireTrigger(true)}>Enroll now</button>
                </div>
            </main>
         </div>






    </div>

<SideModal trigger={chattrigger} cname="h-3/4 w-1/4 shadow rounded-lg py-4 px-8">

<main className='flex justify-between'>
   <h5 className='text-sm'>Chat</h5>
    <button onClick={()=>setChatTrigger(false)}><AiOutlineCloseCircle className="text-sm" /></button>
  </main>
  {/* <MiniChats name={locationState.tutor.firstname + " " + locationState.tutor.lastname} cname="h-96"/> */}

</SideModal>

<SideModal trigger={hiretrigger} cname="h-3/4 w-1/4 shadow rounded-lg py-4 px-8">

<main className='flex justify-between'>
<h5 className='text-sm'>Registration form</h5>
<button onClick={()=>setHireTrigger(false)}><AiOutlineCloseCircle className="text-sm" /></button>
</main>

<div className="flex flex-col items-center py-8 space-y-4">
   <input 
     placeholder="First Name "
     className="bg-purple-800 w-full text-xs h-10 px-2"
   />
   <input 
     className="bg-purple-800 w-full h-10 text-xs px-2"
   placeholder="Last Name "
   />
   
   <input 
     className="bg-purple-800 w-full h-10 text-xs px-2"
   placeholder="Email address "
   />

   
   


</div>

<div className='w-full flex justify-center py-8'>
    <button className='bg-purple-800 text-xs font-semibold px-4 py-1 rounded-lg'>Submit</button>
 </div>
   
</SideModal>
</>
  )
}
