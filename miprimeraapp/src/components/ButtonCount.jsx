import { useState } from "react"
import "./buttoncount.css"
function ButtonCount(props) {

    let [count,setCount]= useState(1);

    const handleAdd = ()=>{
        setCount(count < props.stock ? count +1 : count);
    }

    const handleSubtract = ()=>{
        if (count > 1){
            setCount (count -1);
        }
    }

  return (
    <div>
      <button className="myButton" type="button" onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button className="myButton" type="button" onClick={handleAdd}>+</button>
    </div>
  )
}

export default ButtonCount
