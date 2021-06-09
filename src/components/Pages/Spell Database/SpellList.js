import React, {useState} from 'react'
import Spell from "../Spells/Spell"
import PrepBtn from './PrepBtn'
import $, {ajax} from 'jquery'
import ScrollArrows from '../../SharedComponents/ScrollArrows'
export default function ClassSpells({data, filters,prepareSpell : prep}) {
    const prepareSpell = (id) => {
      $(`#spell${id}`).css("background-color","limegreen");
      setTimeout(() => {
        $(`#spell${id}`).css("background-color","#FCF1E3");
        prep(id)
      }, 600);
    }
    const spell_filter = (spell)=>{
     
        for(let filter in filters){
         
          if(filters[filter] == "All") continue;
          if(!spell[filter].toLowerCase().match(`${filters[filter].toLowerCase()}`)){
           
            return false;
          } 
        }
        if(spell['components'] != filters['components'] && filters['components'] != "All") return false
        return true;
    }
    let spellsToShow = [];
    for(let spell in data){
        let level = data[spell]['level'][0] == 'C' ? '0' : data[spell]['level'][0];
        let classArray = data[spell]['class'].split(",");
        classArray = classArray.map(e => {return e.trim()});
        if(spell_filter(data[spell])){
          if(spellsToShow.length < 100 || filters.name.length > 2){
            spellsToShow.push(<Spell id={`spell${spell}`} data={data} dataKey={spell} key={spell} action={<PrepBtn onClick={() => prepareSpell(spell)} />}/>)
          }
        }
    }
    return (
        <div id="spellList" style={ComponentStyle}> 
          <ScrollArrows id="spellList"/>
           {spellsToShow}
        </div>
    )
}
const ComponentStyle = {
    flex:8,
    position:"relative",
    height:"750px",
    borderRadius:"15px",
    padding:"15px",
    textAlign:"center",
    overflowY:"scroll",
    width:"1205px",
    height:"750px"
}

const selectStyle ={
    fontSize:"40px",
    fontWeight:"bold",
    borderRadius:"15px",
    padding:"6px",
    border:"3px solid #660308"
}
const titleStyle = {
    textAlign:"center",
    fontWeight:"bold",
    width:"100%"
}