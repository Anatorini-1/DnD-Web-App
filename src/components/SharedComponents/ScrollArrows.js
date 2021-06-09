import React, { useState, useEffect } from "react";
import { BiDownArrowCircle } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import $ from 'jquery'
export default function ScrollArrows({ id }) {
  const [show, setShow] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const fontSize = 50;
  const ComponentStyle = {
    fontSize: `${fontSize}px`,
    height: `${fontSize}px`,
    borderRadius: `${fontSize}px`,
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`,
    backgroundColor: "rgb(250, 235, 215)",
    boxShadow:"4px 4px 4px black"
  };

  useEffect(() => {
    document.getElementById(id).addEventListener("scroll", (e) => {
      setScrollPos(e.target.scrollTop);
    });
    setLeft(parseInt($(`#${id}`).css('width')) / 2 - 0.5*fontSize);
    setTop(
      parseInt($(`#${id}`).css('height')) +
        document.getElementById(id).scrollTop -
        fontSize -
        30
    );
  });
  useEffect(() => {
    let height = parseInt($(`#${id}`).css('height'));
    let scrollHeight = document.getElementById(id).scrollHeight;
    let scrollTop = document.getElementById(id).scrollTop;
    if (height + scrollTop < scrollHeight && scrollTop > 0) setShow(2);
    else if(height + scrollTop < scrollHeight) setShow(1)
    else if (height == scrollHeight) setShow(0);
    else if (scrollTop > 0)setShow(-1);
    setTop(height + scrollTop - 50);
    //console.log(`${top}px`);
    //console.log(`${left}px`);
  }, [scrollPos]);
  if (show == 1)
    return (
      <div style={ComponentStyle}>
        <BiDownArrowCircle
          onClick={() => {
            document
              .getElementById(id)
              .scrollTo(0, document.getElementById(id).scrollHeight);
          }}
        />
      </div>
    );
    /*censer 1 0 blanket 1 3*/ 
  else if (show == -1)
    return (
      <div style={{ ...ComponentStyle, top: `${scrollPos+30}px` }}>
        <BiUpArrowCircle
          onClick={() => {
            document.getElementById(id).scrollTo(0, 0);
          }}
        />
      </div>
    );
  else if (show == 2)
    return (
      <>
        <div style={ComponentStyle}>
          <BiDownArrowCircle
            onClick={() => {
              document
                .getElementById(id)
                .scrollTo(0, document.getElementById(id).scrollHeight);
            }}
          />
        </div>
        <div style={{ ...ComponentStyle, top: `${scrollPos+30}px` }}>
          <BiUpArrowCircle
            onClick={() => {
              document.getElementById(id).scrollTo(0, 0);
            }}
          />
        </div>
      </>
    );
  else return <></>;
}
