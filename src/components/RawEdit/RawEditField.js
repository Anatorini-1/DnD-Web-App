import React,{useState} from "react";


export default function RawEditField({data,label,setData}) {
    const setBackgroundColor = (level) => {
        if(level == 0) return "limegreen"
        if(level == 1) return "green"
        if(level == 2) return "lightblue"
        if(level == 3) return "blue"
        if(level == 4) return "orangered"
        if(level == 5) return "red"
    }
    const handleInput = (path, newValue) => {
        let tree = path.split('/');
        tree = tree.slice(1,tree.length)
        let treePrefix = "data['";
        let toEval = "setData({...data, ";
        let close ="})";
        for(let i = 0; i < tree.length-1; i++){
            toEval += `${tree[i]} : {...${treePrefix}${tree[i]}'], `;
            close = "}" + close;
            treePrefix += `${tree[i]}']['`
        }
        toEval += `${tree[tree.length-1]} : '${newValue}'`
        toEval += close;
        console.log(toEval)
        eval(toEval);
        return;
      
    }
  const generateLowerLevel = (obj, label,level,path) => {
    if (typeof obj != "object") {
      return (
        <div className="dev">
         {level} :  {label} : <input name={path} onChange={(e) => handleInput(e.target.name,e.target.value)} style={{fontWeight:"bold", fontSize:"35px"}} className="dev" value={obj} />
        {path}
        </div>
      );
    } else {
      let toAppend = [];
      for (let i in obj) {
        toAppend.push(
          <>
            <div style={{marginLeft:"20px", backgroundColor:"rgba(0,0,0,0.1)"}} className="dev">
              {generateLowerLevel(obj[i], i,level+1,[`${path}/${i}`])}{" "}
            </div>
            <br />
          </>
        );
      }
      return(
      <div>
          {level} : {label}: {toAppend}
      </div>)
    }
  };
  let tmp = data;
  const toShow = generateLowerLevel(tmp, label,0, []);
  const [expand,setExpand] = useState(false)
  if(expand){
    return (
        <div style={ComponentStyle} className="dev">
         <button style={explandStyle} onClick={() => {setExpand(!expand)}}>Expand</button>
          <span className="dev">{toShow}</span>
        </div>
      );
  }
  else{
      return (
          
          <div>
              <table>
                  <tbody>
                      <tr>
                          <td style={{width:"100px", fontSize:'50px'}}>{label}</td>
                          <td style={{width:"100px", fontSize:'50px'}}><button style={explandStyle} onClick={() => {setExpand(!expand)}}>Expand</button></td>
                      </tr>
                  </tbody>
              </table>
              
               
            </div>
      )
  }
}
const ComponentStyle = {
  fontSize: "30px",
  fontWeight: "bold",
};
const explandStyle = {
    fontWeight:"bold",
    fontSize:"35px"
}