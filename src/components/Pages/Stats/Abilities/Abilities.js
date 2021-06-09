import React, { useState, useEffect } from "react";
import ShowEdit from "../../../SharedComponents/OpenEditMode"
import AbilityRow from "./AbilityRow";
import { BiEdit } from "react-icons/bi";
export default function Abilities({
  profficiency,
  data,
  setData,
  baseStats,
  showEdit,
  setShowEdit,
}) {
  let abilitiesAlphabetical = [];
  for (let abilityGroup in data) {
    for (let ability in data[abilityGroup])
      abilitiesAlphabetical.push({
        label: ability,
        parentStat: baseStats[abilityGroup],
        ...data[abilityGroup][ability],
      });
  }
  abilitiesAlphabetical.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });
  //console.log(abilitiesAlphabetical)
  let abilitiesToShow = [];
  for (let ab in abilitiesAlphabetical)
    abilitiesToShow.push(
      <AbilityRow
        showEdit={showEdit}
        key={ab}
        setData={setData}
        allAbilities={data}
        data={abilitiesAlphabetical[ab]}
        profBonus={profficiency}
      />
    );
  // console.log(abilitiesToShow);
  return (
    <div style={ComponentStyle} className="noScroll">
      <span style={{ fontWeight: "bold" }}>Abilities</span>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
     <ShowEdit show={showEdit} setShow={setShowEdit} localStorageKey ="showEdit" />
      {abilitiesToShow}
    </div>
  );
}
const ComponentStyle = {
  marginLeft: "30px",
  height: "810px",
  overflowY: "scroll",
  overflowX: "hidden",
  border: "4px solid #660308",
  paddingTop: "0px",
  borderRadius: "20px",
  backgroundColor: "rgba(0,0,0,0.1)",
};
