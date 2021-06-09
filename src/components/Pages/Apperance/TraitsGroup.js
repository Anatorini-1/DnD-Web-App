import React from 'react'

export default function TraitsGroup({data,label}) {
    //console.log(data)
    return (
        <div style={ComponentStyle}>
           {label} <br />
           {data}
        </div>
    )
}
const ComponentStyle ={
    fontWeight:"bold",
    padding:"10px",
    width:"800px",

    fontSize:"45px",
    marginLeft:"80px",
    marginBottom:"10px",
    border:" 3px solid hsl(357, 94%, 21%)",
    borderRadius:"20px",
    backgroundColor:"rgba(0,0,0,0.1)",
}