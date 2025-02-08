import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./cartcontainer.css";
import { createBuyOrder } from "../data/database";
import { Link } from "react-router-dom";

function CartContainer() {
    const { removeItem, clearCart } = useContext(cartContext);
    const { cartItems } = useContext(cartContext);
    const { getTotalPrice } = useContext(cartContext);

    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: "",
    });

    const [orderID, setOrderID] = useState("");  
    const [totalPrice, setTotalPrice] = useState(0); 
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);  

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }

    async function handleCheckout() {
        const orderData = {
            buyer: {
                name: `${userData.username} ${userData.surname}`,
            },
            items: cartItems,
            total: getTotalPrice(),
            date: new Date(),
        };
        const newOrderID = await createBuyOrder(orderData);
        
        setOrderID(newOrderID);
        setTotalPrice(getTotalPrice());
        setPurchaseCompleted(true);

        clearCart();
    }

    return (
        <div className="div__general">
            <h2 className="title">Tu carro de compras:</h2>

            
            {!purchaseCompleted && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={item.id || index} className="div__products">
                        <h3 className="product">{item.title}</h3>
                        <h4 className="product__cart">Precio: ${item.price}</h4>
                        <h4 className="product__cart">Cantidad: {item.count}</h4>
                        <button
                            type="button"
                            className="button__delete"
                            onClick={() => removeItem(item.id)}
                        >
                            Eliminar Producto
                        </button>
                    </div>
                ))
            ) : cartItems.length === 0 && !purchaseCompleted ? (
                <div className="div__products">
                    <p className="product__cart">Tu carrito está vacío 🛒</p>
                </div>
            ) : null}

           
            {!purchaseCompleted ? (
                <form className="form">
                    <h2 className="titulo__form">Completa tus datos para completar la compra</h2>

                    <div className="div__label">
                        <label className="label">Nombre</label>
                        <input
                            className="input"
                            name="username"
                            type="text"
                            onChange={onInputChange}
                            value={userData.username}
                        />
                    </div>

                    <div className="div__label">
                        <label className="label">Apellido</label>
                        <input
                            className="input"
                            name="surname"
                            type="text"
                            onChange={onInputChange}
                            value={userData.surname}
                        />
                    </div>

                    <div className="div__label">
                        <label className="label">Edad</label>
                        <input
                            className="input"
                            name="age"
                            type="text"
                            onChange={onInputChange}
                            value={userData.age}
                        />
                    </div>

                    <button
                        className="button"
                        disabled={
                            !(userData.username !== "" && userData.surname !== "" && userData.age !== "")
                        }
                        onClick={(evt) => {
                            evt.preventDefault();
                            handleCheckout();
                        }}
                    >
                        Completar Compra
                    </button>
                </form>
            ) : (
                <div className="form">
                    <h2 className="label">¡Gracias por tu compra!</h2>
                    <p className="label">El ID de tu compra es: {orderID}</p>
                    <p className="label">El total de tu compra es: ${totalPrice}</p>
                    <Link to="/">
                    <button className="button_inicio">Volver al inicio</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CartContainer;
