import Labeled_Icon from "./Labeled_Icon"
import InfoTable from './InfoTable'
import alignmentIcons from "../../img/alignment/alignmentIcons"
import classIcons from '../../img/class/classIcons'
import {useState,useEffect} from 'react'
function BasicInfo({data ,inputHandler,setMode }) {
    let alignment = data['Alignment'] ?? "trueNeutral";
    let alignmentParts = alignment.split(/[A-Z]/)
    let output = "";
    output += (alignmentParts[0][0] ?? "").toUpperCase();
    output += alignmentParts[0].substr(1)
    output += " ";
    output += (alignment[alignmentParts[0].length] ?? "").toUpperCase();
    output += alignmentParts[1];


    //console.log(classIcons[data.Class.toLowerCase()])
    return (
        <div style={ComponentStyle}>
           <Labeled_Icon label = {"Class"}  subText = {data.Class}  icon={classIcons[(data.Class)]}/>
           <InfoTable setMode={setMode} data={data} inputHandler={(e) => {inputHandler(e)}}  />
           <Labeled_Icon label = {"Alignment"} subText = {output} customSubTextStyle={{fontSize:"30px"}} icon = {alignmentIcons[data.Alignment]}  />
          
        </div>
    )
}
const ComponentStyle = {
    display:"flex",
    float:"left",
    width:"926px",
    height:"180px",
    backgroundColor:"#660308"
}
export default BasicInfo
