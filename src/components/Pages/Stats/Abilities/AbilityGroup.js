import React from 'react'
import AbilityRow from './AbilityRow'

export default function AbilityGroup({parentStat,profficiency ,label, data}) {
    let abilities = [];
    for(let ability in data){
        abilities.push((
            <AbilityRow key={ability} parentStat = {parentStat} profficiency={profficiency} label={ability} data={data[ability]}/>
        ))
    }
    return (
        <div style={ComponentStyle}>
            {label}
            {abilities}
        </div>
    )
}
const ComponentStyle = {
    color:"#660308",
    backgroundColor:"rgba(0,0,0,0.1)",
    width:"240px",
   marginBottom:"20px",
   border:"3px solid #660308",
   borderRadius:"12px",
   fontWeight:"bold",
   fontSize:"30px",
   padding:"5px"
  
}