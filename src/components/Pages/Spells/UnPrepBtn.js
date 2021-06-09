import React,{useState} from 'react'
import { AiOutlineMinusCircle } from "react-icons/ai";
export default function UnPrepBtn({onClick}) {
    const [minusHover, setMinusHover] = useState(false);
    return (
        <button
        onMouseEnter={() => {setMinusHover(true)}}
        onMouseLeave={() => {setMinusHover(false)}}
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
          backgroundColor:minusHover ? "red" : "transparent"
          }}
      >
        <AiOutlineMinusCircle />
      </button>
    )
}
