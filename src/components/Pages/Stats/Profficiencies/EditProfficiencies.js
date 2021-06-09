import React, { useState, useEffect } from "react";
import { FiSave } from "react-icons/fi";
function EditProfficiencies({ data, setData }) {
  const [newFeature, setNewFeature] = useState({});
  const [groups, setGroups] = useState([]);
  const [saveHover, setSaveHover] = useState(false);
  const addNewProff = () => {
    let group = newFeature.group ?? groups[0].props.value;
    let value = newFeature.value ?? "default";
    let newData = data;
    let x = [];
    for(let i in newData[group]){
        x.push(newData[group][i])
    }
    x.push(value);
    newData[group] = x;
    console.log(newData)
   setData(newData)
     }
      
  useEffect(() => {
    let newGroups = [];
    for (let g in data)
      newGroups.push(
        <option key={g} style={{ fontWeight: "bold" }} value={g}>
          {g}
        </option>
      );
      
    setGroups(newGroups);
  }, []);
  return (
    <div style={ComponentStyle}>
      Add New Profficiency
      <table>
        <tbody>
          <tr>
            <td>Item</td>
            <td>
              <input
                style={inputStyle}
                type="text"
                name="value"
                id=""
                value={newFeature.value ?? ""}
                onChange={(e) => {
                  setNewFeature({ ...newFeature, value: e.target.value });
                }}
              />
            </td>
            <td rowSpan="2">
              <span
                onClick={()=>{addNewProff()}}
              >
                <FiSave
                  onMouseEnter={() => {
                    setSaveHover(true);
                  }}
                  onMouseLeave={() => {
                    setSaveHover(false);
                  }}
                  style={{
                    backgroundColor: saveHover ? "green" : "transparent",
                    borderRadius: "8px",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Group</td>
            <td>
              <select style={inputStyle} value = {newFeature.group} onInput={(e) => {setNewFeature({...newFeature, group : e.target.value})}} name="group" id="">
                {groups}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const ComponentStyle = {
  width: "95%",
  height: "300px",
  backgroundColor: "LightGreen",
  padding: "20px",
  margin: "20px 0 20px 0",
  borderRadius: "20px",
  border: "3px solid rgb(102, 3, 8)",
};

const inputStyle = {
  fontSize: "30px",
  borderRadius: "15px",
  border: "3px solid #470206",
  fontWeight: "bold",
  width: "250px",
};
export default EditProfficiencies;
