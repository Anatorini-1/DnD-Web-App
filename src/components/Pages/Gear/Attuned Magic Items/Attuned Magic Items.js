import React,{useState} from "react";
import Row from "./AttunedRow";
import Add from '../Items/AddItem'
import { GiLightBackpack } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";

import AddItem from "../Items/AddItem";
import ShowAddForm from '../../../SharedComponents/ShowAddFormBtn'
export default function Attuned_Magic_Items({ data, setData }) {
  const [showAddForm,setShowAddForm] = useState(false)
  let rows = [];
  for (let item in data)
    rows.push(<Row data={data} setData={setData} dataKey={item} key={item} />);

    const addNewItem = (item) => {
      let newItems = [];
      for(let item in data) newItems.push(data[item])
      let index = newItems.findIndex((e) => {
        return e.Name == item.Name;
      });
      if (index > -1) {
        newItems[index].Quantity =
          Number(newItems[index].Quantity) + Number(item.Quantity);
      } else {
        newItems.push(item);
      }
  
      setData(newItems);
  
    
    };
  return (
    <div style={ComponentStyle}>
      Attuned Magic Items
     
      <div style={itemTableHeader}>
        <div style={{ flex: "6" }}>Name</div>
        <div style={{ flex: "1", fontSize: "40px", textAlign: "center" }}>
          <GiLightBackpack />
        </div>
        <div style={{ flex: "1", fontSize: "40px", textAlign: "center" }}>
          <FaWeightHanging />
        </div>
        <div style={{ flex: "2", textAlign: "center", color: "limegreen" }}>
          <ShowAddForm show={showAddForm} setShow={setShowAddForm} />
        </div>
      </div>
      <AddItem show={showAddForm} saveNewItem = {addNewItem}/>
      {rows}
    </div>
  );
}
const ComponentStyle = {
  marginLeft: "30px",
  marginTop: "0px",
  border: "3px solid #660308",
  height: "280px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  width:"500px",
  overflowY:"scroll"
};

const itemTableHeader = {
  display: "flex",
};
