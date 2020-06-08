import React from 'react';
import './Gallery.scss'


const gallery=(props)=>
{
    console.log(props.click)
    return(
        <div className={props.homePageDivClassName}>
            {/* <GalleryLink actWhenExact={true} to={prop.to} label={prop.name}></GalleryLink> */}
            <div className={props.homePageTagClassName} onClick={props.click}>{props.name}</div>
            <div className={props.homePageImgClassName}>
                {props.children}
            </div>
        </div>

    )
}


export default gallery;