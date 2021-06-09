import React from 'react'
import Input from "../../../SharedComponents/Input"
export default function EditAbility({data = {},setData}) {
    let x = data;
    let inputs = [];
    const inputStyle={
        backgroundColor:  "white",
        width:"30px",
        height:"30px",
        borderRadius:"5px",
        border:"1px solid black",
        margin:"2px",
        fontWeight:"bold",
        fontSize:"30px"
    }
    
    return (
        <table style={{marginLeft:'20px',fontWeight:"600",color:"darkslategrey"}}>
            <tbody>
                <tr>
                    <td>Bonus</td>
                    <td><Input focusKey={`${data.label}Bonus`} name="Bonus" style={inputStyle} value={data.bonus} onChange = {(e) => {setData(e.target.name, data.label,e.target.value)}} /></td>
                </tr>
                <tr>
                    <td>Profficiency</td>
                    <td><Input focusKey={`${data.label}Profficiency`} name="Profficiency" style={inputStyle} value={data.proficiency} onChange = {(e) => {setData('proficiency', data.label,e.target.value)}} /></td>
                </tr>
                <tr>
                    <td>Expertise</td>
                    <td><Input focusKey={`${data.label}Expertise`} name="Expertise" style={inputStyle} value={data.expertise} onChange = {(e) => {setData(e.target.name, data.label,e.target.value)}} /></td>
                </tr>
            </tbody>
        </table>
    )
}
