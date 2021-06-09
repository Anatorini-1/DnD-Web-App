import React from 'react'
import DelButton from '../../../SharedComponents/DelButton'
import DynamicFont from '../../../SharedComponents/DynamicFont'
export default function ItemRow({data,setData,dataKey}) {
    const substract = () => {
        let newData = [...data];
        newData[dataKey] = {...data[dataKey],Quantity:Number(data[dataKey].Quantity) - 1};
  
       setData(newData)
    }
    const del = () => {
        let newData = [...data];
        newData.splice(dataKey,1);
        
       setData(newData)
    }
//console.log(typeof data[dataKey].Name)

    return (
        <div style={ComponentStyle}>
            <div style={{flex:"6"}}><DynamicFont width="280" maxFontSize="30">{data[dataKey].Name}</DynamicFont></div>
            <div style={{flex:"1", textAlign:"center"}}> {data[dataKey].Quantity}</div>
            <div style={{flex:"1", textAlign:"center"}}> {data[dataKey].Weight}</div>
            <div style={{flex:"2", textAlign:"center"}}>
                 <button onClick={(e => {substract()})} style={{ position:"relative", top:"-5px",fontSize:"25px", height:"30px",fontWeight:"bold", borderRadius:"10px",border:"1px solid black",cursor:"pointer",backgroundColor:"lightblue" }}>-1</button> &nbsp; 
                <DelButton delFunc={del} />
                 </div>
           
        </div>
    )
}
const ComponentStyle = {
    height:"40px",
    backgroundColor:"rgba(0,0,0,0.1)",
    fontSize:"30px",
    display:"flex",
    flexDirection:"row",
    marginBottom:"5px",
    borderRadius:"10px",
    border:"2px solid #660308",
    padding:"3px"
}