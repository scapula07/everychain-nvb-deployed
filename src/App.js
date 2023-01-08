import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from './layout/layout';
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import Uploads from './pages/Uploads';
import Videos from './pages/Uploads/videos';
import Live from './pages/Uploads/live';
import Playlist from './pages/Uploads/playlist';
import Learning from './pages/learning';
import TutorList from './pages/learning/tutorlist';
import Programs from './pages/learning/programs';
import Courses from './pages/learning/courses';
import Tutor from './pages/Tutor';
import Profile from './pages/Profile';
import Livestreams from './pages/LivestreamsStudio';
import ProgramPage from './pages/Programs';
import CoursePage from './pages/Courses';
import Messenger from './pages/Messenger';
import Communities from './pages/Communities';
import Server from './pages/Communities/Server';
import Allchats from './pages/Messenger/Allchats';
import RecentChats from './pages/Messenger/RecentChats';
import TopStreamers from './pages/Home/streamVideoList';
import ProfileList from './pages/Home/profileList';

import Notification from './pages/Notification';
import StreamVideos from './pages/Home/streamVideoList';

import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

import {livepeerClient} from "./livepeerUtils"
import { HuddleClientProvider } from '@huddle01/huddle01-client';
 import { huddleClient } from './huddleutil';
 import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
 import LivestreamView from './pages/LiveStreamView';


function App() {
  return (
    <div className="App ">
        <LivepeerConfig client={livepeerClient}>

    <HuddleClientProvider client = {huddleClient} >
       <Toaster />
      
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} >
              <Route  exact path="profiles"  element={< ProfileList/>} />
              <Route  exact path="videos"  element={<StreamVideos/>} />
           
          </Route>
          <Route exact path="/upload" element={<Uploads />} >

            <Route  exact path="videos"  element={< Videos/>} />
            <Route  exact path="live"  element={< Live />} />
            <Route  exact path="playlist"  element={< Playlist/>} />
          </Route>
          <Route exact path="/learn" element={<Learning   />} >

              <Route  exact path="tutors"  element={< TutorList/>} />
              <Route  exact path="programs"  element={< Programs />} />
              <Route  exact path="courses"  element={<Courses/>} />
             
          </Route>
          <Route exact path="/tutor/:id" element={<Tutor/>} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/livestreams" element={<Livestreams />} />
          <Route exact path="/program/:id" element={<ProgramPage/>} />
          <Route exact path="/course/:id" element={<CoursePage/>} />
          <Route exact path="/messenger" element={<Messenger  />} >
              <Route exact path="all" element={< Allchats />} />
              <Route exact path="recents" element={<RecentChats />} />
            </Route>
            <Route  exact path="/learn/communities"  element={<Communities  />} >
            <Route  exact path="server/:id"  element={<Server />} />
            </Route>

            <Route exact path="/notifications" element={< Notification />} />
            <Route exact path="/livestream/:id" element={< LivestreamView />} />
          </Routes>
          </Layout>
          </HuddleClientProvider>
          </LivepeerConfig>
    </div>
  );
}

export default App;
