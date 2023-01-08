import React,{useState,useEffect} from 'react'
import NotificationMsg from './notifcationMsg' 
import * as PushAPI from "@pushprotocol/restapi";



export default function Notification() {
    const [notifications,setNotifications ] =useState([1,2,3,4,5,6,7,8])
  

    useEffect(()=>{
        const receiveNotification=async()=>{
            const notifications = await PushAPI.user.getFeeds({
                user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
                env: 'staging'
              });
    
              setNotifications(notifications )
    
        }
        receiveNotification()

    },[])
  
  return (
    <div className=''>
        < div className='flex space-x-4'>

            <main className='w-3/4  '>
                <main className='bg-purple-900 rounded-t-xl font-semibold px-4 py-2 flex items-center justify-between'>
                   <h5>Notifications</h5>
                  <button className='bg-rose-900 px-4 py-1 text-xs rounded-md'>Opt-in</button>
                </main>
                <div className='pt-4 flex flex-col space-y-1'>
                {notifications.map((notification)=>{
                    return(
                          <NotificationMsg notification={notification} msg={"Lorem ipsum dolor sit amet..."}
                          />
                    )
                })

                }
                </div>
            </main>
            <main className='w-1/4 bg-purple-900  '>
               <h5 className='rounded-t-xl font-semibold px-4 py-2'>Friend requests</h5>
            </main>

        </div>

    </div>
  )
}
