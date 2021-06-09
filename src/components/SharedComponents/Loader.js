import React from 'react'

export default function Loader({isLoading}) {
    if(isLoading) return (<div style={wrapperStyle}><div style={spinnerStyle} className="spin"></div></div>)
    else return (<></>)
    
}
const spinnerStyle={
    width:"700px",
    height:"700px",
    margin:"0 auto"
}

const wrapperStyle = {
    width:"100%px",
    height:"110%",
   
    paddingTop:"20px",
    paddingRight:"100px"
}