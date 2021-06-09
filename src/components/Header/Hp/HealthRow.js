import React from "react";
import { MdHealing } from "react-icons/md";
import { GiBloodySword } from "react-icons/gi";
import { useState } from "react";
function HealthRow({ label, data, inputHandler }) {
  const [addSub, setAddSubValue] = useState(1);
  const [addHover, setAddHover] = useState(false);
  const [subHover, setSubHover] = useState(false);
  const addHp = (field) => {
    inputHandler({
        name:field,
        value:data[field]+Math.abs(Number(addSub))
    })
  }
  const subHp = (field) => {
    inputHandler({
        name:field,
        value:data[field]+ -1 * Math.abs(Number(addSub))
    })
  }
  return (
    <div style={ComponentStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{data[label]}</div>
      <div style={actionsStyle}>
        <button
          value={addSub}
          onClick = {(e) => {addHp(label)}}
          style={{
            ...actionIconStyle,
            backgroundColor: addHover ? "rgba(0,255,0,0.4)" : "transparent",
          }}
        >
          <span>
            <MdHealing
              style={{ position: "relative", zIndex: "1" }}
              onMouseEnter={() => setAddHover(!addHover)}
              onMouseLeave={() => setAddHover(!addHover)}
            />
          </span>
        </button>
        <input
          type="number"
          value={addSub}
          onChange={(e) => setAddSubValue(e.target.value)}
          style={addSubValueStyle}
        />
        <button
          value={addSub}
          onClick={(e) => {subHp(label)}}
          style={{
            ...actionIconStyle,
            backgroundColor: subHover ? "rgba(255,0,0,0.4)" : "transparent",
          }}
        >
          <GiBloodySword
            style={{ position: "relative", zIndex: "1" }}
            onMouseEnter={() => setSubHover(!subHover)}
            onMouseLeave={() => setSubHover(!subHover)}
          />
        </button>
      </div>
    </div>
  );
}

HealthRow.defaultProps = {
  label: "HP",
  data: {},
  onAdd: (e) => {
    alert(e.target.value);
  },
};

const actionIconStyle = {
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "50px ",
  padding: "0",
  border: "0",
  height: "50px",
  position: "relative",
  zIndex: "5",
};

const ComponentStyle = {
  width: "400px",
  height: "57px",
  display: "flex",
  marginBottom: "1px",
};

const valueStyle = {
  fontSize: "52px",
  border: "3px solid black",
  borderRadius: "10px",
  flex: "2",
  margin: " 0 30px 0 30px",
  textAlign: "center",
  paddingTop: "0",
  backgroundColor: "rgba(255,255,255,0.2)",
  lineHeight: "53px",
};

const addSubValueStyle = {
  width: "50px",
  height: "100%",
  position: "relative",
  top: "-3px",
  padding: "0",
  margin: "0",
  borderRadius: "10px",
  fontSize: "52px",
  textAlign: "center",
  backgroundColor: "#6e6e70",
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: "40px",
  flex: "5",
};

const actionsStyle = {
  flex: "6",
  fontSize: "50px ",
  letterSpacing: "20px",
};

export default HealthRow;
