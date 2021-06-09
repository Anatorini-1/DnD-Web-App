import React,{useState} from 'react'
import OpenEdit from '../../../SharedComponents/OpenEditMode'

import SavingThrowRow from './SavingThrowRow'

export default function SavingThrows({data,setData,profficiency,baseStats}) {
    const [showEdit,setShowEdit] = useState(localStorage.getItem('editSavingThrows') == 'true')
    let rows =[];
    for (let row in data){
        rows.push((
        <div>
            <SavingThrowRow data={data} setData={setData} showEdit={showEdit} key={row} label={row} profficiencyBonus = {profficiency} parentStat = {baseStats[row]} isProfficient={data[row]}/>
           
        </div>
        ))
    }
    return (
        <div style={ComponentStyle} id="savingThrows">
           
            <div>Saving Throws <OpenEdit show={showEdit} setShow={setShowEdit} localStorageKey={"editSavingThrows"}/></div>
            {rows}
        </div>
    )
}

const ComponentStyle = {
    marginLeft:"30px",
    border:"3px solid #660308",
    height:"550px",
    width:"",
    borderRadius:"20px",
    padding:"10px",
    backgroundColor:"rgba(0,0,0,0.1)",
    color:"black",
    fontWeight:"bold",
    overflowY:"scroll",
    position:"relative"
}