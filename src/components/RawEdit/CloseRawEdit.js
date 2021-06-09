import React from 'react'

export default function OpenRawEdit({setMode}) {
    return (
        <div>
          <button className="dev" style={ComponentStyle} onClick={() => {setMode()}}>
              Close
          </button>
        </div>
    )
}
const ComponentStyle = {
    position:"absolute",
    right:"10px",
    top:"10px",
    fontFamily:"Arial !important",
    fontSize:"50px",
    fontWeight:"bold",
    border:"5px solid #660308",
    borderRadius:"10px"
}