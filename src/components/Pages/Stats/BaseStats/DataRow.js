import React from "react";

export default function DataRow({ icon, label, style, field1, field2 }) {

  return (
    <div style={{ ...ComponentStyle, ...style }}>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td colSpan={2}>{label}</td>
          </tr>
          <tr>
            <td style={{ width: "50px" }}>{field1}</td>
            <td style={{ width: "50px" }}>{field2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const ComponentStyle = {
  width: "150px",
  height: "80px",
  border: "4px solid #660308",
  borderRadius: "15px",
  fontSize: "30px",
  textAlign: "center",
  marginBottom: "10px",
  fontWeight: "bold",
  backgroundColor: "rgba(0,0,0,0.1)",
  position: "relative",
};

const tableStyle = {
  width: "100%",
};

const iconStyle = {
  width: "40px",
  position: "absolute",
  left: "-20px",
  top: "-20px",
};
