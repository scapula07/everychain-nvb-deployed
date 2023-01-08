import React,{useState} from 'react'
import encode from "../../assests/encode.jpeg"
import livepeer from "../../assests/livepeer.jpeg"
import streamr from "../../assests/streamr.png"
import {MdOutlineAdd} from "react-icons/md"
import { Link } from 'react-router-dom'

const communies =[
    {
        img:encode,
        name:"Encode club"

    },
    { 
        img:livepeer,
        name:"Livepeer"
        
    },
    {
        img:streamr,
        name:"Streamr"
        
    }

]
export default function JoinList() {

    const [communities,setCommunities] =useState([])
  return (
    <div className='flex space-x-8 w-full bg-purple-900 px-4 py-4 rounded-md'>
        { communies.map((comm)=>{

            return(
                <Link  to={`server/${comm.name}`}
                state={{
                    comm
                      }}
                  >
                <main className='flex justify-center min-w-fit bg-purple-700 p-3 rounded-lg'>
                  <img  src={comm.img} className="rounded-lg w-10 h-10" />
                  <h5 className='bg-rose-900 h-4 flex justify-center text-xs p-1 items-center -ml-3 rounded-lg -mt-2'>{"0"}
                  </h5>
              </main>
              </Link>
            )
        })}
         
         <main className='flex justify-center items-center min-w-fit bg-purple-700 p-3 rounded-lg'>
                  <MdOutlineAdd className='font-semibold text-2xl'/>
                
        </main>
    </div>
  )
}
