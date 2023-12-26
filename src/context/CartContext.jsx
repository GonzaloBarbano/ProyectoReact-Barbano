import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: [],
    addItem: (item, quantity) => {},
    removeItem: (itemId) => {},
    clearCart: () => {},
    getTotalItems: () => 0,
  });
  
  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addItem = (item, quantity) => {
      const existingItemIndex = cart.findIndex((product) => product.item.id === item.id);
  
      if (existingItemIndex !== -1) {
        const newCart = cart.map((product) => {
          if (product.item.id === item.id) {
            return { ...product, quantity: product.quantity + quantity };
          } else {
            return product;
          }
        });
        setCart(newCart);
      } else {
        setCart([...cart, { item, quantity }]);
      }
    };
  
    const removeItem = (itemId) => {
      const cartUpdated = cart.filter((product) => product.item.id !== itemId);
      setCart(cartUpdated);
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const getTotalItems = () => {
      let x = 0;
      x = cart.reduce((acc, curr) => acc + curr.quantity, 0);
      return x;
    };
  
    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalItems }}>
        {children}
      </CartContext.Provider>
    );
  };
  