import { createContext, useState } from "react";


const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
            const item = {
                ...product,quantity
            };
            setCart([...cart, item]);
        } else {
            //localiza ubicación del item en carrito para actualizar este item
            const itemIndex = cart.findIndex((item) => item.id === +(product.id));
            //crea borrador de item para modificarlo
            const itemDraft = {...cart[itemIndex]};
            // actualiza quatity en el borrador
            itemDraft.quantity = itemDraft.quantity + quantity;
            //crea borrador de carrito para poder actualizar el item
            const cartDraft = [...cart];
            //actualiza borrador de carrito, sin moficiar estado REACT
            cartDraft[itemIndex] = itemDraft;
            setCart(cartDraft);
        }
    }

    const removeItem = (itemId) => {
        const cartDraft = cart.filter((item) => item.id !== itemId);
        setCart(cartDraft);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));
    const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);
    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
};