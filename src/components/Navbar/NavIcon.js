import React from 'react'
import {CgMenu} from 'react-icons/cg'
import {useState} from 'react'
function NavIcon({onClick,isOpen}) {
    const [hover, setHover] = useState(false)
    
    return (
        <div onClick = {onClick} style={{...ComponentStyle, backgroundColor: hover ? "rgba(255,255,255,0.3)" : isOpen ? "darkred" : "transparent"}}>
           <CgMenu onMouseEnter={() => {setHover(!hover)}} onMouseLeave = {() => {setHover(!hover)}} /> 
        </div>
    )
}

const ComponentStyle = {
    position:"absolute",
    top:"10px",
    left:"10px",
    fontSize:"50px",
    width:"50px",
    height:"50px",
    zIndex:"2000",
    borderRadius:"10px",
   
}

export default NavIcon
