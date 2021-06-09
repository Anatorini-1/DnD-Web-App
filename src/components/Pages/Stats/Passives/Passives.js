import React from "react";
import PassiveRow from './PassiveRow'

export default function Passives({ data, setData,initiativeBase }) {
  const inputHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
    console.log(data)
  }

  return (
    <>
    <div style={tableStyle}>
      Passives
     <PassiveRow inputHandler={inputHandler} label="Armor Class" value={data['Armor Class']}/>
     <PassiveRow inputHandler={inputHandler} label="Initiative Bonus" value={Number(initiativeBase) + Number(data['Initiative Bonus'])}/>
     <PassiveRow inputHandler={inputHandler} label="Speed" value={data['Speed']}/>
     <PassiveRow inputHandler={inputHandler} label="Dark Vision" value={data['Dark Vision']}/>
    
     <PassiveRow inputHandler={inputHandler} label="Proficiency Bonus" value={data['Proficiency Bonus']}/>
    </div>
   
    </>
  );
}
const tableStyle = {
  marginLeft: "30px",
  border: "3px solid #660308",
  height: "550px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
};



