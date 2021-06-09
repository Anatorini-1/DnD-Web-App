import React from 'react'
import SpellSlot from './SpellSlot'
export default function SpellSlots({data,setData}) {
    let slots = [];
    for (let slot in data){
        slots.push(<SpellSlot data={data} key={slot} dataKey={slot} setData={setData}/>)
    }
    return (
        <div style={ComponentStyle}>
            Spell Slots
            {slots}
        </div>
    )
}
const ComponentStyle = {
    marginLeft: "30px",
    marginTop: "10px",
    border: "3px solid #660308",
    height: "790px",
    width:"200px",
    borderRadius: "20px",
    padding: "10px",
    backgroundColor: "rgba(0,0,0,0.1)",
    color: "black",
    fontWeight: "bold",
}