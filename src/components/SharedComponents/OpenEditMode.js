import React from 'react'
import { BiEdit } from "react-icons/bi";
function OpenEditMode({show,setShow,localStorageKey}) {
    return (
        <span
       
        onClick={() => {
          localStorage.setItem(localStorageKey, !show);
          setShow(!show);
        }}
        style={{ fontSize: "40px" }}
      >
        <BiEdit />
      </span>
    )
}

export default OpenEditMode
