import React, { useState, useEffect } from "react";
import Desc from "./ApperanceDesc";
import Numbers from "./ApperanceNumbers";
import Traits from "./Traits";
import Token from "./ApperanceToken"
import { ajax } from "jquery";
export default function Apperance({data = {}, setData = {}}) {
  const [apperance, setApperance] = useState({});
  const saveFieldInGroup = (group,field,value) => {
    setData({...data, [group]: {...data[group], [field]:value}});
  }
  return (
    <div style={ComponentStyle}>
        <Numbers data={data["Numbers"]} changeFunc = {saveFieldInGroup}/>
        <div>
        <Token />
        <Desc data={data["Apperance"]} />

        </div>
        <Traits data={data["Traits"]}/>
    </div>
  )

}
const ComponentStyle = {
    display:"flex"
}