import React, { useState } from "react"

export const cartContext = React.createContext()

const CartService = ({children}) => {
    const [cart, setCart] = useState([])
    const addCart = (item) => {

        setCart(prevCart => {
            const found = prevCart.find(element => element.id === item.id)
            if(found)
            return prevCart.map(cartItem => cartItem.id === item.id? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
            else
            return [...prevCart, {...item, quantity: 1}]
        })
        
        // setCart(prevCart => [...prevCart, item])
        // if(item.quantity > 1){
        //     setCart(prevCart => prevCart.map(item => item.id === id? {...item, quantity: item.quantity + 1} : item))
        // }
    }
    const removeCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId ))
    }
    const increment = (id) => {
        setCart(prevCart => prevCart.map(item => item.id === id? {...item, quantity: item.quantity + 1} : item))
      }
      const decrement = (id) => {
        setCart(prevCart => prevCart.map(item => item.id === id && item.quantity > 0?
            {...item, quantity: item.quantity - 1} 
            : item))
      };
    const value = {
        cart,
        addCart,
        removeCart,
        increment,
        decrement
    }
  return (
    <cartContext.Provider value={value}>
        {children}
    </cartContext.Provider>
  )
}

export default CartService
