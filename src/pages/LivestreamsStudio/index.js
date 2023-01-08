import React,{useState} from 'react'
import {CiSettings} from "react-icons/ci"
import {AiOutlineExpandAlt} from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
import Participant from './participant'
import VideoStream from './videoStream'
import Activestream from './activestream'
import StreamChats from './streamChats'
import { useCreateStream } from '@livepeer/react';
;


export default function Livestreams() {
    const [attendees,setAttendee] =useState([1,2,3,4])

    const [streamName, setStreamName] = useState('');
    const {
        mutate: createStream,
        data: stream,
        status,
      } = useCreateStream({ name: streamName });
     
    console.log(streamName)
    console.log(stream,"cccccc")
  return (
    <div>
        <div className='flex  space-x-6'>
            <main className='w-1/4 bg-purple-900 min-h-min pb-10 rounded-lg'>
                <div className='flex items-center justify-between px-2 bg-purple-600' >
                    <h5 className='text-sm rounded-lg '>Participants({"0"})</h5>
                     <h5 className='flex items-center space-x-0.5'>
                         <CiSettings />
                         <AiOutlineExpandAlt />
                         <RiArrowDropDownLine />
                     </h5>
         
                </div>
                <div className='bg-purple-700 text-sm px-2'>Host({"1"})</div>
             
                    <Participant name="Samuel Mike" location=" Canada"  />

                    <div className='bg-purple-700 text-sm px-2'>Attendee({"1"})</div>
                    {
                        attendees.map((attendee)=>{
                           return(
                            <Participant name="Samuel Mike" location=" Canada" />

                           )
                        })
                    }
               
            </main>

           <main className='w-2/4'>
               <VideoStream  setStreamName={setStreamName} 
                streamName={streamName}
                status={ status}
                 stream={stream}
                createStream={createStream}
                attendees={attendees}
               />
           </main>
            <main  className='w-1/4 flex flex-col space-y-8'>
                <div>
                    <Activestream  />
                </div>

                <div>
                    <StreamChats />
                </div>

            </main>

        </div>
    </div>
  )
}
