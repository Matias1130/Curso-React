import { useContext, useState } from "react"
import "./buttoncount.css"
import "./ButtonCarrito.css"
import Button from "./Button";
function ItemCount(props) {

  const {onSubmitCount, stock} = props;

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
    <div style={{display: 'flex',flexDirection:'column',alignItems:'center', justifyContent: 'center'}}>
      <div>
        <Button className="myButton" onClick={handleSubtract}>-</Button>
        <span>{count}</span>
        <Button className="myButton" onClick={handleAdd} disabled={count >= stock}>+</Button>
      </div>
      <div>
        <Button className='button__carrito' onClick={()=>{
          onSubmitCount(count)
        }}>Agregar al Carrito</Button>
      </div>
    </div>
  )
}

export default ItemCount
