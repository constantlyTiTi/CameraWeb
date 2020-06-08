import React from 'react';
// import Image from 'react-bootstrap/Image'
// import {Container,Row,Col} from 'react-bootstrap'
import MaternityImg1 from '../../assets/MaternityImg/MaternityImgPlaceHolder1.jpeg'
import MaternityImg2 from '../../assets/MaternityImg/MaternityImgPlaceHolder2.jpeg'
import MaternityImg3 from '../../assets/MaternityImg/MaternityImgPlaceHolder3.jpeg'
import MaternityImg4 from '../../assets/MaternityImg/MaternityImgPlaceHolder4.jpeg'
import MaternityImg5 from '../../assets/MaternityImg/MaternityImgPlaceHolder5.jpeg'
import ImageOnClick from './ImageOnclick'

const family=()=>
{
   return(
      <div>
             {familyImg()}
      </div> 
   ) 
}

const familyImg=()=>{
   return(
      <div className="img-container">
      <ImageOnClick usingClass="img-horizon" address={MaternityImg1} alt="MaternityImg1"/>
      <ImageOnClick usingClass="img-vertical" address={MaternityImg2} alt="MaternityImg2"/>
      <ImageOnClick usingClass="img-vertical" address={MaternityImg3} alt="MaternityImg3"/>
      <ImageOnClick usingClass="img-vertical" address={MaternityImg2} alt="MaternityImg2"/>
      <ImageOnClick usingClass="img-horizon" address={MaternityImg3} alt="MaternityImg3"/>
      <ImageOnClick usingClass="img-vertical"address={MaternityImg4} alt="MaternityImg4"/>
      <ImageOnClick usingClass="img-horizon" address={MaternityImg5} alt="MaternityImg5"/>
      <ImageOnClick usingClass="img-vertical" address={MaternityImg2} alt="MaternityImg2"/>
      <ImageOnClick usingClass="img-vertical" address={MaternityImg2} alt="MaternityImg2"/>
</div>
   )
}

export default family;