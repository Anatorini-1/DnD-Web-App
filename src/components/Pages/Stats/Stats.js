import React from "react";
import { useEffect, useState } from "react";
import $ from "jquery";
import Abilities from "./Abilities/Abilities";
import BaseStats from "./BaseStats/BaseStats";
import Passives from "./Passives/Passives";
import SavingThrows from "./SavingThrows/SavingThrows";
import DeathSaves from './Death Saves/DeathSaves'
import HitDice from './Hit Dice/HitDice'
import SaveButton from "../../SharedComponents/SaveButton";
import Passive_Wis_Int from './Passive_Wis_Int/Passive_Wis_Int'
import Profficiencies from './Profficiencies/Profficiencies'
import Loader from '../../SharedComponents/Loader'
import { css } from "@emotion/core";

export default function Stats({data = {},setData}) {
  const style = {
    flexWrapper: {
      display: "flex",
      width: "100%",
    },
  };
    const [showEdit,setShowEdit] = useState(localStorage.getItem("showEdit") == "true")
    
    //console.log((localStorage.getItem('showEdit')))
    const setBaseStats = (x) => {setData({...data, ['Base Stats'] : x})}
    const setAbilities = (field, ability,value) => {
      let newData = data['Abilities'];
      for(let group in newData){
        for(let ab in newData[group]){
          if(ab == ability){
            newData[group][ab][field.toLowerCase()] = Number(value);
          }
        }
      }
      //console.log(newData)
      setData({...data, ['Abilities'] : newData})
      //console.log("set")
    }
    const setSavingThrows = (x) => {setData({...data, ['Saving Throws'] : x})}
    const setPassives = (x) => {setData({...data, ['Passives'] : x})}
    const setDeathSaves = (x) => {setData({...data,['Death Saves'] : x})}
    const setHitDice = (x) => {setData({...data,['Hit Dice'] : x})}
    const setProficiencies = (x) => {setData({...data,['Profficiencies'] : x})}

  return (
    <>
      <div style={style.flexWrapper}>
        <div>
        <BaseStats key="stats.baseStats" data={data['Base Stats'] ?? {}} setData={setBaseStats} />
        <Passive_Wis_Int setData={setPassives} data={data['Passives'] ?? {}} baseStats  ={data['Base Stats'] ?? {}}/>
        </div>
        <Abilities showEdit = {showEdit} setShowEdit = {setShowEdit} setData = {setAbilities}profficiency={(data.Passives ?? {})["Proficiency Bonus"] ?? {}} baseStats={data['Base Stats'] ?? {}} data={data.Abilities ?? {}}/>
        <div>
        
        <SavingThrows  profficiency={(data.Passives ?? {})["Proficiency Bonus"] ?? {}} baseStats={data['Base Stats'] ?? {}} data={data['Saving Throws'] ?? {}} setData={setSavingThrows} />

       
        <DeathSaves data={data['Death Saves'] ?? {}} setData={setDeathSaves}/>
        </div>
        <div>
        <Passives initiativeBase={Math.floor(((data['Base Stats'] ?? {})['Dexterity']-10)/2)} data={data['Passives'] ?? {}} setData={setPassives} />
        <HitDice data={data['Hit Dice'] ?? {}}/>
        </div>
       <Profficiencies data={data.Proficiencies ?? {}} setData= {setProficiencies}/>
      </div>
     
       
    </>
  );
}
