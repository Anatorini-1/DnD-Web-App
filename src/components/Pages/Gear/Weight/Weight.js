import React, { useRef } from "react";
import Input from "../../../SharedComponents/Input";
export default function Weight({ data, itemData, setData }) {
  const field1Ref = useRef(null);
  let carried = 0;
  //console.log(itemData);
  for (let item in itemData) {
    carried += Number(
      Number(itemData[item].Weight) * Number(itemData[item].Quantity)
    );
    //console.log(carried);
  }
  return (
    <div key={"weightContainer"} style={ComponentStyle}>
      <table style={{ width: "400px" }}>
        <tbody>
          <tr>
            <td>Weight</td>
            <td style={rowStyle}>
              Carried:{" "}
              <span
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  display: "inline-block",
                  border: "2px solid #660308",
                  borderRadius: "15px",
                  padding: "5px",
                  marginLeft: "20px",
                }}
              >
                {carried}
              </span>
            </td>
          </tr>
          <tr>
            <td style={rowStyle}>
              Encumbered{" "}
              <Input
                value={data.Encumbered}
                onChange={(e) =>
                  setData({ ...data, Encumbered: e.target.value })
                }
                focusKey="encumberedInput"
              />
            </td>
            <td style={rowStyle}>
              Lift/Drag
              <Input
                value={data["Push/Drag/Lift"]}
                onChange={(e) =>setData({ ...data, "Push/Drag/Lift": e.target.value })}
                focusKey={"Push/Drag/LiftInput"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const ComponentStyle = {
  marginLeft: "30px",
  marginTop: "30px",
  border: "3px solid #660308",
  minHeight: "170px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  paddingLeft: "40px",
};

const rowStyle = {
  border: "3px solid #660308",
  borderRadius: "20px",
  padding: "10px",
  height: "20px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  fontSize: "30px",
  width: "100px",
  textAlign: "center",
};
