import React,{useEffect,useState} from 'react'
import FeatureGroup from './FeatureGroup'

export default function Features({data = {},setData = {}}) {
    console.log(data)
    const addFeature = (group,name, desc) => {
        console.log({...data, [group] : {...data[group], [name]:desc}})
        setData({...data, [group] : {...data[group], [name]:desc}})
    }
    const delFeature = (group, name) => {
        let newData= data;
        let newGroups = {};
        for(let g in data) newGroups[g] = {};
        for(let g in data){
            for(let f in data[g])
                if(!(g == group && f == name)) newGroups[g][f] = (data[g][f]);
        }
        setData(newGroups)
    }
    let groups =[];
    let i=0;
    for(let group in data){
        groups.push(<FeatureGroup delFunc={delFeature} index={i} data={[data[group]]} key={group} label={group} addFunc = {addFeature}/>)
        i++;
    }
    return (
        <div style={ComponentStyle}>
            {groups}
            
        </div>
    )
}
const ComponentStyle= {
    display:'flex'
}