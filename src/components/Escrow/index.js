import React from 'react'

export default function Escrow({ account, ensName,avater}) {
  return (
    <div>
        <h5 className='text-sm font0-semibold'>Prepayment</h5>
        
        <div className='flex flex-col items-center py-4'>
            <h5 className='border-b border-purple-600 pb-2 font-semibold text-sm'>Amount</h5>

            <main className='py-6 flex flex-col items-center space-y-4'>
                <select className=" bg-purple-900 px-2 border border-purple-500 outline-none border-0 text-sm py-1 rounded-lg">
                    <option>BLV</option>
                    <option>ETH</option>
                    
                </select>
                <h5 className='text-xl space-x-2 font-extrabold'>
                   <span>100</span> 
                   <span className='font-thin'>Max</span>
                    </h5>
            </main>
          </div>

          <div>
           <h5 className='text-sm font-bold'>From </h5>
              <div className='flex space-x-4 py-2'>
                   <img  src={avater} className="h-24 w-24 rounded-full "/>
                   <h5 className='flex flex-col'>
                      <span className='text-xs font-semibold'>{ensName}</span>
                      <span className='text-xs'>{account?.slice(0,7)+ "..."}</span>
                   </h5>
              </div>

              <div className='py-4'>
                <h5 className='text-sm font-bold'>To --- Escrow</h5>
              </div>

              <div className='w-full flex justify-center py-8'>
                 <button className='bg-purple-800 text-xs font-semibold px-4 py-1 rounded-lg'>Proceed to payment</button>
              </div>
           </div>
    </div>
  )
}
