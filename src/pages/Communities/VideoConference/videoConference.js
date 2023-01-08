import React from 'react'
import {HuddleClientProvider,getHuddleClient} from "@huddle01/huddle01-client";
import { useHuddleStore } from "@huddle01/huddle01-client/store";
import { huddleClient } from '../../../huddleutil';
import {AiOutlineAudioMuted} from "react-icons/ai"
import {BsCameraVideoOff,BsMic,BsCameraVideo,BsRecord2} from "react-icons/bs"
import {HiOutlinePhoneMissedCall,HiOutlineUserAdd} from "react-icons/hi"
import PeerAudioVideo from './peerAudioVideo';
import MeCam from './meVideo';
import { AccountState,EnsNameState } from '../../../recoil/globalState';
import { useRecoilValue } from 'recoil';

export default function VideoConference() {

   const account =useRecoilValue(AccountState)
   const ensName =useRecoilValue(EnsNameState)

    const huddleClient = getHuddleClient("YOUR_API_KEY");
    const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
    const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
    const roomState = useHuddleStore((state) => state.roomState);
    const recordingState = useHuddleStore((state) => state.recordingState);
    const recordings = useHuddleStore((state) => state.recordings);

    const handleJoin = async () => {
        try {
          await huddleClient.join("dev", {
            address: account,
            wallet: "",
            ens: ensName,
          });
    
          console.log("joined");
        } catch (error) {
          console.log({ error });
        }
      };
     console.log(peersKeys,"ppekeys")
  console.log(lobbyPeers,"loby")  
  return (
    <div className='h-full w-full'>
        <div className='h-full w-full'>
        {peersKeys.length==0?
            <main className='w-full  h-4/5 bg-purple-900 flex justify-center'>
                 <MeCam />
               
            </main>
            :
            <main className='bg-purple-900 h-4/5 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pt-8 w-full'>
               <MeCam />
               {peersKeys.map((key) => (
                 < PeerAudioVideo key={`peerId-${key}`} peerIdAtIndex={key} />
                 ))}
             
            </main>
        }
            <main className='flex'>
              {lobbyPeers[0] && <h2 className='text-xs font-semibold'>Lobby Peers</h2>}
                <div>
                   {lobbyPeers.map((peer) => (
                    <div className='text-xs font-thin'>{peer.peerId}</div>
                   ))}
              </div>

               {peersKeys[0] && <h2>Peers</h2>}

            </main>

            <main className='py-2 flex space-x-6 items-center justify-center'>

                    <div>
                     <button className=' rounded-md p-2 space-x-1 bg-purple-800 flex items-center justify-center px-4'
                         onClick={() =>
                          // will not work in localhost
                          huddleClient.startRecording({
                            sourceUrl: window.location.href,
                          })
                        }
                      >
                     < BsRecord2 className='text-2xl' />
                     <span className='text-xs'>Record</span>
                    </button>
                 </div>
                 <div className='flex items-center justify-center space-x-4'>
                    <button className='bg-green-500 rounded-full p-2 flex justify-center'
                       onClick={() => huddleClient.enableWebcam()}
                      >
                     < BsCameraVideo className='text-xl'/>
                    </button>

                    <button className='bg-green-500 rounded-full p-2 flex justify-center'>
                     < BsMic className='text-xl' />
                    </button>

                    <button className='bg-rose-500 rounded-full p-2 flex justify-center'>
                     < HiOutlinePhoneMissedCall className='text-xl' />
                    </button>

                 </div>

                 <div className='flex items-center space-x-2'>
                   <h5 className='text-xs bg-purple-800 px-4 py-2  rounded-md'
                      onClick={ handleJoin}
                   >
                     join meeting
                   </h5>
                    <h5 className='bg-purple-800  rounded-full p-2 flex justify-center'
                      onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}
                    >
                       <HiOutlineUserAdd  className='text-xl' />
                    </h5>
                 
                   

                 </div>

               
            </main>

        </div>

    </div>
  )
}
