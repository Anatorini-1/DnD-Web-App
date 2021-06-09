import React from 'react'
import Group from './TraitsGroup'

export default function Traits({data}) {
    
    let groups = [];
for(let group in data){
    groups.push(<Group data={data[group]} label={group} key={group}/>)
}
    return (
        <div style={ComponentStyle}>
            {groups}
        </div>
    )
}
const ComponentStyle ={
   
}