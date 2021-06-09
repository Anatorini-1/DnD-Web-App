import Name from "./Name/Name";
import BasicInfo from "./Info/BasicInfo";
import Hp from "./Hp/Hp";

import $ from 'jquery'

function Header({data,setData,setLogged,setMode}) {
  

//Set the Value of a specific statistic
const handleNameInput = (e) => setData({...data, Names: {...data['Names'], [e.target.name]:e.target.value}})
const handleInfoInput = (e) => setData({...data, Info: {...data['Info'], [e.target.name]:e.target.value}})
const handleHpInput = (e) => {
  setData({...data, Hp: {...data['Hp'], [e.name]:e.value}});
  
}

  return (
    <div className="header" style={ComponentStyle}>
      <Name setLogged={setLogged} data={data['Names'] ?? {}} inputHandler={handleNameInput} />
      <BasicInfo data={data['Info'] ?? {}} inputHandler={handleInfoInput} setMode={setMode}/>
      <Hp data={data['Hp'] ?? {}} inputHandler={handleHpInput}/>
    </div>
  );
}
const ComponentStyle = {
  height: "185px",
  backgroundColor: "#660308",
  width: "1920px",
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
  border: "3px solid darkred",
  boxSizing: "border-box",
};
export default Header;
