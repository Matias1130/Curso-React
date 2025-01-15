import "./cardproduct.css";
import ButtonCarrito from "./ButtonCarrito";
import ButtonCount from "./ButtonCount";

function ItemDetail(props) {
  const { price, title, description, img ,stock,id} = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center', justifyContent: 'center' }}>
      <img className='img' src={`${img}`} alt={title} />
      <h3 className='title__card'>{title}</h3>
      <p className='card__description'>{description}</p>
      <p className='price'>${price}</p>
      <p className="title__card">Stock:{stock}</p>
      <ButtonCarrito>AGREGAR AL CARRITO!</ButtonCarrito>
      <div style={{padding:"10px"}}><ButtonCount stock={stock}></ButtonCount></div>
    </div>
  );
}

export default ItemDetail;
