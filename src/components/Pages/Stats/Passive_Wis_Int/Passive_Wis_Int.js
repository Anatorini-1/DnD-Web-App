import React,{useState} from "react";

import Input from "../../../SharedComponents/Input"

export default function Passive_Wis_Int({ data, baseStats,setData }) {
    const [showEdit,setShowEdit] = useState(localStorage.getItem("passiveWisIntEdit") == 'true')
    return (
    <div style={ComponentStyle}>
      <div style={rowStyle}>
        Perception <br/>
        <input name={"Perception"} readOnly value = {String(10 +Number(data['Perception'])+ Number(Math.floor((baseStats['Wisdom']-10 )/2) +Number(data['Proficiency Bonus'])))} style={inputStyle} type="text" />
        <Input focusKey={'passivePerception'} style={inputStyle} value={String(data['Perception'])} onChange={(e)=>{setData({...data, 'Perception' : e.target.value})}}/>
      </div>
      <div style={rowStyle}>
        Investigation <br/>
        <input name={"Investigation"} readOnly  value  =  {String(10 +Number(data['Investigation'])+ Number(Math.floor((baseStats['Intelligence']-10 )/2) +Number(data['Proficiency Bonus'])))} style={inputStyle} type="text" />
        <Input focusKey={'passiveInvestigation'} style={inputStyle} value={String(data['Investigation'])} onChange={(e)=>{setData({...data, 'Investigation' : e.target.value})}}/>
      </div>
      <div style={rowStyle}>
        Insight <br/>
        <input name={"Insight"} readOnly  value =  {String(10 +Number(data['Insight'])+ Number(Math.floor((baseStats['Wisdom']-10 )/2) +Number(data['Proficiency Bonus'])))} style={inputStyle} type="text" />
        <Input focusKey={'passiveInsight'} style={inputStyle} value={String(data['Insight'])} onChange={(e)=>{setData({...data, 'Insight' : e.target.value})}}/>
      </div>
    </div>
  );
}
const ComponentStyle = {
  marginTop: "30px",
  border: "4px solid #660308",
  height: "250px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  fontSize: "30px",
};
const rowStyle = {
  height: "30%",
  textAlign: "center",
  marginBottom:"10px"
};
const inputStyle = {
    width:"50px",
    height:"40px",
    position:"relative",
    top:"-5px",
    border:"1px solid black",
    backgroundColor:"lightgrey",
    borderRadius:"10px",
    fontSize:"40px",
    fontWeight:"bold",
    textAlign:"center",
    marginRight:"5px"
}