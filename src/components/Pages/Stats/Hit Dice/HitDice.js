import React from 'react'
import hitDice from "../../../img/hitDice/hitDice"

export default function HitDice({data}) {
    /*
    left
    max
    type
    */
   const Maxicon = (<img style={{width:`${160/data.Max}px`}}src={hitDice[data.Type]} alt={data.Type}/>)
   const Lefticon = (<img style={{width:`${160/data.Left}px`}}src={hitDice[data.Type]} alt={data.Type}/>)
   var left = []
   var max = []
    let iconWidth = 0;
  

    for(let i = 0; i < data.Max; i++){
       max.push((<span key={i}>{Maxicon}</span>))
       
    }
    for(let i = 0; i < data.Left; i++){
       left.push((<span style= {{fontSize:"15px"}} key={i}>{Lefticon}</span>))
       
    }
  
    return (
        <div style={ComponentStyle}>
            Hit Dice &nbsp;| &nbsp; {data.Type}
            <div style={row}>
                <div style={{float:"left", width:"100px"}}>Max</div>
                <div style={{float:"left", width:"160px"}}>
                  
               
                    {max}
                    </div>
                </div>
            <div style={row}>
            <div style={{float:"left", width:"100px"}}>Left</div>
                <div style={{float:"left", width:"160px"}}>{left}</div>
            </div>
           
        </div>
    )
}
const ComponentStyle = {
    marginLeft: "30px",
  border: "3px solid #660308",
  height: "240px",
  width: "300px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  marginTop:"20px"
}

const row ={
    fontSize:"45px",
    backgroundColor:"rgba(0,0,0,0.1)",
    margin:"5px",
}