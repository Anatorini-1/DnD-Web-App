import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
function NavItem({label,isActive,setView}) {
    const [hover, setHover] = useState(false)
    
    return (
        <Link onClick={() => {setView(label)}} style={{color:"black", textDecoration:"none"}} to={`/${label}`} >
        <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{
            ...ComponentStyle,
            backgroundColor: hover ? "#660308" :"#963338",
            color: isActive ? "white" : "black", 
            }}>
                {label}
        </div>
        </Link>
    )
}

const ComponentStyle = {
    width:"200px",
    height:"60px",
    borderRadius:"40px",
    marginBottom:"20px",
    marginLeft:"20px",
    padding:"10px",
    fontSize:"40px",
    fontWeight:"bold",
    boxShadow:"5px 5px 2px black",
    border:"2px solid black",
    color:"#1a1a1d"
}

export default NavItem
