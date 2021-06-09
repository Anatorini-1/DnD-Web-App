import React from 'react'
import { AiFillDelete } from "react-icons/ai";
export default function DelButton({delFunc}) {
    return (
        <button
          onClick={(e) => {
            delFunc();
          }}
          style={{
            position: "relative",
            top: "-5px",
            fontSize: "25px",
            height: "30px",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "1px solid black",
            cursor: "pointer",
            backgroundColor: "pink",
          }}
        >
          <AiFillDelete />
        </button>
    )
}
