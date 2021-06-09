import React,{useState} from 'react'

export default function AddFeature({addFunc,group}) {
    const [newFeature,setNewFeature] = useState({})
    return (
        <div style={ComponentStyle}>
            Name
            <input value={newFeature.name ?? ""} onChange={(e)=>{setNewFeature({...newFeature, name:e.target.value})}} style={nameInput}type="text"/><br />
            Desc<br />
            <textarea value={newFeature.desc ?? ""} style={{fontSize:"25px",width:"290px",height:"200px",resize:"none"}} onChange={(e)=>{setNewFeature({...newFeature, desc:e.target.value})}} name="" id="" cols="30" rows="10"></textarea>
            <br />
            <button
            onClick={()=>{addFunc(group,newFeature.name, newFeature.desc)}}
            style={{fontSize:"25px"}}>
                Add
            </button>
        </div>
    )
}
const ComponentStyle = {
    border: "3px solid #660308",
    backgroundColor: "rgb(120,255,120)",
    borderRadius: "15px",
    margin: "10px",
    padding: "5px",
    textAlign: "center",
};
const nameInput = {
    fontSize:"30px"
}