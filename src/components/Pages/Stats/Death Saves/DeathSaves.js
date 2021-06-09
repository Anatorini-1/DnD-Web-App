import { MdHealing } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import { FaSkull } from "react-icons/fa";
import {VscDebugRestart} from 'react-icons/vsc'
import React from "react";

export default function DeathSaves({data,setData}) {

   
    const resetFile = () => {
       
        setData({Success:0, Fail:0})
    }
    var success = [
        (<span key = {1} style={{...iconStyle, backgroundColor:data.Success > 0 ? "#90EE90":"transparent"}}><MdHealing /></span>),
        (<span key = {2} style={{...iconStyle, backgroundColor:data.Success > 1 ? "#90EE90":"transparent"}}><MdHealing /></span>),
        (<span key = {3} style={{...iconStyle, backgroundColor:data.Success > 2 ? "#90EE90":"transparent"}}><MdHealing /></span>)
    ];
    var fail = [
        (<span key = {1} style={{...iconStyle, backgroundColor:data.Fail > 0 ? "red":"transparent"}}><FaSkullCrossbones /></span>),
        (<span key = {2} style={{...iconStyle, backgroundColor:data.Fail > 1 ? "red":"transparent"}}><FaSkullCrossbones /></span>),
        (<span key = {3} style={{...iconStyle, backgroundColor:data.Fail > 2 ? "red":"transparent"}}><FaSkullCrossbones /></span>)
    ];
  return (
    <>
      <div style={deathSavesStyle}>
        Death Saves
        <div style={{ fontSize: "35px", margin: "5px" }}>
          <span style={{display:"inline-block", width:"80px"}}>Success:</span>
          {success}
          <button style={changeButton}  onClick={() => {setData({...data, Success:++data.Success})}}>
            <GiHealthNormal />
          </button>
        </div>
        <div style={{ fontSize: "35px", margin: "5px" }}>
        <span style={{display:"inline-block", width:"80px"}}>Fail: </span>
          {fail}
          <button style={changeButton} onClick={() => {setData({...data, Fail:++data.Fail})}}>
            <FaSkull />
          </button>
        </div>
        <button onClick={(e) => {resetFile()}} style={resetButton}>Reset <VscDebugRestart /> </button>
      </div>
    </>
   
  );
}
const deathSavesStyle = {
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
 
};
const iconStyle = {
    width:"40px",
    height:"40px",
    borderRadius:"10px",
    textAlign:"center",
    border:"2px solid #660308",
    margin:"4px",
    display:"inline-block"
}

const changeButton = {
    width:"33px",
    height:"33px",
    position:"relative",
    top:"-10px",
    right:"-10px",
    borderRadius:"10px",
    border:"2px solid black",
    cursor:"pointer"
}

const resetButton = {
    width:"100px",
    fontSize:"30px",
    fontWeight:"bold",
   borderRadius:"10px",
    cursor:"pointer",
    display:"block",
    margin:"0 auto"
}