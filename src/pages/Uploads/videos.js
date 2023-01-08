import React,{useState,useEffect} from 'react'
import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'
import { Player } from '@livepeer/react';
import { parseArweaveTxId, parseCid } from 'livepeer/media';
import { useMemo} from 'react';
import { ethers } from 'ethers'
import Avater from "../../assests/avater.webp" 
import {BsThreeDotsVertical} from "react-icons/bs"


export default function Videos() {
  const [videoCollection, setvideoCollection] = useState([])
  const [video, setVideo] = useState({})

     const provider = new ethers.providers.Web3Provider(window.ethereum)
 
 

  useEffect(() => {
    const getCollections = async () => {
      const q = query(collection(db, "videos"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const videos = []
      // console.log(querySnapshot)
      querySnapshot.docs.map((doc) => {
        // console.log(doc.data())
        videos .push({ ...doc.data(), id: doc.id })
        setVideo({ ...doc.data(), id: doc.id })


      })
      setvideoCollection( videos )
    }
    getCollections()
  }, [])
  return (
    <div className='flex flex-col'>
    <div className='flex'>

        <main className='w-2/5 border-r'>
          <h5 className='flex  space-x-8'>
            <input type="checkbox" 
              className='bg-purple-900'
            /> 
             <span className='text-sm'>Video</span>
          </h5>

        </main>
         
        <main className='flex px-8 w-3/5 space-x-32'>
            <h5  className='text-sm'>Visibility</h5>
            <h5  className='text-sm'>Date</h5>
            <h5  className='text-sm'>Views</h5>
            <h5  className='text-sm'>Likes </h5>
        </main>
    </div>

    <div  className='flex flex-col '>
      {videoCollection.map((vid)=>{
        

        return(
          <div className='flex py-4  h-24'>
             <main className='w-2/5 border-r h-full'>
                <h5 className='flex  space-x-8'>
                  <input type="checkbox" 
                    className='bg-purple-900'
                  />  
                  < Player 
                  
                    />
                 
                </h5>

              </main>

          </div>
        )
      })

      }

    </div>
    </div>
  )
}
