import React, { useState, useEffect } from "react";
import Metadata from "./Metadata";
import PreparedSpells from "./PreparedSpells";
import SpellSlots from "./SpellSlots";
export default function Spells({
  data = {},
  setData,
  baseStats = {},
  spellData = {},
}) {
  const unPrepareSpell = (x) => {
    //console.log(x,data)
    let leNew = {...data};
    delete leNew['Prepared'];
    leNew['Prepared'] = x;
    console.log(leNew);
    setData(leNew);
  };
  return (
    <div className="noScroll" style={ComponentStyle}>
      <SpellSlots
        data={data["Spell Slots"] ?? {}}
        setData={(x) => {
          setData({ ...data, ["Spell Slots"]: x });
        }}
      />
      <div>
        <Metadata data={data["Metadata"] ?? {}} baseStats={baseStats} />
        <PreparedSpells
          spellData={spellData}
          data={data["Prepared"]}
          setData={unPrepareSpell}
        />
      </div>
    </div>
  );
}
const ComponentStyle = {
  display: "flex",
  position: "relative",
};
