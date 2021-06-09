import React from 'react'

export default function ApperanceToken() {
    return (
        <div style={ComponentStyle}>
            <img src={`${localStorage.getItem("jsonPath")}/token.png`} alt=""/>
        </div>
    )
}
const ComponentStyle = {
    width:"250px",
    height:"250px",
    backgroundColor:"rgba(0,0,0,0.1)",
    marginLeft:"60px",
    border:"3px solid #660308",
    borderRadius:"30px"
}