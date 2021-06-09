import React,{useState,useEffect} from 'react'
import Group from './ProfficiencyGroup'
import ScrollArrows from '../../../SharedComponents/ScrollArrows'
import Edit from './EditProfficiencies'
import ShowEdit from '../../../SharedComponents/OpenEditMode'
export default function Profficiencies({data,setData}) {
    const [groups,setGroups] = useState([])
    const [edit,setEdit] = useState(localStorage.getItem("editProfficiencies") == 'true');
    
    useEffect(()=>{
        let newGroups = []
        for (let group in data){
            newGroups.push(<Group allData={data} data ={data[group]} setData={setData} label={group} key={group}/>)
        }
        setGroups(newGroups)
    },[])
    return (
        <div id="profficienciesDiv" className="noScroll" style={ComponentStyle}>
            <ScrollArrows id="profficienciesDiv"/>
            <div style={{display:"flex"}}>
                <div style={{flex:"1", textAlign:"left"}}>Profficiencies</div>
                <div style={{flex:"1", textAlign:"right",paddingRight:"20px"}}><ShowEdit show={edit} setShow={setEdit} localStorageKey={'editProfficiencies'} /></div>
            </div>
            {edit ? <Edit data={data} setData={setData} /> : ""}
           {groups}
        </div>
    )
}
const ComponentStyle = {
    marginLeft: "30px",
  border: "3px solid #660308",
  width:"480px",
  height: "820px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  overflowY:"scroll",
  position:"relative"
}