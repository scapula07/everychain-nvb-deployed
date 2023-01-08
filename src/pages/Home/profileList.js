import React,{useEffect,useState} from 'react'
import { apolloClient } from '../../lensGqlApi'
import { gql } from '@apollo/client'
import { query } from '../../lensGqlApi'
import streampic from "../../assests/streampic.webp"
import {BsStarFill} from "react-icons/bs"
import {BsThreeDotsVertical} from "react-icons/bs"


const ProfileBar=({ profile, count})=>{
     return(
        <div className='w-full flex justify-between items-center'>
      
        <main className='w-2/5 flex items-center justify-between'>
           <div className='flex items-center  space-x-12'>
               <BsStarFill  className='text-yellow-500 text-2xl'/>
              <main className='flex items-center space-x-2'>
                <img src={profile?.picture?.original.url }
                   className="h-16 w-16 rounded-full"
                />
                <h5 className='text-sm font-semibold'>{profile.name}</h5>

              </main>
           </div>
           <h5 className='text-sm font-thin'>{profile?.stats?.totalFollowers} followers</h5>
        </main>
        <main className='w-2/5 flex justify-between'>
           <h5 className='bg-purple-700 flex justify-center w-1/2 text-xs py-2 rounded-md font-thin'> {profile?.stats?.totalPublications} Total publications</h5>

           <BsThreeDotsVertical />
        </main>

     </div>
     )

  }
export default function ProfileList() {
    let count =0
    const [profiles,setProfiles]  =useState([])
    useEffect(()=>{
        const fetchQuery=async()=>{
            const response = await apolloClient.query({
                query: gql(query),
              })

              setProfiles(response.data.recommendedProfiles)
        }
        fetchQuery()

    },[])


  return (
    <div className='w-full'>
          <h5 className='text-xl font-thin'>Recommended profiles</h5>
          <div className='flex flex-col space-y-8 py-8'>
          {profiles.map((profile)=>{
            
            count++
           console.log(profile) 
             return(
                 <ProfileBar profile={profile}  count={count}/> 
             )
         })
 
         }
          </div>
    
    </div>
  )
}
