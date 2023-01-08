

import React from 'react'
import Header from '../components/Header'
import Footer from './footer'
import toast, { Toaster } from 'react-hot-toast';
import NavSideBar from '../components/NavSideBar';
import OnlineFriends from '../components/OnlineFriends';
import "./layout.css"
export default function Layout({children}) {
  return (
    <div className="layout bg-purple-800 h-screen text-white px-8  py-4 overflow-x-hidden">
      <div className='w-full flex '>
          <main className='width-sidebars'>
            < NavSideBar />
          </main>
          <main className='w-10/12'>
            <Header />
            <div className="page mt-20 px-10 ">
            {children}

            < Toaster  />
            </div>
            {/* <div className='pt-32 px-10'>
              <Footer />
             </div> */}
          </main>
          <main className='friends-sidebars'>
            <OnlineFriends />
          </main>


      </div>
    
  </div>
  )
}