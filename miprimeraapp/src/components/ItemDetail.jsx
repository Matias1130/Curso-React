import "./cardproduct.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import Button from "./Button";
import { Link } from "react-router-dom";


function ItemDetail(props) {
  const { price, title, description, img, stock, id } = props;

  const { addItem } = useContext(cartContext)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  function handleAddToCart(count) {
    console.log(`agregaste al carro ${count} unidades`)
    addItem({ id, price, title, count, img })
    setIsAddedToCart(true)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img className='img' src={`${img}`} alt={title} />
      <h3 className='title__card'>{title}</h3>
      <p className='card__description'>{description}</p>
      <p className='price'>${price}</p>
      <p className="title__card">Stock:{stock}</p>
      <div style={{ padding: "10px" }}>
        {
          isAddedToCart
            ? <Link to="/cart">
              <Button className="button__carrito">Ver Carrito!</Button>
            </Link>
            : <ItemCount onSubmitCount={handleAddToCart} stock={stock}></ItemCount>
        }
      </div>
    </div>
  );
}



export default ItemDetail;
