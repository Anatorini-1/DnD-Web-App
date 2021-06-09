import React,{useState,useEffect} from 'react'

export default function DynamicFont({width = 0,maxFontSize = 0,children}) {
    const [fontSize,setFontSize] = useState(maxFontSize)
    const [toShow,setToShow] = useState(children)
    const calculateWidth = (targetWidth,size) => {
        let text = document.createElement("span");
        text.style.display = 'inline';
        document.body.appendChild(text);
        text.style.font = "Dungeon"; 
        text.style.fontSize = size + "px"; 
        text.style.height = 'auto'; 
        text.style.width = 'auto'; 
        text.style.position = 'absolute'; 
        text.style.whiteSpace = 'no-wrap'; 
        text.innerHTML = String(children); 
        let elementWidth = Math.ceil(text.clientWidth); 
        document.body.removeChild(text); 
        if(elementWidth <= targetWidth) return size;
        else return calculateWidth(targetWidth, size-1);
         
    }
    width = Number(width);
    maxFontSize = Number(maxFontSize);
    useEffect(() => {
        //console.log(maxFontSize)
        setFontSize(calculateWidth(width,maxFontSize))
    })
    useEffect(() => {
      setToShow(children)
    }, [children])
 
   
   
   
    
    return (
        <span style={{fontSize:`${fontSize}px`,}}>
            {toShow}
        </span>
    )
}
