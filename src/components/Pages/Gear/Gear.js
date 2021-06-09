import React from "react";
import {useState, useEffect} from 'react'
import Magic_Items from "./Attuned Magic Items/Attuned Magic Items";
import Items from "./Items/Items";
import Money from "./Money/Money";
import Waepons from "./Weapons/Weapons";
import Weight from "./Weight/Weight";

import Loader from '../../SharedComponents/Loader'
import SaveButton from '../../SharedComponents/SaveButton'


export default function Gear({data = {},setData}) {
    
//console.log(data)
  return (
    <div style={ComponentStyle}>
      <Items data={data['Items'] ?? {}} setData={(e) => {setData({...data, 'Items' : e})}} />
      <div>

      <div style={{display:"flex"}}>
      <Money data={data['Money'] ?? {}} setData={(e) => {setData({...data, 'Money' : e})}}  />
      <div>
      <Magic_Items data={data['Attuned Magic Items']} setData={(e) => {setData({...data, 'Attuned Magic Items' : e})}}  />
      <Weight key="weight" data={data['Weight'] ?? {}} setData={(e) => {setData({...data, 'Weight' : e})}} itemData={data["Items"]} />
      </div>

      </div>
      <Waepons data={data['Weapons'] ?? {}} setData={(e) => {setData({...data, 'Weapons' : e})}}  />
      </div>
      
     
    </div>
  );
}
const ComponentStyle = {
    display: "flex",
      width: "100%",
}