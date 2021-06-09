import React,{useState} from 'react'
import Feature from "./Feature"
import AddForm from './AddFeature'
import ScrollArrows from '../../SharedComponents/ScrollArrows'
import {AiFillPlusCircle} from 'react-icons/ai'
export default function FeatureGroup({data,label,addFunc,index,delFunc}) {
    const [showAddForm,setShowAddForm] = useState(false);
    const delFeature= (name) => {delFunc(label,name)}
    let features = [];
    for(let feature in data[0]){
       features.push(<Feature delFunc = {delFeature} data={data[0][feature]} key={feature} label={feature}/>)
            
    }
    return (
        <div id={`features${index}`} style={ComponentStyle}>
          <ScrollArrows id={`features${index}`}  />
            <div style={{position:"relative",fontSize:"40px",fontWeight:"bold",padding:"5px"}}>
            {label}
            <button
            onClick={(e) => setShowAddForm(!showAddForm)}
            style={{
              fontSize: "40px",
              height: "50px",
              lineHeight: "50px",
              borderRadius: "15px",
              backgroundColor: showAddForm
                ? "rgb(255,255,100)"
                : "rgb(120,255,120)",
              border: "2px solid black",
              position: "absolute",
              right: "2px",
              marginBottom:"5px"
            }}
          >
            <AiFillPlusCircle />
          </button>
            </div>
            {showAddForm ? <AddForm addFunc = {addFunc} group={label} /> : "" }
            {features}
        </div>
    )
}
const ComponentStyle = {
    flex:'1',
    height:"820px",
    marginLeft:"10px",
    border:"3px solid #660308",
    borderRadius:"20px",
    padding:"10px",
    overflowY:"scroll"
}