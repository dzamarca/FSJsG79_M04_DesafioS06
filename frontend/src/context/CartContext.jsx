import { createContext, useState, useEffect } from "react";
import { pizzaCart } from "../assets/js/pizzas"
import { aumentaPizza, disminuyePizza, calculaTotal, agregaPizza } from "../assets/utils/funciones"


export const CartContext = createContext()

const CardProvider = ({ children }) => {

    const [cart, setCart] = useState(pizzaCart)

    const handleIncrementa = (id) => setCart((cart2) => aumentaPizza(cart2, id))
    const handleDisminuye = (id) => setCart((cart2) => disminuyePizza(cart2, id))
    const handleAgrega = (id) => setCart((cart) => agregaPizza(cart, id))
    const total = calculaTotal(cart)

    const stateGlobal = {
        cart,
        handleIncrementa,
        handleDisminuye,
        handleAgrega,
        // calcularTotal,
        total
    }
    return <CartContext.Provider value={stateGlobal}>{children}</CartContext.Provider>
}

export default CardProvider