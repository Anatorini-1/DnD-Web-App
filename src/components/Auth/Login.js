import React, { useState,useEffect } from "react";
import {ajax} from 'jquery'
export default function Login({setLogin}) {
  const [page, setPage] = useState("Login");
  const [loginName, setLoginName] = useState("");
  const [loginPasswd, setLoginPasswd] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [status,setStatus] = useState("idle")
  const [server,setServer] = useState(localStorage.getItem('server') ?? "srogiehacjendy.com")
  const login = () => {
    setStatus("processing");
    ajax({
        url:`${window.location.protocol}//${localStorage.getItem("server")}/backend/processing/login.php`,
        method:"post",
        dataType:"json",
        data: {
            username:loginName,
            password:loginPasswd
        },
        success: (res) => {
         

          if(res['token'] != undefined && res['tokenExpires'] != undefined){
            localStorage.setItem("tokenExpires", res['tokenExpires']);
            localStorage.setItem("token", res['token']);
            setRequestStatus(res)
            setLogin(true)
            //setStatus(res["status"]);
          }
          else{
            setRequestStatus(res)
          }
 
        },
        error: (res) => {
          console.log("ERROR",res);
         
        }
    })
  }
  useEffect(() => {localStorage.setItem('server',server)},[server])
  const register = () => {};
  const registerPage = (
  <>
  <table>
    <tbody>
      {status != "idle" ? status : ""}
      <tr>
        <td>Username</td>
        <td></td>
      </tr>
      <tr>
        <td>Password</td>
        <td></td>
      </tr>
      <tr>
        <td>Character</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </>
  )
  const loginPage = (
    <>
      <table style={{marginTop:"40px"}}>
        <tbody>
          <tr>
            <td>Username</td>
            <td><input style={inputStyle} type="text" name="username" value={loginName} onChange = {(e) => {setLoginName(e.target.value)}}/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input style={inputStyle} type="password" name="username" value={loginPasswd} onChange = {(e) => {setLoginPasswd(e.target.value)}}/></td>
          </tr>
          <tr>
            <td>Server</td>
            <td>
              <input value={server} style={{...inputStyle,fontSize:'32px',height:"50px"}} onChange={(e)=>{setServer(e.target.value)}} type="text"/>
            </td>
          </tr>
          <tr>
              <td colSpan="2" style={{textAlign:"center"}}>
                  <button onClick={() => {login()}} style={buttonStyle}>
                      Login
                  </button>
              </td>
          </tr>
        </tbody>
      </table>
    </>
  );
  let pageToShow = page == "Login" ? loginPage : registerPage;
  return (
    <div style={ComponentStyle}>
      <div
        style={{
          height: "100px",
          borderBottom: "6px solid #660308",
          display: "flex",
        }}
      >
        <div
          onClick={() => {
            setPage("Login");
          }}
          style={{
            cursor: "pointer",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRight: "3px solid #660308",
            flex: 1,
            textAlign: "center",
            fontSize: "45px",
            fontFamily: "Dungeon",
            fontWeight: "bold",
            paddingTop: "25px",
          }}
        >
          Login
        </div>
        <div
          onClick={() => {
            setPage("Register");
          }}
          style={{
            cursor: "pointer",
            backgroundColor: "rgba(0,0,0,0.2)",
            flex: 1,
            textAlign: "center",
            fontSize: "45px",
            fontFamily: "Dungeon",
            fontWeight: "bold",
            paddingTop: "25px",
          }}
        >
          Register
        </div>
      </div>
      <div style={{padding:"10px",fontSize:"40px",fontWeight:"bold"}}>
          {requestStatus['message']}
      </div>
      {pageToShow}
    </div>
  );
}
const ComponentStyle = {
  border: "6px solid #660308",
  width: "500px",
  height: "500px",
  margin: "0 auto",
  marginTop: "150px",
  borderRadius: "20px",
  fontSize: "45px",
  fontWeight: "bold",
  fontFamily:"Dungeon",
  textAlign:"center"
};
const inputStyle = {
    fontSize: "45px",
    fontWeight: "bold",
    fontFamily:"Dungeon",
    width:"80%",
    borderRadius:"20px",
    border:"3px solid #660308"
}

const buttonStyle = {
    fontSize:"50px",
    marginTop:"30px",
    border:"3px solid #660308",
    borderRadius:"20px",
    padding:"0px",
    fontWeight:"bold",
    padding:"5px 20px 5px 20px",
}