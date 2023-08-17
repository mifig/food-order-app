import React, { useState } from "react"

const CartContext = React.createContext({ cart: [], addToCartHandler: () => {}})

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([])

  const addToCartHandler = (dish, counter) => {
    setCart((prevCart) => {
      return [...prevCart, { dish: dish, quantity: counter }]
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCartHandler: addToCartHandler
      }}  
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext