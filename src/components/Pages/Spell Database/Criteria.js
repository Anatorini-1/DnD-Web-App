import React from "react";

export default function Criteria({ data, filters, setFilters }) {
  let schools = [];
  let classOptions = [];
  let levelOptions = [];
  let rangeOptions = [];
  let componentOptions = [];
  let castingTimeOptions = [];
  let schoolOptions = [];
  const prepareSelects = () => {
    const prepareClassOptions = () => {
      for (let spell in data) {
        if (data[spell] != undefined) {
          let classArray = data[spell]["class"].split(",");
          classArray = classArray.map((e) => {
            return e.trim();
          });
          classArray.forEach((element) => {
            if (schools[element] == undefined) {
              schools[element] = true;
            }
          });
        }
      }
      for (let x in schools) {
        classOptions.push(
          <option style={{ fontWeight: "bold" }} value={x} key={x}>
            {x}
          </option>
        );
      }
    };
    prepareClassOptions();

    const prepareLevelOptions = () => {
      for (let i = 0; i < 10; i++) {
        levelOptions.push(
          <option style={{ fontWeight: "bold" }} value={i} key={i}>
            {i}
          </option>
        );
      }
    };
    prepareLevelOptions();
  
    const prepareRangeOptions = () => {
      let tmp = [];
      for (let spell in data) {
        tmp[data[spell]["range"]] = true;
      }

      let rangeKeys = [];
      for (let key in tmp) rangeKeys.push(key);
      rangeKeys.sort();

      rangeKeys.reverse();
      rangeKeys.forEach((item) => {
        rangeOptions.push(
          <option style={{ fontWeight: "bold" }} value={item} key={item}>
            {item}
          </option>
        );
      });
    };
    prepareRangeOptions();
    const prepareComponentOptions = ()=>{
        let tmp = [];
        for (let spell in data) {
          tmp[data[spell]["components"]] = true;
        }
  
        let componentKeys = [];
        for (let key in tmp) componentKeys.push(key);
        componentKeys.sort();
  
        componentKeys.reverse();
        componentKeys.forEach((item) => {
          componentOptions.push(
            <option style={{ fontWeight: "bold" }} value={item} key={item}>
              {item}
            </option>
          );
        });
    }
    prepareComponentOptions();
    const prepareCastingTimeOptions = () => {
        let tmp = [];
        for (let spell in data) {
          tmp[data[spell]["casting_time"]] = true;
        }
  
        let keys = [];
        for (let key in tmp) keys.push(key);
        keys.sort();
  
        keys.reverse();
        keys.forEach((item) => {
          castingTimeOptions.push(
            <option style={{ fontWeight: "bold", width:"100px" }} value={item} key={item}>
              {item}
            </option>
          );
        });
    }
    prepareCastingTimeOptions();
    const prepareSchoolOptions = () => {
        let tmp = [];
        for (let spell in data) {
          tmp[data[spell]["school"]] = true;
        }
  
        let keys = [];
        for (let key in tmp) keys.push(key);
        keys.sort();
  
        keys.reverse();
        keys.forEach((item) => {
          schoolOptions.push(
            <option style={{ fontWeight: "bold", width:"100px" }} value={item} key={item}>
              {item}
            </option>
          );
        });
    }
    prepareSchoolOptions();
  };
  prepareSelects();

  return (
    <div style={ComponentStyle}>
      <table style={{ width: "100%", fontWeight: "bold" }}>
        <tbody>
            <tr>
                <td>Name</td>
                <td>
                    <input value = {filters.name} onChange={e => setFilters({...filters, name:e.target.value})} type="text" style={{...selectStyle}}/>
                </td>
            </tr>
          <tr>
            <td>Class</td>
            <td>
              <select
                value={filters.class}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, class: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                {classOptions}
              </select>
            </td>
          </tr>
          <tr>
            <td>Level</td>
            <td>
              <select
                value={filters.level}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, level: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                {levelOptions}
              </select>
            </td>
          </tr>
          <tr>
            <td>Range</td>
            <td>
              <select
                value={filters.range}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, range: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                {rangeOptions}
              </select>
            </td>
          </tr>
          <tr>
            <td>Components</td>
            <td>
              <select
                value={filters.components}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, components: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>

                {componentOptions}
              </select>
            </td>
          </tr>
          <tr>
            <td>Concentration</td>
            <td>
              <select
                value={filters.concentration}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, concentration: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                <option style={{ fontWeight: "bold" }} value={"yes"}>
                  Yes
                </option>
                <option style={{ fontWeight: "bold" }} value={"no"}>
                  No
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Ritual</td>
            <td>
              <select
                value={filters.ritual}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, ritual: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                <option style={{ fontWeight: "bold" }} value={"yes"}>
                  Yes
                </option>
                <option style={{ fontWeight: "bold" }} value={"no"}>
                  No
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Casting Time</td>
            <td>
              <select
                value={filters.casting_time}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, casting_time: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                {castingTimeOptions}
              </select>
            </td>
          </tr>
          <tr>
            <td>School</td>
            <td>
              <select
                value={filters.school}
                name="class"
                id=""
                style={selectStyle}
                onChange={(e) => {
                  setFilters({ ...filters, school: e.target.value });
                }}
              >
                <option style={{ fontWeight: "bold" }} value={"All"}>
                  All
                </option>
                {schoolOptions}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const ComponentStyle = {
  flex: 2,
  border:"3px solid #660308",
  borderRadius:"20px",
  padding:"10px"
};
const selectStyle = {
  fontSize: "40px",
  fontWeight: "bold",
  width:"130px"
};
