import React from "react";
import DataRow from "./DataRow";

import Input from "../../../SharedComponents/Input"
export default function BaseStats({ data, setData }) {
  let stats = [];

  for (let stat in data) {
    let statVal = data[stat]
    let statMod = Math.floor((statVal-10)/2);
    statMod = statMod > 0 ? `+${statMod}` : statMod==0 ? statMod : `-${statMod}`;
    stats.push(
      <DataRow
        label={stat}
        key={stat}
        style
        field1={
          <Input
          focusKey={`${stat}Input`}
            style={{
              width: "35px",
              margin: "0",
              padding: "0",
              height: "35px",
              fontSize: "35px",
              fontWeight: "bold",
              position: "relative",
              top: "-10px",
              textAlign: "center",
              backgroundColor:"lightgray",
              border:"1px solid black",
              borderRadius:"5px"
            }}
            
            value={statVal}
            name={stat}
            onChange={(e) => setData({...data, [e.target.name] : e.target.value})}
          />
        }
        field2={
          <input
            style={{
              width: "35px",
              margin: "0",
              padding: "0",
              height: "35px",
              fontSize: "35px",
              fontWeight: "bold",
              position: "relative",
              top: "-10px",
              textAlign: "center",
              backgroundColor:"lightgray",
              border:"1px solid black",
              borderRadius:"5px"
            }}
            type="text"
            value={statMod}
            readOnly
          />
        }
      />
    );
  }
  return <div>{stats}</div>;
}
