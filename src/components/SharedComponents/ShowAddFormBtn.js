import React,{useState} from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
export default function ShowAddFormBtn({show,setShow}) {
    return (
        <button
        onClick={(e) => setShow(!show)}
        style={{
          fontSize: "40px",
          height: "50px",
          lineHeight: "50px",
          borderRadius: "15px",
          backgroundColor: show
            ? "rgb(255,255,100)"
            : "rgb(120,255,120)",
          border: "2px solid black",
          position: "relative",
          top: "-6px",
        }}
      >
        <AiFillPlusCircle />
      </button>
    )
}
