import React,{useState} from 'react'
import axios from "axios"
import { AccountState ,AvaterState} from '../../recoil/globalState'
import { useRecoilValue } from 'recoil'
import toast,{ Toast } from 'react-hot-toast'

export default function RoomAccess() {
     const account =useRecoilValue(AccountState)
     const avater=useRecoilValue(AvaterState)
     const [hasAccess,setAccess]=useState(false)

   const mintNft=async()=>{
    toast("Minting NFT")
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: '5ac96cad-d645-41cc-880f-1e85c554dd4a'
      },
      body: JSON.stringify({
        chain: 'goerli',
        contract_address: '0xbb01D6DA9D221609D102f413e5A444888798075c',
        metadata_uri: avater? avater :"https://i.redd.it/4iyd1x1xha681.jpg",
        mint_to_address:  account
      })
    };
    
    fetch('https://api.nftport.xyz/v0/mints/customizable', options)
      .then(response => response.json())
      .then(response => {
        toast("NFT minted")
          setAccess(true)
          console.log(response)

      })
      .catch(err => console.error(err));

  }
  return (

    <div className='px-6'>
         <h5 className='text-lg font-semibold pt-6'> Gain Access </h5>
          <div className='pt-8'>
               <p>

               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
               numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
               optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
             nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia.
               </p>
          </div>
           <div className='py-8'>
            {hasAccess===false?
           <button className="text-sm font-semibold px-4 bg-purple-800 py-1" 
             onClick={mintNft}
           >Mnt Access NFT</button>

           :

           <h5 className='text-xs font-semibold'>Access granted </h5>
          }
           </div>
          

        
    </div>
  )
}
