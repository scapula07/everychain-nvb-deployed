import React from 'react'

const Card=({cname,children})=>{

    return(
        <div className={cname}>
           {children}
        </div>
    )
 }
 
 export default Card