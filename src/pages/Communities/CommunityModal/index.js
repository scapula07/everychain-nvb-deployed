import React from 'react'
import "./communitymodal.css"
export default function CommunityModal({children ,cname,trigger,onClose}) {
  return (
    <div>
          { trigger?
            <div className="overlay-style">
                <div className={`modal-upload ${cname}`}>
                   {children}
                </div> 
                
            </div>
         : <div></div>
            
            }

    </div>
  )
}