import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import "./Navbar.css"
import { useContext } from 'react'
import CartContext from '../../../contexts/cart-context'

const Navbar = ({showCartHandler}) => {
  const cartContext = useContext(CartContext)

  return (
    <div className="bg-invert z-10 px-10 py-5 flex justify-between bg-gradient-to-r from-lime-500/90 to-lime-400/30 fixed top-0 right-0 left-0">
      <h1 className="text-lime-50 text-2xl drop-shadow-lg flex justify-center items-center">ReactMeals</h1>
      <button className='flex text-lime-50 bg-gradient-to-r from-lime-600 from-40% to-emerald-600 rounded-xl px-3 py-2 text-sm gap-2 border-2 border-lime-600 hover:shadow-none hover:border-2 hover:border-lime-100 items-center' onClick={showCartHandler}>
        <ShoppingCartIcon className='w-5'/>
        <p>Checkout</p>
        <p className='rounded-full bg-stone-100 px-3 py-0.5 flex justify-center text-lime-700 items-center font-bold'>{cartContext.cart.length}</p>
      </button>
    </div>
  )
}

export default Navbar


