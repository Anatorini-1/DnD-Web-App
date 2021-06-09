import React from 'react'
import Row from './ProfficiencyRow'
export default function ProfficiencyGroup({allData,data,label,setData}) {
    let rows = []
    for(let row in data){
        rows.push(<li key={row} ><Row group = {label} allData={allData} setData = {setData} data={data[row]}/></li>)
    }
    return (
        <div style={ComponentStyle}>
            {label}
           <div style={content}>
               <ul style={{marginTop:"0"}}>
           {rows}

               </ul>
           </div>
        </div>
    )
}
const ComponentStyle = {
    width:"95%",
    border:"3px solid #660308",
    borderRadius:"15px",
    backgroundColor:"rgba(0,0,0,0.1)",
    marginBottom:"15px",
    padding:"5px"
}

const content = {
    fontSize:"30px"
}