import { createContext, useState } from "react"

const cartContext = createContext("carrito")


export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([])

    function countItemsInCart() {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.count;
        })
        return total
    }
    const clearCart = () => {
        setCartItems([]);
    };

    function getTotalPrice(){
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.count * item.price;
        })
        return totalPrice
    }

    function addItem ({price , id , title , img , count}){
        const copyCartItems = [...cartItems]
        copyCartItems.push({
            id:id,
            title:title,
            img:img,
            count:count,
            price:price,
        });
        setCartItems(copyCartItems);
    }

    function removeItem(id){
       const newCartState = cartItems.filter(item => item.id !== id)
       setCartItems(newCartState)
    }

    return <cartContext.Provider value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        clearCart,
        name: "carrito de compras"
    }} >
        {props.children}
    </cartContext.Provider>

}


export default cartContext
