import React from 'react'
import {useState} from 'react'
import Spell from './Spell'
import ScrollArrows from '../../SharedComponents/ScrollArrows'

import UnPrepBtn from './UnPrepBtn'
export default function PreparedSpells({data = {},setData,spellData = {}}) {
    const [navState, setNavState] = useState(0);
   
    const handleDelete = (id) => {
        let newData = [];
      
        for(let i = 0; i < data.length; i++)
            if(data[i] != id) newData.push(data[i])
       
       
        setData(newData);
    }
    let spells = [
    ];
    let navItems = [];
    let spellsToShow=[];
    if(data != {} && spellData != {}){
        for(let i = 0; i < 10; i++) {
            navItems.push(<div key={i} onClick={() => {setNavState(i)}} style={{...navItemStyle, backgroundColor:navState==i ? "lightblue":"transparent"}}>{i}</div>)
            spells.push([])
        } 
        for(let spell in data){
            if(spellData[spell] != undefined){
                let lvl = spellData[data[spell]]['level'][0] == "C" ? 0 : Number(spellData[data[spell]]['level'][0])
                
                spells[lvl].push(data[spell]);
            }
           
        }
        spells[navState].forEach(element => {
            spellsToShow.push(<Spell prepData={data} data={spellData} key={element} dataKey={element} action={<UnPrepBtn onClick={() => {handleDelete(element)}}/>}/>)
        });
    }
    
    return (
        <div style={ComponentStyle} id="spellsDiv" className="noScroll">
             <ScrollArrows id="spellsDiv" />
           <div style={spellNav}>
                <div style={{flex:1}}>LVL:</div>{navItems}
           </div>
           <table style={{width:"100%",borderCollapse:"collapse"}}>
               <tbody>
                   <tr>
                       <td style={tdStyle}>Name</td>
                       <td style={tdStyle}>Components</td>
                       <td style={tdStyle}>Range</td>
                       <td style={tdStyle}>Duration</td>
                       <td style={tdStyle}>School</td>
                       <td style={tdStyle}>Concentration</td>
                       <td style={tdStyle}>&nbsp;</td>
                   </tr>
               </tbody>
           </table>
           <div style={spellsStyle} id="spellsToShow" className="spellsDiv">
           
           {spellsToShow}
           </div>
                  
               
        </div>
    )
}
const ComponentStyle = {
    marginLeft: "30px",
    marginTop: "10px",
    border: "3px solid #660308",
    height: "650px",
    borderRadius: "20px",
    padding: "10px",
    backgroundColor: "rgba(0,0,0,0.1)",
    color: "black",
    fontWeight: "bold",
    width:"1300px",
    overflowY:"scroll",
    position:"relative"
}

const spellNav = {
    display:"flex"
}

const navItemStyle = {
    flex:1,
    textAlign:"center",
    border:"3px solid #660308",
    margin:"0 5px 0 5px",
    borderRadius:"15px",
    cursor:"pointer"
}

const tdStyle = {
    width:`${100/7}%`,
    textAlign:"center"
}
const spellsStyle = {
    
    height:"480px",
    overflowY:"scroll"
}