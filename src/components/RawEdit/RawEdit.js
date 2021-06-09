import React from "react";
import Close from "./CloseRawEdit";
import Field from './RawEditField'
export default function RawEdit({
  setMode,
  stats,setStats,
  gear,setGear,
  features,setFeatures,
  spells,setSpells,
  apperance,setApperance,
}) {
  let fields = { stats /*, gear, features, spells, apperance*/ };
  
  return (
    <div style={ComponentStyle} className="dev">
      <Close setMode={setMode} />
        <Field setData={setStats} data={stats} label="Stats" />
        <Field setData={setGear} data={gear} label="Gear" />
        <Field setData={setFeatures} data={features} label="Features" />
        <Field setData={setSpells} data={spells} label="Spells" />
        <Field setData={setApperance} data={apperance} label="Apperance" />
    </div>
  );
}
const ComponentStyle = {
  fontSize: "30px",
  fontWeight: "bold",
};
