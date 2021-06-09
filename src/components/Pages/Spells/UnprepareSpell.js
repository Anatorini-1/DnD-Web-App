import React from 'react'

export default function UnprepareSpell() {
    const handleDelete = (id) => {
        let newData = data;
        newData = newData.filter((e) => {return e != id})
        
        
        setData(newData);
        console.log(newData)
    }

    return (
            <button
                onMouseEnter={() => {setMinusHover(true)}}
                onMouseLeave={() => {setMinusHover(false)}}
                onClick={() => {handleDelete()}}
                style={{
                     ...buttonStyle,
                  backgroundColor:minusHover ? "red" : "transparent"
                  }}
              >
                <AiOutlineMinusCircle />
              </button>
    )
}
