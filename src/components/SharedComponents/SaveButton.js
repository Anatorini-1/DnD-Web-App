import React from "react";
import {useState} from 'react'
import { FiSave } from "react-icons/fi";
function SaveButton({onClick,customStyle,hoverColor}) {
    const [hover, setHover] = useState(false);
  return (
    <>
      <FiSave
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        onClick={onClick}
        style={{
          ...SaveIconStyle,
          backgroundColor: hover && hoverColor,
          ...customStyle
        }}
      />
    </>
  );
}

SaveButton.defaultProps ={
  customStyle : {},
  hoverColor:"rgba(255,255,255,0.3)"
}

const SaveIconStyle = {
  fontSize: "40px",
  backgroundColor: "rgba(1,2,3,0)",
  borderRadius: "10px",
  marginLeft: "20px",
  marginTop: "40px",
  cursor: "pointer",
};
export default SaveButton;
