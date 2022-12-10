import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  //states
  const [showLinks, setShowLinks] = useState(false)  //by default we are not showing the hamburger icon
  //one of the states below is parent (linksContainerRef) and the other one is the child(linksRef)--also we must change the links
  const linksContainerRef = useRef(null)
  const linksRef =useRef(null)  //menu links height 

  useEffect(()=>{
    //we should check the height of the links--linksRef.current.getBoundingClientRect() gives the x,y,width,height,top,right,left and bottom
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks){
      linksContainerRef.current.style.height =`${linksHeight}px` //adjust the height of the burger menu automatically
    }else{
      linksContainerRef.current.style.height="0px"
    }
  },[showLinks])  //every time the showLinks changes I would like to call the call back function

  const toggleLinks = () =>{
    setShowLinks(!showLinks)  
    console.log(showLinks)
  }

  return(
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo'/>
          {/* hamburger icon */}
          <button className='nav-toggle' onClick={toggleLinks}><FaBars/></button>  
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((linksItem)=>{
              return(<li><a href={linksItem.url} key={linksItem.id}>{linksItem.text}</a></li>)
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialItem)=>{
            //or const {id,url,icon} = socialItem
            return(<li><a href={socialItem.url} key={socialItem.id}>{socialItem.icon}</a></li>)
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
