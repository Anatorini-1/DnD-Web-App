import React, { useState, useEffect } from "react";
import SpellList from "./SpellList";
import Criteria from "./Criteria";

export default function Spell_Database({data,prepareSpell}) {
 
  let defaultFilters =JSON.parse(localStorage.getItem("filters"));

  const [filters,setFilters] = useState(
      defaultFilters == undefined ? 
      {
      name:"",
      class:"Cleric",
      level:"0",
      range: "All",
      components: "All",
      concentration:"All",
      ritual: "All",
      casting_time: "All",
      school: "All",
  } : defaultFilters)
  useEffect(() => {
      localStorage.setItem("filters", JSON.stringify(filters))
  }, [filters])
  

  return (
    <div>
      <div style={titleStyle}>Spell Database</div>
      <div style={ComponentStyle}>
        <Criteria filters = {filters} setFilters = {setFilters} data={data} />
        <SpellList filters={filters} data={data} prepareSpell={prepareSpell} />
      </div>
    </div>
  );
}
const ComponentStyle = {
  display: "flex",
};
const titleStyle = {
  textAlign: "center",
  fontWeight: "bold",
  width: "100%",
};
