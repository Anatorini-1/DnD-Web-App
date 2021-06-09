import React from "react";

export default function Metadata({ data, setData, baseStats }) {
  return (
    <div style={ComponentStyle}>
      <div style={itemStyle}>
        Class: <br /> {data.Class}
      </div>
      <div style={itemStyle}>
        Caster Level: <br /> {data["Spell Level"]}
      </div>
      <div style={itemStyle}>
        Spellcasting Ability: <br /> {data["Spellcasting Ability"]}
      </div>
      <div style={itemStyle}>
        Spell Save DC:
        <br />
        {10 + Math.floor((baseStats['Base Stats'][data["Spellcasting Ability"]] - 10) / 2)}
      </div>
      <div style={itemStyle}>
        Spell Hit Bonus: <br />{"+"}
        {Math.floor((baseStats['Base Stats'][data["Spellcasting Ability"]] - 10) / 2) +
          Number(baseStats['Passives']["Proficiency Bonus"])}
      </div>
    </div>
  );
}
const ComponentStyle = {
  marginLeft: "30px",

  height: "140px",
  width: "1300px",
  borderRadius: "20px",
  paddingBottom: "10px",
  paddingTop: "10px",
  color: "black",
  fontWeight: "bold",
  display: "flex",
};

const itemStyle = {
  flex: 1,
  fontSize: "40px",
  border: "3px solid #660308",
  backgroundColor: "rgba(0,0,0,0.1)",
  padding: "5px",
  borderRadius: "20px",
  margin: "6px",
  textAlign: "center",
};
