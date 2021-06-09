import React from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import InfoRow from "./InfoRow"
import SaveButton from '../../SharedComponents/SaveButton'
function InfoTable({data,inputHandler,setMode}) {
    
    
    return (
        <div style={ComponentStyle}>
            <div style={dataContainer}>
            <span style={{cursor:"pointer"}}onClick={() => {setMode()}}><BsFillInfoCircleFill style={iconStyle}/></span>
            <div style={whiteRectanglexD}></div>
            <InfoRow label={"SubClass"} value={data} onChange = {inputHandler}/>
            <InfoRow label={"Level"} value={data} onChange = {inputHandler}/>
            <InfoRow label={"Background"} value={data} onChange = {inputHandler}/>
            <div style={{position:"absolute", right:"5px", top:"25px"}}>
                
            </div>
            </div>
        </div>
    )
}

const ComponentStyle = {
    flex:"2",
    
}
const iconStyle = {
    fontSize:"60px",
    position:"absolute",
    top:"55px",
    left:"-30px",
    zIndex:"10",
    borderRadius:"200px",
    
    backgroundSize:"50px 50px"
}

const whiteRectanglexD = {
    position:"absolute",
    width:"40px",
    height:"40px",
    backgroundColor:"white",
    zIndex:"5",
    left:"-20px",
    top:"67px"
}

const dataContainer ={
    width:"100%",
    height:"100%",
    border:"3px solid black",
    backgroundColor:"rgba(0,0,0,0.1)",
    borderRadius:"20px",
    position:"relative",
    paddingTop:"10px",
    paddingLeft:"50px"
}
export default InfoTable
