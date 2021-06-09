import React,{useState} from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
export default function PrepBtn({onClick}) {
    const [hover, setHover] = useState(false);
    return (
        <button
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
        onClick={() => {onClick()}}
        style={{
            color: "black",
            cursor: "pointer",
            backgroundColor:"transparent",
            border:"none",
            fontSize:"35px",
            borderRadius:"35px",
            lineHeight:"35px",
            padding:"0",
            margin:"5px",
            height:"36px",
          backgroundColor:hover ? "limegreen" : "transparent"
          }}
      >
        <AiOutlinePlusCircle />
      </button>
    )
}
