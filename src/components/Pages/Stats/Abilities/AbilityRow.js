import React,{useState,useEffect} from "react";
import Edit from './EditAbility'

export default function AbilityRow({data = {}, profBonus = 0, setData ,allAbilities,showEdit}) {

   
  const inputStyle = {
    backgroundColor: data.proficiency ? "lightgreen" : "lightgrey",
    width:"30px",
    height:"30px",
    borderRadius:"5px",
    border:"1px solid black",
    margin:"2px",
    fontWeight:"bold",
    fontSize:"30px"
  };
  const ComponentStyle = {
    fontSize: "25px",
    width: "230px",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: "5px",
    marginLeft: "5px",
    color:"black",
    fontWeight:"bold",
    borderRadius:"4px",
    padding:"1px",
    transition:"1s ease all"
  };

  return (
    <div style={ComponentStyle}>
     
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }}>{data.label}</div>
        <div style={{ flex: 1, textAlign:"right",paddingRight:"20px" }}>
          <input style={inputStyle} type="text" readOnly value={
              Number(Math.floor((data['parentStat']-10)/2)
              + Number(profBonus)*Number(data.proficiency)
              + Number(data.expertise)*Number(profBonus)
              +Number(data.bonus)) 
          } />
        </div>
      
      </div>
      {showEdit ? <Edit data={data} setData={setData}  /> : "" }
    </div>
  );
}
