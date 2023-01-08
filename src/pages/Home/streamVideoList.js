import React,{useEffect,useState} from 'react'
import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'
import { Player } from '@livepeer/react';
import { parseArweaveTxId, parseCid } from 'livepeer/media';
import { useMemo} from 'react';
import { ethers } from 'ethers'
import Avater from "../../assests/avater.webp" 
import {BsThreeDotsVertical} from "react-icons/bs"



export default function StreamVideos() {
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

 console.log(videoCollection) 

  return (
    <div>
      
      <div className='w-full'>
          <h5 className='text-xl font-thin'>Latest videos</h5>
      </div>
     

      <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pt-8 ">

      {
           videoCollection.map((vid)=>{
            const idParsed =  parseArweaveTxId(vid.videoUrl)
          
            console.log( idParsed )
                 return(
                <div className='flex flex-col space-y-4'>

                 < Player 
                     src={idParsed.url}
                     
                  
                 />
                  <div className='flex items-center justify-between'>
                     <div className='flex items-center space-x-4 '>
                    <img src={ Avater} className="h-8 w-8 rounded-full"/>
                    <main className='flex flex-col'>
                       <h5 className='text-sm font'>{vid?.creator?.slice(0,4)+ ".."+ vid?.creator?.slice(-4)}</h5>
                       <h5 className='text-xs '>{vid?.title}</h5>
                    </main>

                    </div>
                    <BsThreeDotsVertical />
                  </div>

                </div>
              )
           })
          }

        </div>

      </div>
  )
}
