import React from 'react'
import {GiHealthNormal} from 'react-icons/gi'
import HealthRow from './HealthRow'
import {useState, useEffect} from 'react'
import $ from 'jquery'

function Hp({data, inputHandler, saveFunc}) {
   
    return (
        <div style={ComponentStyle}>
            <div style={{...healthTable}}>
                <GiHealthNormal style={healthIconStyle}/>
                <HealthRow inputHandler={inputHandler} label="Max" data={data} />
                <HealthRow inputHandler={inputHandler} label="Current"  data={data} />
                <HealthRow inputHandler={inputHandler} label="Temporary"  data={data} />
            </div>
           
        </div>
    )
}

const floatDiv = {
    float:"left"
}

const ComponentStyle = {
    float:"left",
    width:"480px",
    position:"relative",
    boxSizing:"border-box"
}
const healthIconStyle = {
    fontSize:"60px",
    position:"absolute",
    left:"-30",
    top:"57.5px"
  
}

const healthTable = {
    border:"3px solid black",
    width:"480px",
    paddingLeft:"60px",
    borderRadius:"20px",
    backgroundColor:"rgba(0,0,0,0.1)"
   
}
export default Hp
