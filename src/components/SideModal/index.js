import React from 'react'
import "./sidemodal.css"
export default function SideModal({children ,cname,trigger,onClose}) {
  return (
    <div>
          { trigger?
            <div className="sideoverlay-style">
                <div className={`sidemodal-upload ${cname}`}>
                   {children}
                </div> 
                
            </div>
         : <div></div>
            
            }

    </div>
  )
}