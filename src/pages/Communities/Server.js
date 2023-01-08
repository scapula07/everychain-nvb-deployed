import React,{useState,useEffect} from 'react'
import {FiMenu} from "react-icons/fi"
import Channels from './Channels'
import { useLocation } from 'react-router-dom'
import { useOutletContext } from "react-router-dom";
import Room from './Room';
import VideoConference from './VideoConference/videoConference';
import RoomAccess from './roomAccess';
import Friends from '../../components/Friends';
import { AccountState ,AvaterState} from '../../recoil/globalState'
import { useRecoilValue } from 'recoil';

export default function Server() {
    const [trigger,setTrigger] =useState(false)
    const location =useLocation()
    const [locationState,setlocationState] = useState(location.state)
    const [setCurrentRoom ,currentRoom]= useOutletContext();
    const [checkAccess,setAccess]=useState(false)
    const account =useRecoilValue(AccountState)


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




  

  return (
    <div className='flex py-8 space-x-1'>
    <main className={`${trigger ? 'w-1/6' : 'comm-w'} `}>
     
       { trigger?
          <div className=" ">
            
                  <Channels setCurrentRoom={setCurrentRoom} channel={locationState} setTrigger={setTrigger}/>    
                  </div>
              :  <FiMenu onClick={()=>{setTrigger(true)}} className="text-xl text-purple-400 font-semibold" />


           }
    </main>
    <main className={`${trigger ? 'w-4/6 comm-h overflow-y-scroll bg-purple-900 rounded-md' : 'w-4/6 comm-h overflow-y-scroll bg-purple-900 rounded-md'} `}>
         {currentRoom==="conference"?
           <VideoConference />
               :
            <>
            {currentRoom==="access"?
                   <div className='h-4/5 '>
                      < RoomAccess  />
                    </div>
                     :
               <Room currentRoom={currentRoom} setCurrentRoom ={setCurrentRoom }/>
                }
            </>
         
       
        }      
    </main>
    <main  className='w-2/6 comm-h px-4 py-6 bg-purple-900 rounded-md'>
      < Friends />
    </main>
</div>

  )
}
