
import React,{useState} from 'react';
// import Image from 'react-bootstrap/Image'
// import '../Gallery.sass'


const ImageOnClick=(props)=>{
    const [display, setDisplay] = useState(false);
    return(
        <>
            {display?
            (
            <>
            <img className="img-popup" onClick={()=>setDisplay(!display)} src={props.address} alt={props.alt}/>
            <img className={props.usingClass} src={props.address} alt={props.alt}/>
            </>
            ):
            <img className={props.usingClass} onClick={()=>setDisplay(!display)} src={props.address} alt={props.alt}/>}
        </>
    )
}
// const openWindow=(address)=>{
//     console.log(address)
//     return(
//         <div>
//             <img src={address} alt="Maternity1"/>
//         </div>
//     )
// }
export default ImageOnClick