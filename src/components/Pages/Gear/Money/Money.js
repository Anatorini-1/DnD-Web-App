import React from "react";
import Converter from "./Converter";
import Payment from "./Payment";
import Wallet from "./Wallet";

export default function Money({ data, setData }) {
  return (
    <div style={ComponentStyle}>
      <div style={{ display: "flex" }}>
        <div style={{display:"flex"}}>
          <Wallet data={data} setData={setData} />
          <Converter data={data} setData={setData} />
        </div>
       
      </div>
      <div>
          
          <Payment data={data} setData={setData} />
        </div>
    </div>
  );
}

const ComponentStyle = {
  marginLeft: "30px",
  border: "3px solid #660308",
  height: "500px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  width: "500px",
  overflowY: "scroll",
};
