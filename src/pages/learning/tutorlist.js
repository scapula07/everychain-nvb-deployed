import React,{ useEffect,useState }  from 'react'
import {useRecoilValue,useRecoilState} from "recoil"
import { collection,onSnapshot} from "firebase/firestore";
import {db} from "../../firebase"
import {TutorsState} from "../../recoil/globalState"
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import Card from '../../components/Card';

export default function TutorList() {

    const [tutors,setTutors]=useRecoilState(TutorsState)

    useEffect( ()=>{
        const fetchTutors=async()=>{
           
             onSnapshot(collection(db, "tutors"),(snapshot)=>{
              setTutors( snapshot.docs.map((doc)=>{
                     return {...doc.data(),id:doc.id }
               } ))
            });   
            }
    fetchTutors()
   },[] )
   console.log(tutors)
  return (
    <div>
         <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pt-8 ">
         {
            tutors.map((tutor)=>{
             
              return(
                <Card  cname="shadow-lg rounded-lg">
               <Link  to={`/tutor/${tutor.id}`}
                   state={{
                       tutor
                         }}
                     >
                 <img src={tutor.imgUrl} className="w-full h-52 rounded-lg "/>
                 </Link>
               <div className="p-7 flex flex-row justify-between">
                   <h3 className="font-bold">{tutor.firstname}</h3>
                   <span className="text-lg"><AiFillStar className="inline text-xl mb-0.5 text-amber-400"/><span className="mt-1 ml-0.5 text-amber-400">{tutor.ratings}</span></span>
               </div>
              <Link to={`/tutor/${tutor.id}`}

                   state={{
                        tutor
                           }}>
              <button className="bg-rose-900 w-1/2 rounded-full ml-16 mb-4 "><BsArrowRightShort className="text-white inline text-2xl"/><span className="text-white text-lg">View</span></button>
              </Link>
           </Card>
              )
             
          })
          }



         </div>

    </div>
  )
}
