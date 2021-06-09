import React from 'react'
import DynamicFont from '../../../SharedComponents/DynamicFont'
import DelButton from '../../../SharedComponents/DelButton'
export default function WeaponRow({data,setData,dataKey}) {
   const delFunc = () => {
       let weaponArray =[];
       for(let weapon in data)if(weapon != dataKey) weaponArray.push(data[weapon])
       
       setData(weaponArray)
   }
    return (
        <div style={ComponentStyle}>
            <div style={{...rowStyle,flex:4 }}><DynamicFont maxFontSize="40" width="285">{data[dataKey].Name}</DynamicFont></div>
            <div style={{...rowStyle,flex:1 }}><DynamicFont maxFontSize="40" width="70">{data[dataKey].Hit}</DynamicFont></div>
            <div style={{...rowStyle,flex:4 }}><DynamicFont maxFontSize="40" width="285">{data[dataKey].Damage}</DynamicFont></div>
            <div style={{...rowStyle,flex:4 }}><DynamicFont maxFontSize="40" width="285">{data[dataKey].Notes}</DynamicFont></div>
            <div style={{...rowStyle,flex:1 }}><DelButton delFunc={delFunc}/></div>
        
        </div>
    )
}
const ComponentStyle = {
    display:"flex",
    width:"1000px",
    fontSize:"40px",
    margin:"3px",
    border:"1px solid #660308",
    borderRadius:"15px"
}

const rowStyle = {
   textAlign:"center",
    backgroundColor:"rgba(0,0,0,0.1)",
}