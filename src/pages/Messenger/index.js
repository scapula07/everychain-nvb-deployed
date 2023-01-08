import React,{useEffect,useState,useMemo} from 'react'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import Friends from './friends'
import Chats from '../../components/Chats'
import "./messenger.css"
import pic from "../../assests/streampic.webp"
import {GoPrimitiveDot} from "react-icons/go"
import { Client } from '@xmtp/xmtp-js'
import { AccountState,xmtpClientState } from '../../recoil/globalState'
import { useRecoilState } from 'recoil'
import { ethers } from 'ethers'
import {CiImageOn,CiVideoOn} from "react-icons/ci"
import {BsImage,BsCameraVideoFill,BsFillFileEarmarkPdfFill,BsSkipStartFill,BsRecordBtn} from "react-icons/bs"
import {FaCamera} from "react-icons/fa"
import Modal from '../../components/Modal'
import {MdSend} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"
import { Player, useAssetMetrics, useCreateAsset } from '@livepeer/react';
import {AiOutlineCloseCircle} from "react-icons/ai"
import {livepeerClient} from "../../livepeerUtils"
import toast,{ Toast } from 'react-hot-toast';

export default function Messenger() {
    //const [xtmpClient,setClient]=useRecoilState(AccountState) 
    const [xtmpClient,setClient]=useState()
    const [currentChat,setCurrentChat] =useState()
    const [trigger,setTrigger] =useState(false)
    const [video,setVideo] =useState()
     
    const [ensName,setName]=useState("")
    const [img,setImg]=useState("")
    
    useEffect(()=>{
      const getENSdetails=async()=>{
         const provider = new ethers.providers.Web3Provider(window.ethereum)
         const resolvedENSname= await provider?.lookupAddress(currentChat?.peerAddress);
         setName( resolvedENSname)
         console.log(resolvedENSname)
         const resolvedENSAvater= await provider?.getAvatar(resolvedENSname ) 
         setImg( resolvedENSAvater)
       }
 
       getENSdetails()
    },[currentChat])

    
    var theStream;
    var theRecorder;
    var recordedChunks = [];
    

  function gotMedia(stream) {
      theStream = stream;
      var video = document.querySelector('video');
      video.srcObject = stream;
      try {
       var recorder = new MediaRecorder(stream, {mimeType : "video/webm"});
      } catch (e) {
        console.error('Exception while creating MediaRecorder: ' + e);
        return;
      }
      
      theRecorder = recorder;
      recorder.ondataavailable =
          (event) => { recordedChunks.push(event.data); };
      recorder.start(100);

    }

    const startFunction=()=> {

      const constraints = { "video": { width: { max: 320 } }, "audio" : true };

        navigator.mediaDevices.getUserMedia(constraints)
          .then(gotMedia)
          .catch(e => { console.error('getUserMedia() failed: ' + e); });
    }

    function download() {
      theRecorder.stop();
      theStream.getTracks().forEach(track => { track?.stop(); });
     
      var blob = new Blob(recordedChunks, {type: "video/webm"});
      const file=new File([blob],"videomsg.json")
      console.log(file)
      // var url =  URL.createObjectURL(blob);
      setVideo(file )
      createAsset?.();
  
     // setTimeout(function() { URL.revokeObjectURL(url); }, 100);

    }

     const {
      mutate: createAsset,
      data: asset,
      status,
      progress,
      error,
    } = useCreateAsset(
      video
        ? {
            sources: [{ name: video.name, file: video }] 
          }
        : null,
    );

    const progressFormatted = useMemo(
      () =>
        progress?.[0].phase === 'failed'
          ? 'Failed to process video.'
          : progress?.[0].phase === 'waiting'
          ? 'Waiting'
          : progress?.[0].phase === 'uploading'
          ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
          : progress?.[0].phase === 'processing'
          ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
          : null,
      [progress],
    );

    const sendMessage=async()=>{
      try{
       const res=await currentChat.send(`mp4${asset?.[0]?.playbackId}`)
       console.log(res.content,"resssss")
        }catch(e){
         console.log(e)
       }
       setTrigger(false)
     }


    useEffect(()=>{

        const initClient=async()=>{

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
                    
            const newsigner = provider.getSigner()
            const xmtp = await Client.create(newsigner )
            console.log( xmtp,"xxxxx")
            setClient( xmtp )
        }
        initClient()
      },[])

      console.log(xtmpClient,"cliene" )
      console.log(currentChat,"currentChat")
      console.log(asset,"asssss")
      console.log(asset?.[0]?.playbackId,"asssss")
  return (
    <LivepeerConfig client={livepeerClient}>
    <>
      
    <div>
      <div className='flex  space-x-6'>

          <main className='w-2/6'>
            <Friends xtmpClient={xtmpClient} setCurrentChat={setCurrentChat}/>
          </main>
          <main className='w-2/4'>
            <Chats name="Samuel Mike" cname="chat-h px-4 " xtmpClient={xtmpClient} currentChat={currentChat}/>
    
          </main>
          <main className='w-1/6 rounded-lg bg-purple-900 flex flex-col space-y-8'>

             <div className='flex flex-col items-center py-2 space-y-4'>
                <h5 className='text-sm font-semibold'>Profile info</h5>
                {img===null?
              
                   <img src={pic} className="h-8 w-8 rounded-full"/>
                   :
                 <img src={img} className="h-8 w-8 rounded-full"/>
                 }
                {ensName.length===0?
                <h5 className='flex flex-col items-center'>
                  {currentChat?.peerAddress!=undefined&&
                   < span className='text-xs'>{currentChat?.peerAddress?.slice(0,7)+ "..."+ currentChat?.peerAddress?.slice(-4)}</span>
                  }
                   <span className='text-rose-400 text-xs'>Offline</span>
                   </h5>
                   :
                   <h5 className='flex flex-col items-center'>
                  {currentChat?.peerAddress!=undefined&&
                   < span className='text-xs'>{ensName}</span>
                  }
                   <span className='text-rose-400 text-xs'>Offline</span>
                   </h5>
                 }
             </div>
             {/* <span className='text-rose-400 text-xs'>Offline</span> */}
             <div>
                <main className='flex items-center px-1 justify-between'>
                   <h5 className='text-xs font-semibold'>Attachments</h5>
                   <h5 className='bg-purple-600  rounded-full px-1 flex justify-center text-xs'>0</h5>
                </main>
                 
                 <div  className="grid grid-flow-row sm:grid-cols-1  lg:grid-cols-2 gap-2 pt-8 px-2">
                      <main className='p-2 bg-purple-800 rounded-lg flex justify-center'>
                         <BsImage />
                      </main>
                      <main  className='p-2 bg-purple-800 rounded-lg flex justify-center'
                        onClick={()=>setTrigger(true)}
                      > 
                      <BsCameraVideoFill />
                      </main>
                      <main className='p-2 bg-purple-800 rounded-lg flex justify-center'>
                      <BsFillFileEarmarkPdfFill />
                      </main>
                      <main className='p-2 bg-purple-800 rounded-lg flex justify-center'>
                         <FaCamera />
                      </main>

                 </div>


 
             </div>

          </main>

      </div>


    </div>

    <Modal  trigger={trigger} cname="h-2/4 w-2/4 shadow rounded-lg py-4 px-8">
         <main className='flex justify-between'>
          <h5 className='text-xl font-thin'></h5>
           <button onClick={()=>setTrigger(false)}><AiOutlineCloseCircle className="text-md font-thin" /></button>
         </main> 
        <div  className='flex flex-col justify-center items-center h-full space-y-4'>
         <div className='flex justify-center items-center '>
             <video width="320" height="240" controls autoPlay>
               <source src="movie.mp4" type="video/mp4" />
            </video>

           
         </div>
            <div className='flex justify-center items-center space-x-4'>
               <h5 className='bg-purple-800 rounded-full p-1 flex justify-center'
                 onClick={startFunction}
               ><BsRecordBtn /></h5>
                <h5 className='bg-purple-800 rounded-full p-1 flex justify-center'
                  onClick={ download}
                ><AiOutlineDownload /></h5>
                <h5 className='bg-purple-800 rounded-full p-1 flex justify-center'
                  onClick={sendMessage}
                ><MdSend /></h5>

             </div>
             {progressFormatted && <h5>{progressFormatted}</h5>}
         </div>
     
     
    </Modal>

    </>
  </LivepeerConfig>
  )
}
