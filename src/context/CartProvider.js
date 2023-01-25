import React, { useContext, useState } from "react";

const CartContexto = React.createContext([]);

export const useCartContext = () => useContext(CartContexto);



const CartProvider = ({ children }) => {
    
    const [ cart, setCart ] = useState([]);

    //agregar prod
    const addProd = (item, cant) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, cantidad: cant});
        setCart(newCart);
    }

    console.log(cart);

    //limpiar carrito
    const clearCart = () => { setCart([]) };

    //verifica si esta en carro
    const inCart = (id) =>  cart.find( prod => prod.id === id ) ? true : false ;

    //elimina de carrito
    const removeProd = (id) => setCart( cart.filter( prod => prod.id !== id ))

    const totalProd = () => {return cart.reduce((acumulador, prod) => acumulador + prod.cantidad, 0 )};

    const totalPrice = () => { return cart.reduce((acum, prod) => acum + prod.price * prod.cantidad, 0)};

    
    return (    
    
        <CartContexto.Provider value={{ clearCart, inCart, removeProd, addProd, cart, totalProd, totalPrice }}>
            {children}
        </CartContexto.Provider>

    )
}

export default CartProvider;