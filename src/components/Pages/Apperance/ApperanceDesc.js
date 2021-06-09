import React from 'react'

export default function ApperanceDesc({ data}) {
    return (
        <div style={ComponentStyle}>
            {data}
        </div>
    )
}
const ComponentStyle = {
    width:"320px",
    marginLeft:"30px",
    marginTop:"30px",
    backgroundColor:"rgba(0,0,0,0.1)",
    borderRadius:"25px",
    border:"3px solid hsl(357, 94%, 21%)",
    padding:"10px",
    fontWeight:"bold"

}