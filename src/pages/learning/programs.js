import React,{useState,useEffect} from 'react'
import { collection,onSnapshot} from "firebase/firestore";
import {db} from "../../firebase"
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import Card from '../../components/Card';





export default function Programs() {
    const [programs,setPrograms]=useState([])
     
    useEffect( ()=>{
        const fetchPrograms=async()=>{
           
             onSnapshot(collection(db, "programs"),(snapshot)=>{
                setPrograms( snapshot.docs.map((doc)=>{
                     return {...doc.data(),id:doc.id }
               } ))
            });   
            }
        fetchPrograms()
   },[] )
   
   console.log(programs)


  return (
    <div>
 <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pt-8 ">
         {
            programs.map((program)=>{
             
              return(
                <Card  cname="shadow-lg rounded-lg">
               <Link  to={`/program/${program.id}`}
                   state={{
                       program
                         }}
                     >
                 <img src={program.imgUrl} className="w-full h-52 rounded-lg "/>
                 </Link>
               <div className="py-4 px-2 flex flex-row items-center space-x-4">
                  <img src={program.imgUrl} className='rounded-full h-10 w-10'/>
                   <h3 className="font-bold text-sm">{program.name}</h3>
              </div>
             
           </Card>
              )
             
          })
          }



         </div>




    </div>
  )
}
