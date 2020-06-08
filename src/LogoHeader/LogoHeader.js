import React from 'react';
import '../App.css'

const contactMethod=(prop)=>{
    return(
        <>
        <a href={prop.address}>
            <img className="contact-log" src={prop.imageLogo} alt="contact method log"/></a>
        </>
    )
}

export default contactMethod