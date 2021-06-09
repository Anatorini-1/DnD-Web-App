import React, { useState, useRef, useEffect } from "react";

export default function Input({ value, onChange, style, focusKey,name,type }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem(focusKey) == "true") inputRef.current.focus();
  }, [value]);

  return (
    <>
      <input
        ref={inputRef}
        onFocus={() => localStorage.setItem(focusKey, "true")}
        onBlur={() => localStorage.removeItem(focusKey)}
        name={name}
        type={type}
        style={{
          backgroundColor: "rgba(255,255,255,0.3)",
          
          border: "2px solid #660308",
          borderRadius: "15px",
          padding: "5px",
          fontSize: "35px",
          fontWeight: "bold",
          width: "50px",
          ...style,
        }}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
