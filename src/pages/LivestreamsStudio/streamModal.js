import React from 'react'
import "./streammodal.css"
export default function StreamModal({children ,cname,trigger,onClose}) {
  return (
    <div>
          { trigger?
            <div className="overlay-style">
                <div className={`streammodal-upload ${cname}`}>
                   {children}
                </div> 
                
            </div>
         : <div></div>
            
            }

    </div>
  )
}