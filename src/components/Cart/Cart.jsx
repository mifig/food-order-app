import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import CartContext from "../../contexts/cart-context"
import CartItem from "./CartItem"

const Cart = ({showCart}) => {
  const cartContext = useContext(CartContext)

  return (
    <div className={`${ showCart ? "w-4/12 px-10" : "w-0 px-0"} sticky top-28 h-fit min-h-[280px] flex flex-col transition-all delay-150 duration-300 overflow-hidden bg-gradient-to-r from-lime-600 from-40% to-emerald-600 shadow-stone-600 shadow-lg rounded-md py-8`}>
      <h3 className="flex gap-3 font-bold text-stone-100 drop-shadow-sm mb-8">
        <ShoppingCartIcon className='w-5'/>
        CHECKOUT
      </h3>

      <div className="flex flex-col gap-4">
        {cartContext.cart.length === 0 && 
          <p>No items in your cart</p>
        }

        {cartContext.cart.map((item) => {
          return <CartItem key={item.dish.name} item={item} />
        })}
      </div>
      
      <br />
      <hr />
      <br />

      <div className="flex flex-grow justify-between mb-5">
        <p className="font-bold text-stone-900">TOTAL</p>
        <p className="font-bold text-stone-900">$ {cartContext.cart.length > 0 ? cartContext.cart.reduce((total, item) => total + item.quantity * item.dish.price, 0).toFixed(2) : 0}</p>
      </div>

      <div className="flex gap-3 justify-end">
        <button className="px-3 py-1 border border-stone-100 rounded-full text-stone-100">Cancel</button>
        <button className="px-5 py-1 border border-lime-600 rounded-full text-lime-600 bg-stone-100 font-bold">Pay</button>
      </div>
    </div>
  )
}

export default Cart