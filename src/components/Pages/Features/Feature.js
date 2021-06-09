import React,{useState} from 'react'
import { BiDetail } from "react-icons/bi";
import {AiOutlineCloseCircle} from "react-icons/ai"
import DynamicFont from '../../SharedComponents/DynamicFont'
export default function Feature({data,label,delFunc}) {
    const [detailHover, setDetailHover] = useState(false);
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div style={ComponentStyle}>
            <span style={{fontWeight:"bold"}}><DynamicFont maxFontSize={40} width={250}>{label}</DynamicFont></span>
            <button 
            style={{...detailButton, backgroundColor: detailHover? "lightblue": "transparent"}}
            onMouseEnter={() => {setDetailHover(true)}}
            onMouseLeave={() => {setDetailHover(false)}}
            onClick ={()=>{setShowDetail(!showDetail)}}
            >
                <BiDetail />
            </button>
            <button style={{...detailButton,right:'50px',color:"red"}} onClick={e=>delFunc(label)}>
                <AiOutlineCloseCircle />
            </button>
            <div className="defaultFont" style={{padding:"5px",display:showDetail ? "block" : "none"}}>
{data}
            </div>
        </div>
    )
}
const ComponentStyle = {
    backgroundColor:"rgba(0,0,0,0.2)",
    borderRadius:"25px",
    marginBottom:"10px",
    padding:"10px",
    position:"relative",
    transition:"1s ease all"
}
const detailButton ={
    position:"absolute",
    transition:"0.2s ease all",
    right:"10px",
    top:"20px",
    fontSize:"35px",
    backgroundColor:"transparent",
    border:"none",
    borderRadius:"20px",
    paddingTop:"5px",
    cursor:"pointer"
}