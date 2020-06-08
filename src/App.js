import React, { Component } from 'react'; 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Gallery from 'Gallery/Gallery'
import NavHeader from 'HeaderNav/NavHeader'
import ContactMethod from './LogoHeader/LogoHeader'

import GalleryImg from 'assets/placeholderImg.jpeg'
import InstagramLogoImg from 'assets/Instagram.png'
import WeChatLogoImg from 'assets/WeChat.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch
} from "react-router-dom";

import Maternity from './Gallery/Gallery2ndLevel/Maternity'
import Baby from './Gallery/Gallery2ndLevel/Baby'
import Family from './Gallery/Gallery2ndLevel/Family'
import Profession from './Gallery/Gallery2ndLevel/Profession'

import AboutUs from './HeaderNav/NavContent/AboutUs'
import Contact from './HeaderNav/NavContent/Contact'
import Pricing from './HeaderNav/NavContent/Pricing'

class App extends Component{

  state={
    contactMethod:[
      {imageLogo:InstagramLogoImg, address:"https://www.instagram.com/mylittlememorystudio/"},
      {imageLogo:WeChatLogoImg, address:"TBD"}
    ],
    navHeader:[
      {name: "About us", to: "/HeaderNav/NavContent/AboutUs"},
      {name: "Gallery", to:"/"},
      {name: "Pricing", to :"/HeaderNav/NavContent/Pricing"},
      {name: "Contact", to: "/HeaderNav/NavContent/Contact"}
    ],
    gallery:[
      {name: "Maternity",to:"/Gallery/Gallery2ndLevel/Maternity", image:GalleryImg},
      {name: "Baby", to:"/Gallery/Gallery2ndLevel/Baby",image:GalleryImg},
      {name: "Family", to:"/Gallery/Gallery2ndLevel/Family",image:GalleryImg},
      {name: "Profession", to:"/Gallery/Gallery2ndLevel/Profession",image:GalleryImg}
    ],
    dropDownMenu: false
  }
//  dropDownMenuShowHandler=()=>{
//    this.setState({dropDownMenu:true})
//  }
//  dropDownMenuHideHandler=()=>{
//   this.setState({dropDownMenu:false})
// }
  galleryOnClick=(address)=>{
    window.open(address,"_blank")
  }
  render()
  {
    const logoTag=(
      <div className="App">
        {this.state.contactMethod.map(item=>{
          return <ContactMethod imageLogo={item.imageLogo} address={item.address}/>
        })}
      </div>
    )
    const galleryShow=(
      <div className="App">
        {this.state.gallery.map(item=>{
          return <Gallery name={item.name} click={this.galleryOnClick.bind(this,item.to)}
          homePageDivClassName="homePageDiv" homePageTagClassName="homePageTag" homePageImgClassName="homePageImg">
            <img className="AppImg" src={item.image} alt="placeholder Img" homePageImgClassName="homePageImg"/>
          </Gallery>
        })}
      </div>
    )

    const navHeaderTag=(
      <div className="App">
        {/* {this.state.navHeader.map(item=>{
          return <NavHeader className="AppNavHeader" name={item.name} to={item.to}></NavHeader>
        })} */}
        <NavHeader className="AppNavHeader" name={this.state.navHeader[0].name} to={this.state.navHeader[0].to}></NavHeader>
        <NavHeader className="AppNavHeader AppNavHeaderMenuShow" name={this.state.navHeader[1].name} to={this.state.navHeader[1].to}
        // onMouseOver={this.dropDownMenuShowHandler.bind(this)}
        // onMouseOut={this.dropDownMenuHideHandler.bind(this)}
        >
          {/* {this.state.dropDownMenu ?( */}
          <div className="dropDownMenuShowClass" >
          {this.state.gallery.map(item=>{
          return <Gallery homePageTagClassName="dropDownMenuTextClass" name={item.name} click={this.galleryOnClick.bind(this,item.to)}>
          </Gallery>
        })}
        </div>
        {/* ) :null} */}
        </NavHeader>
        <NavHeader className="AppNavHeader" name={this.state.navHeader[2].name} to={this.state.navHeader[2].to}></NavHeader>
        <NavHeader className="AppNavHeader" name={this.state.navHeader[3].name} to={this.state.navHeader[3].to}></NavHeader>
        {/* {console.log(this.state.dropDownMenu)} */}
        {/* <div className="AppNavHeader">1</div>
        <div className="AppNavHeader" name="showMenu" 
        onMouseOver={this.dropDownMenuShowHandler.bind(this)}>
          ShowMenu
          {this.state.dropDownMenu ?
        (<div className="dropDownMenuClass" 
        onMouseOut={this.dropDownMenuHideHandler.bind(this)}
        >
          <div>option 1</div>
          <div>option 2</div>
        </div>) :null}
          </div> */}
      </div>
    )


    return (
      <div className="App">
        <div className="App-logo"> Logo placeholder</div>
        <div className="ContactLogoMargin">
          {logoTag}
        </div>
        <Router>
          {navHeaderTag}
          <Switch>
            <Route exact path="/HeaderNav/NavContent/AboutUs">
              <AboutUs/>
            </Route>
            <Route exact path="/">
              {galleryShow}
              </Route>
              <Route exact path="/Gallery/Gallery2ndLevel/Maternity">
                <Maternity/>
              </Route>
              <Route exact path="/Gallery/Gallery2ndLevel/Baby">
                <Baby/>
              </Route>
              <Route exact path="/Gallery/Gallery2ndLevel/Family">
                <Family/>
              </Route>
              <Route exact path="/Gallery/Gallery2ndLevel/Profession">
                <Profession/>
              </Route>
            <Route exact path="/HeaderNav/NavContent/Pricing">
              <Pricing/>
            </Route>
            <Route exact path="/HeaderNav/NavContent/Contact">
              <Contact/>
            </Route>
          </Switch>      
      </Router>

        <Router>

      </Router>
      </div>
    )
  }

} 

export default App;
