import React from 'react'
import Input from "../../../SharedComponents/Input"
export default function PassiveRow({label,  value, inputHandler,readOnly}) {
    return (
        <div style={ComponentStyle}>
          {label} 
        <Input
          type="text"
          name={label}
          value={String(value) ?? ""}
          focusKey={`${label}`}
          onChange = {(e) => {inputHandler(e)}}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "5px",
            border: "1px solid black",
            margin: "2px",
            fontWeight: "bold",
            fontSize: "30px",
            marginLeft:"20px",
            position:"absolute",
            right:'8px',
            top:"15px",
            textAlign:"center",
            backgroundColor:"white",
            width:"35px"
          }}
        />
      </div>
    )
}

const ComponentStyle = {
    border:"3px solid #660308",
    borderRadius:"15px",
    padding:"5px",
    fontSize:"40px",
    backgroundColor:"rgba(0,0,0,0.1)",
    marginTop:"15px",
    position:"relative"
};