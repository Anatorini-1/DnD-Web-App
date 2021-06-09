import React from "react";
import { GiTwoCoins } from "react-icons/gi";
export default function Wallet({ data, setData }) {
  let coins = [];
  const coinCollor= (coin) => {
    switch(coin){
        case "CP": return "Chocolate"
        case "SP": return "DimGray"
        case "EP": return "CornflowerBlue"
        case "GP": return "DarkGoldenRod"
        case "PP": return "DeepSkyBlue"
        
    }
}
  for (let coin in data)
    coins.push(
      <tr key={coin}>
        <td>
          <span style={{
              color: coinCollor(coin),
              textShadow:"2px 2px black"
          }}><GiTwoCoins />
          </span>
          &nbsp;{coin}
        </td>
        <td>
        <input style={{
            width:"50px",
            height:"50px",
            fontSize:"40px",
            fontWeight:"bold",
            textAlign:"center",
            border:"3px solid #660308",
            borderRadius:"10px",
            position:"relative",
            top:"-5px"
        }} type="text" readOnly value={data[coin]}/>
        
        </td>
      </tr>
    );
  return (
    <div>
      <table>
        <tbody>{coins}</tbody>
      </table>
    </div>
  );
}
