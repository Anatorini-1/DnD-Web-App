import React, { useState, useEffect } from "react";
import ItemRow from "./ItemRow";
import AddItem from "./AddItem";
import ScrollArrow from '../../../SharedComponents/ScrollArrows'
import { GiLightBackpack } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";
import ShowAddForm from '../../../SharedComponents/ShowAddFormBtn'

export default function Items({ data, setData }) {
  var itemRows = [];
  const generateItemList = () => {
    itemRows = [];
    //console.log(data)
    let items = [];
    for (let x in data) items.push(data[x]);
    //console.log(items)
    items = items.sort((a, b) => {
      if (a == undefined || b == undefined) return 0;
      if (a.Name.substr(0, 3) < b.Name.substr(0, 3)) return -1;
      else if (a.Name.substr(0, 3) > b.Name.substr(0, 3)) return 1;
      else return 0;
    });

    for (let item in items)
      itemRows.push(
        <ItemRow dataKey={item} key={item} data={items} setData={setData} />
      );
  };
  generateItemList();
  const [showAddForm, setShowAddForm] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [tak,setTak] = useState("")
  const addNewItem = (item) => {
    let newItems = [...data];
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

    generateItemList();
  };
  
  return (
    <div id="itemsDiv" style={ComponentStyle}>
      <ScrollArrow id="itemsDiv"/>
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
      <AddItem saveNewItem={addNewItem} show={showAddForm} />
      {itemRows}
    </div>
  );
}

const ComponentStyle = {
  marginLeft: "30px",
  border: "3px solid #660308",
  height: "800px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  width: "500px",
  overflowY: "scroll",
  position:"relative"
};
const itemTableHeader = {
  display: "flex",
};
