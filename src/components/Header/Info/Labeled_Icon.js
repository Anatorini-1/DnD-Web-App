import React,{useEffect,useState} from "react";
import { css } from "@emotion/core";
import DynamicFont from '../../SharedComponents/DynamicFont'
function Labeled_Icon({ label, icon, subText, customLabelStyle, customSubTextStyle }) {
  const [subTextToDisplay,setSubTextToDisplay] = useState(subText)
  useEffect(() => {
    setSubTextToDisplay(subText)
  },[subText])
  return (
    <div style={ComponentStyle}>
      <div style={wrapperStyle}>
      <div style={{...labelStyle, ...customLabelStyle}}>{label}</div><br />
        <div
          style={{
            ...imgStyle,
            backgroundImage: `url("${icon}")`,
          }}
         
        >
          </div>
          <div style={{...subTextStyle, ...customSubTextStyle}}>
            <DynamicFont width="110" maxFontSize="30">
            {subTextToDisplay}
            </DynamicFont>
            </div>
       
      
    </div>
      </div>
     
  );
}

Labeled_Icon.defaultProps = {
  label: " ",
  iconPath: " wololo",
  subText: " ",
  customLabelStyle: {},
  customSubTextStyle : {}, 
};



const ComponentStyle = {
  flex: 1,
  textAlign: "center",
};

const wrapperStyle = {
  width:"150px",
  margin:"0 auto",
  position:"relative"
}
const imgStyle = {
  width: "120px",
  height: "120px",
  backgroundSize: "120px 120px",
  position:"relative",
  left:"0px",
  top:"-20px",
  
  
};


const labelStyle = {
  backgroundColor:"rgba(0,0,0,0.3)",
  display:"block",
  width:"120px",
  borderTopLeftRadius:"5px",
  borderTopRightRadius:"5px",
  fontSize:"30px",
  height:"30px",
  color:"white"
};

const subTextStyle = {
  backgroundColor:"rgba(70,0,0,1)",
  display:"block",
  width:"120px",
  position:"relative",
  top:"-30px",
  fontSize:"40px",
  fontWeight:"bold",
 borderBottomLeftRadius:"10px",
 borderBottomRightRadius:"10px",
 color:"white",
  height:"40px"
};
export default Labeled_Icon;
