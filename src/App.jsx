import { useState, useContext } from "react"

import './App.css'
import Navbar from './components/UI/Navbar/Navbar'
import Banner from './components/UI/Banner/Banner'
import DishesList from './components/Dishes/DishesList'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from "./contexts/cart-context"

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  return (
    <CartContextProvider>
      <div className='relative mb-10'>
        <Navbar showCartHandler={showCartHandler} />
        <Banner />

        <div className='flex mx-10 mt-20'>
          <DishesList />
          <Cart showCart={showCart} />
        </div>
      </div>
    </CartContextProvider>
  )
}

export default App
