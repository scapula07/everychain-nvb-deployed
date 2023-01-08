import React from 'react'
import Avater from "../../assests/avater.webp" 
import LiveChat from './liveChat'
import Friends from '../../components/Friends'
import { Player } from '@livepeer/react';
import { useState } from "react"
import { useLocation,useParams} from "react-router-dom";


export default function LivestreamView() {
    const location =useLocation()
    const [locationState,setlocationState] = useState(location.state)

  return (
    <div className='flex flex-col w-full h-full'>
        <div className='-mb-6 px-4 z-10 relativ'>
        <h5 className='bg-rose-900 text-white w-16 text-xs rounded-md e flex justify-center'>Live</h5>
        </div>
       <div className='flex flex-col w-full h-full space-y-4'>
          <main className='bg-purple-900 h-72 flex justify-center'>
           
            <Player 
     
                playbackId={locationState.live?.playbackId}
                autoPlay
            
            />
          </main>
          <main className="flex flex-col space-y-2 justify-center">
             <h5>{"Introduction to blockchain"}</h5>
             <div className='flex items-center space-x-24'>
                <main className='flex items-center space-x-4'>  
                  <img src={ Avater} className="h-8 w-8 rounded-full"/> 
                    <h5 className='text-sm font-semibold'>{"samuel mike"}</h5>
                </main>
                <button className='bg-rose-900 rounded-lg px-4 py-2 text-xs font-semibold'>Follow</button>
             </div>
          </main>

       </div>
        <div className='flex py-10 space-x-4'>
            <main className='h-96 w-3/5'>
               <LiveChat />
            </main>

            <main className='h-96 w-2/5 bg-purple-900'>
              <Friends />
            </main>
        
        </div>

    </div>
  )
}
