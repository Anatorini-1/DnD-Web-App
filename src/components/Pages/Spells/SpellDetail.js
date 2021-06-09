import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function SpellDetail({ show, hide, data, dataKey }) {
  let htmlKEKW = { __html: data[dataKey]["desc"] };
  let higherLevelKEKW = {__html : data[dataKey]["higher_level"]}
  return (
    <div style={{ ...detailDiv, display: show ? "block" : "none" }}>
      <button
        style={hideDetail}
        onClick={() => {
          hide();
        }}
      >
        <AiOutlineCloseCircle />
      </button>
      <table
        style={{ width: "95%", fontSize: "50px", borderSpacing:"0 5px" }}
       
      >
        <tbody>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Name</td>
            <td style={{ ...td2Style }}>{data[dataKey]["name"]}</td>
            <td
              dangerouslySetInnerHTML={htmlKEKW}
              style={{ ...td3Style }}
              rowSpan="12"
            ></td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Range</td>
            <td style={{ ...td2Style }}>{data[dataKey]["range"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Components</td>
            <td style={{ ...td2Style }}>{data[dataKey]["components"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Material</td>
            <td style={{ ...td2Style }}>{data[dataKey]["material"] ?? "- - - - -"}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Ritual</td>
            <td style={{ ...td2Style }}>{data[dataKey]["ritual"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Duration</td>
            <td style={{ ...td2Style }}>{data[dataKey]["duration"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Concentration</td>
            <td style={{ ...td2Style }}>{data[dataKey]["concentration"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Casting Time</td>
            <td style={{ ...td2Style }}>{data[dataKey]["casting_time"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Level</td>
            <td style={{ ...td2Style }}>{data[dataKey]["level"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>School</td>
            <td style={{ ...td2Style }}>{data[dataKey]["school"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Class</td>
            <td style={{ ...td2Style }}>{data[dataKey]["class"]}</td>
          </tr>
         <tr style={trStyle}>
            <td style={{ ...td1Style }}>Higher Level</td>
            <td style={{ ...td2Style }} dangerouslySetInnerHTML={higherLevelKEKW}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const detailDiv = {
  width: "100%",
  height: "100%",
  backgroundColor: "#E1D3C1",
  position: "absolute",
  top: "0%",
  left: "0",
  zIndex: "100",
  borderRadius: "20px",
  padding: "0px",
};
const hideDetail = {
  position: "absolute",
  top: "20px",
  right: "20px",
  fontSize: "50px",
  backgroundColor: "#FAEBD7",
  color: "red",
};
const td1Style = {
    backgroundColor:"rgba(255,255,255,0.1)",
    width: "20%",
    fontSize:"35px",
    borderTop:"2px solid #660308",
    borderBottom:"2px solid #660308",
    borderLeft:"2px solid #660308",
    borderTopLeftRadius:"20px",
    borderBottomLeftRadius:"20px",
};

const td2Style = {
    width: "30%",
    backgroundColor:"rgba(255,255,255,0.1)",
    borderTop:"2px solid #660308",
    borderBottom:"2px solid #660308",
    borderRight:"2px solid #660308",
    borderTopRightRadius:"20px",
    borderBottomRightRadius:"20px",
    fontSize:"30px",
    padding:"3px",
};

const td3Style = {
    padding:"10px",
    paddingTop:"50px",
    verticalAlign:"top",
  fontSize: "30px",
  
};
const trStyle = {
    
}