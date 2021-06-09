import React from "react";
import Input from "../../../SharedComponents/Input"
export default function SavingThrowRow({
  profficiencyBonus,
  parentStat,
  label,
  isProfficient,
  data,
  setData,
  showEdit,
}) {
    const inputStyle={
        backgroundColor: isProfficient > 0 ? "lightgreen" : "lightgrey",
        width: "30px",
        height: "30px",
        borderRadius: "5px",
        border: "1px solid black",
        margin: "2px",
        fontWeight: "bold",
        fontSize: "30px",
    }
  return (
    <div style={ComponentStyle}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "2" }}> {label}</div>

        <div style={{ flex: "1", display: "flex", textAlign: "right" }}>
          {showEdit ? (
            <div key = {label+"123"} style={{ flex: "1", textAlign: "center" }}>
                <Input focusKey={label} type="text" value={isProfficient} style={{...inputStyle,backgroundColor:"white"}} onChange={(e) => {
                    setData({...data, [label] : e.target.value})
                }}/>
            </div>
          ) : (
            ""
          )}
          <div style={{ flex: "1" }}>
            <input
              type="text"
              style={inputStyle}
              value={String(
                Math.floor((parentStat - 10) / 2) +
                  profficiencyBonus * isProfficient
              )}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const ComponentStyle = {
  color: "#660308",
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "250px",
  marginBottom: "20px",
  border: "3px solid #660308",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "30px",
  padding: "5px",
};

