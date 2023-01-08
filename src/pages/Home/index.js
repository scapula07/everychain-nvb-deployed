import React ,{useState,useEffect} from 'react'
import TopBar from '../../components/TopBar'
import "./home.css"
import vitalikimg from "../../assests/vitalikimg.jpeg"
import pic from "../../assests/streampic.webp"
import {CiStreamOn} from "react-icons/ci"
import { Outlet } from 'react-router-dom'
import LitJsSdk from "@lit-protocol/sdk-browser";
import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'
import Avater from "../../assests/avater.webp" 
import {BsThreeDotsVertical} from "react-icons/bs"
import { Link } from 'react-router-dom'

export default function Home() {
    const [vids,setVids] =useState([1,2,3,4])
    const [liveStreamCollection, setLiveStreams] = useState([])
      const [video, setVideo] = useState({})

      useEffect(() => {
        const getCollections = async () => {
          const q = query(collection(db, "livestreams"), orderBy("date", "desc"));
          const querySnapshot = await getDocs(q);
          const videos = []
          // console.log(querySnapshot)
          querySnapshot.docs.map((doc) => {
            // console.log(doc.data())
            videos .push({ ...doc.data(), id: doc.id })
            setVideo({ ...doc.data(), id: doc.id })
    
    
          })
          setLiveStreams( videos )
        }
        getCollections()
      }, [])
      console.log(liveStreamCollection)
  return (
    <div>
       <div>
         <TopBar />
         </div>

         <div className='pt-4'>
            <h5 className='text-xl font-thin'>Trending</h5>
         </div>
          
        <div className=' py-4  overflow-y-scroll w-full h-56'>
            <div className='home-w flex space-x-10  h-full '>
            {liveStreamCollection.map((live)=>{
                return(
                  <Link  to={`/livestream/${live.id}`}
                  state={{
                    live
                        }}
                    >
                    <div  className="rounded-lg w-11/12 h-full">
                    <main className='h-full'>
                       <img src={live.thumbnail } className="rounded-lg w-full h-full"/>
                    </main>
                    <main className='-mt-10 flex bg-black items-center justify-between px-2'>
                       <div className='flex items-center space-x-2'>
                           <img src={Avater} className="w-8 h-8 rounded-full" />
                           <h5 className='flex flex-col'>
                              <span className='text-sm font-semibold text-white'>{live.streamer}</span>
                              <span className='text-xs  text-white'>{"12.5k following"}</span>
                           </h5>
                       </div>
                      <button className='bg-rose-900 rounded-xl px-2  py-2 flex items-center space-x-1'>
                         <span className='text-xs'>Live</span>
                        <CiStreamOn />
                      </button>
                    </main>
                 </div>
                 </Link>
                )
      

            })

            }
            </div>
        </div>

          <div className='pt-4'>
            <Outlet />
          </div>
    </div>
  )
}
