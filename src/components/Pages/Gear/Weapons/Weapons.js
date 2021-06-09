import React, { useState } from "react";
import WeaponRow from "./WeaponRow";
import ShowAddForm from "../../../SharedComponents/ShowAddFormBtn";
import {FiSave} from 'react-icons/fi'
export default function Weapons({ data, setData }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newWeapon,setNewWeapon] = useState({})
  let rows = [];
  const addNewWeapon = () => { 
        let weaponArray =[];
        for(let weapon in data) weaponArray.push(data[weapon])
        if(newWeapon.Name && newWeapon.Hit && newWeapon.Damage){
            weaponArray.push(newWeapon)
            setData(weaponArray)
        }
       
        //console.log(weaponArray)
      
    
  }
  let addDiv = {
    display: "flex",
    width: "1000px",
    fontSize: "40px",
    margin: "3px",
    border: "1px solid #660308",
    borderRadius: "15px",
    backgroundColor:"rgba(0,255,0,0.8)"
  };
  let addRowStyle = {
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    lineHeight: "100%",
  };
  let addinputStyle = {
    width: "85%",
    height: "40px",
    margin: "5px 0 5px 0",
    width: "85%",
    height: "40px",
    marginBottom: "5px",
    border:"1px solid black",
    borderRadius:'10px',
    fontSize:'40px',
    fontWeight:"bold",
    paddingLeft:"10px"
  };

  let addForm = (
    <div style={addDiv}>
      <div style={{ ...addRowStyle, flex: 4 }}>
        <input value={newWeapon.Name ?? ""} onChange={(e) => {setNewWeapon({...newWeapon,"Name" : e.target.value})}} style={addinputStyle} />
      </div>
      <div style={{ ...addRowStyle, flex: 1 }}>
        <input  value={newWeapon.Hit ?? ""} onChange={(e) => {setNewWeapon({...newWeapon,"Hit" : e.target.value})}} style={addinputStyle} />
      </div>
      <div style={{ ...addRowStyle, flex: 4 }}>
        <input  value={newWeapon.Damage ?? ""} onChange={(e) => {setNewWeapon({...newWeapon,"Damage" : e.target.value})}} style={addinputStyle} />
      </div>
      <div style={{ ...addRowStyle, flex: 4 }}>
        <input  value={newWeapon.Notes ?? ""} onChange={(e) => {setNewWeapon({...newWeapon,"Notes" : e.target.value})}} style={addinputStyle} />
      </div>
      <div style={{ ...addRowStyle, flex: 1 }}>
          <button onClick={() => {addNewWeapon()}} style={{
            position: "relative",
            top: "5px",
            fontSize: "40px",
            height: "40px",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            backgroundColor:"transparent"
          }}><FiSave /></button>
      </div>
    </div>
  );
  for (let row in data)
    rows.push(
      <WeaponRow data={data} setData={setData} key={row} dataKey={row} />
    );

  return (
    <div style={ComponentStyle}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, textAlign: "left" }}>Weapons</div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <ShowAddForm show={showAddForm} setShow={setShowAddForm} />
        </div>
      </div>
      <div style={{ display: "flex", fontSize: "30px" }}>
        <div style={{ flex: 4, textAlign: "center" }}>Name</div>
        <div style={{ flex: 1, textAlign: "center" }}>Hit +</div>
        <div style={{ flex: 4, textAlign: "center" }}>Dmg </div>
        <div style={{ flex: 4, textAlign: "center" }}>Notes</div>
        <div style={{ flex: 1, textAlign: "center" }}></div>
      </div>
      {showAddForm ? addForm : ""}
      {rows}
    </div>
  );
}
const ComponentStyle = {
  marginLeft: "30px",
  marginTop: "10px",
  border: "3px solid #660308",
  minHeight: "270px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
}
