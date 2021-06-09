import React from "react";
import $ from "jquery";
import {useState,useEffect} from 'react'
import {MdPermIdentity} from 'react-icons/md'
import SaveButton from "../../SharedComponents/SaveButton";
import Labeled_Field from "./Labeled_Field";
import DnDBackground from "../../img/app/name.jpg"
function Name({data,inputHandler,setLogged}) {
  return (
    <div style={ComponentStyle}>
      <div style={nameTableStyle}>
        <MdPermIdentity onClick = {(() => {setLogged(false)})} style={tableIconStyle}/>
        <Labeled_Field onChange={inputHandler} label="Player" data={data} />
        <Labeled_Field onChange={inputHandler} label="Character" data={data} />
      
      </div>
    </div>
  );
}

const nameTableStyle = {
  width:"285px",
  height:"180px",
  backgroundColor:"red",
  marginLeft:"20px",
  borderRadius:"20px",
  backgroundColor:"rgba(0,0,0,0.1)",
  border:"3px solid black",
  position:"relative"
}

const tableIconStyle ={
  fontSize:"60px",
  backgroundColor:"black",
  color:"white",
  borderRadius:"40px",
  padding:"5px",
  position:"absolute",
  left:"-30px",
  top:"50px",
  cursor:"pointer"
}

const ComponentStyle = {
  backgroundImage:`url(${DnDBackground})`,
  width: "490px",
  height: "180px",
  backgroundRepeat:"no-repeat",
  backgroundPositionY:"30px",
  backgroundSize: "450px",
  position: "relative",
  left:"50px",
  borderBottomLeftRadius: "16px",
  fontSize: "15px",
  padding: "3px",
  boxSizing: "border-box",
  float:"left",
  backgroundColor:"#660308",
};

export default Name;
/*

import React from "react";
import { useState, useEffect } from "react";
import SaveButton from "../../SharedComponents/SaveButton";
import Labeled_Field from "./Labeled_Field";
import $ from "jquery";

function NameForm({data,setStatFunc}) {
  const [names,setNames] = useState({
    player:"Marek",
    character:"Gay"
  })
  const saveNames = (x) => {
    $.ajax({
      url:
        "http://localhost/React/react-karta-backend/processing/changeName.php",
      method: "post",
      async: false,
      dataType: "text",
      success: (data) => {
        alert(data);
      },
      data: {
        playerName: names.player,
        characterName: names.character,
      },
    });
  };
 
  return (
    <div style={ComponentStyle}>
      <div style={{ flex: "1" }}>
        <Labeled_Field label={"Player Name"} value={names.player} onChange={(e) => {setNames({player:e.target.value, character:names.character})}}/>
        <Labeled_Field label={"Character Name"} value={names.character}/>
      
      </div>
      <div style={{ flex: "1" }}>
        <SaveButton onClick={saveNames} />
      </div>
    </div>
  );
}
const ComponentStyle = {
  display: "flex",
  width: "300px",
  marginLeft:"20px",
  marginTop:"10px"
};
const inputStyle = {
  height: "30px",
  backgroundColor: "#6e6e70",
  border: "2px solid black",
  borderRadius: "10px",
  fontFamily: "Verdana",
  fontWeight: "bold",
};

const h3Style = {
  margin: "0px",
};

export default NameForm;

*/ 