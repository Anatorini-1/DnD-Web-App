import React from "react";
import Input from "../../SharedComponents/Input"
export default function ApperanceNumbers({ data, changeFunc }) {
  let rows = [];
  for (let number in data)
    rows.push(
      <div key={number}
        style={{
          display: "flex",
          width: "250px",
          borderRadius: "30px",
          border: "3px solid #660308",
          marginBottom: "10px",
        }}
      >
        <div style={{ padding: "10px", flex: 1 }}>{number}</div>
        <div style={{ padding: "10px", flex: 1 }}>
          <Input
            style={{
              fontSize: "40px",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.1)",
              border: "none",
              textAlign: "center",
              borderRadius:"10px",
              fontWeight:"bold"
            }}
            onChange={e => {
                changeFunc("Numbers",number,e.target.value )
            }}
            value={data[number]}
            focusKey={number}
          />
        </div>{" "}
      </div>
    );
  return <div style={ComponentStyle}>{rows}</div>;
}
const ComponentStyle = {
  height: "800px",
  backgroundColor: "rgba(0,0,0,0.1)",
  padding: "10px",
  borderRadius: "20px",
  
  fontWeight: "bold",
};
