import React, {useState} from "react";

import SpellDetail from './SpellDetail'

import { BiDetail } from "react-icons/bi";

export default function Spell({  data, dataKey,  action,id }) {
    const [detailHover, setDetailHover] = useState(false);
    
    const [showDetail, setShowDetail] = useState(false);
    const handleDetail = () => {
        setShowDetail(!showDetail)
    }
   
  return (
    <div style={{...ComponentStyle}} id={id}>
      <SpellDetail hide={handleDetail} show={showDetail} data={data} dataKey={dataKey}/>
      <div style={{ ...tdStyle, borderTopRightRadius: "20px" }}>
        {data[dataKey]["name"]}
      </div>
      <div style={{ ...tdStyle }}>{data[dataKey]["components"]}</div>
      <div style={{ ...tdStyle }}>{data[dataKey]["range"]}</div>
      <div style={{ ...tdStyle }}>{data[dataKey]["duration"]}</div>
      <div style={{ ...tdStyle }}>{data[dataKey]["school"]}</div>
      <div style={{ ...tdStyle }}>{data[dataKey]["concentration"]}</div>
      <div style={{ ...tdStyle }}>
        <button
           onMouseEnter={() => {setDetailHover(true)}}
           onMouseLeave={() => {setDetailHover(false)}}
           onClick={() => {handleDetail()}}
           style={{
                ...buttonStyle,
             backgroundColor:detailHover ? "lightblue" : "transparent"
             }}
        >
          <BiDetail />
        </button>
        {action}
      </div>
    </div>
  );
}
const tdStyle = {
  width: `${100 / 7}%`,
  textAlign: "center",

  fontSize: "35px",
  flex: 1,
};
const ComponentStyle = {
  display: "flex",
  width: "100%",
  border: "3px solid #660308",
  marginBottom: "5px",
  borderRadius: "15px",
  backgroundColor: "rgba(255,255,255,0.3)",
  padding: "5px",
  fontWeight:"bold",
  transition:"1s ease all"
};
const buttonStyle = {
  color: "black",
  cursor: "pointer",
  backgroundColor:"transparent",
  border:"none",
  fontSize:"35px",
  borderRadius:"35px",
  lineHeight:"35px",
  padding:"0",
  margin:"5px",
  height:"36px"
};
