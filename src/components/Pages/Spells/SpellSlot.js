import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import React, { useState, useEffect } from 'react'

export default function SpellSlot({ data, setData, dataKey }) {
    const [plusHover,setPlusHover] = useState(false)
    const [minusHover,setMinusHover] = useState(false)
    const changeValue = (operation) => {
        let newData = {...data};
        if(Number(data[dataKey]["Left"]) +Number(operation) <  0 || Number(data[dataKey]["Left"]) +Number(operation) > Number(data[dataKey]["Max"])) return false;
       
        setData({...data, [dataKey]: {...data[dataKey], "Left" : data[dataKey]["Left"] + operation} });
    }
  return (
    <div style={ComponentStyle}>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td style={{width:"33%"}}>
              <span style={{ fontWeight: "1200" }}> {dataKey}</span>
            </td>

            <td>{data[dataKey].Left}</td>
            <td>
              <button onClick={() => {changeValue(1)}} onMouseEnter={() => {setPlusHover(!plusHover)}} onMouseLeave={() => {setPlusHover(!plusHover)}} style={{fontSize:"29px",color:plusHover ? "white" : "green",   backgroundColor:plusHover ? "green" : "transparent",borderRadius:"30px" , padding:"0px", margin:"0", border:"none", height:"30px"}}><AiOutlinePlusCircle /></button>
              <button onClick={() => {changeValue(-1)}} onMouseEnter={() => {setMinusHover(!minusHover)}} onMouseLeave={() => {setMinusHover(!minusHover)}} style={{fontSize:"29px",color:minusHover ? "white" : "red",backgroundColor:minusHover ? "red" : "transparent", borderRadius:"30px" , padding:"0px", margin:"0", border:"none", height:"30px"}}><AiOutlineMinusCircle /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const ComponentStyle = {
  fontSize: "36px",
  border: "3px solid #660308",
  backgroundColor: "rgba(0,0,0,0.1)",
  padding: "5px",
  borderRadius: "20px",
  margin: "6px",
  textAlign: "left",
  marginBottom:"13px"
};
