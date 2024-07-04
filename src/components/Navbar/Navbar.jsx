//rfc: react functional component
import React from 'react'
import "./Navbar.scss"
export default function Navbar() {
  //we make array to loop over it 
  const navLinks =[
    { 
      text:"About",
      href:"#About"
    },
    { 
      text:"FOR YOU",
      href:"#FORYOU"
    },
    { 
      text:"SERVICES",
      href:"#SERVICES"
    },
    { 
      text:"BLOG",
      href:"#BLOG"
    },
    { 
      text:"VLOG",
      href:"#VLOG"
    },
    { 
      text:"CONTACT",
      href:"#CONTACT"
    },
  ]
  return (
    <div className='navbar'>
      {navLinks.map((link,index)=>(
        <a href={link.href} key={index}>{link.text}</a>
      ))
      }
    </div>
  )
}
