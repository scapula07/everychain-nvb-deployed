
import React,{useState,useEffect} from 'react'
import { collection,onSnapshot} from "firebase/firestore";
import {db} from "../../firebase"
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import Card from '../../components/Card';





export default function Courses() {
    const [courses,setCourses]=useState([])
     
    useEffect( ()=>{
        const fetchPrograms=async()=>{
           
             onSnapshot(collection(db, "courses"),(snapshot)=>{
                setCourses( snapshot.docs.map((doc)=>{
                     return {...doc.data(),id:doc.id }
               } ))
            });   
            }
        fetchPrograms()
   },[] )
   
   console.log(courses)


  return (
    <div>
 <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pt-8 ">
         {
            courses.map((course)=>{
             
              return(
                <Card  cname="shadow-lg rounded-lg">
               <Link  to={`/course/${course.id}`}
                   state={{
                       course
                         }}
                     >
                 <img src={course.imgUrl} className="w-full h-52 rounded-lg "/>
                 </Link>
               <div className="py-4 px-2 flex flex-row items-center space-x-4">
                  <img src={course.imgUrl} className='rounded-full h-10 w-10'/>
                   <h3 className="font-bold text-sm">{course.name}</h3>
              </div>
             
           </Card>
              )
             
          })
          }



         </div>




    </div>
  )
}
