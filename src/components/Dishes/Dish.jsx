import { useState, useContext } from "react"

import BuyCounter from "../UI/Buy/BuyCounter.jsx"
import CartContext from "../../contexts/cart-context.jsx"

const Dish = ({dish}) => {
  const [counter, setCounter] = useState(0)

  const cartContext = useContext(CartContext)

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter((prevCounter) => {
        return prevCounter -= 1
      })
    }
  }

  const increaseCounter = () => {
    setCounter((prevCounter) => {
      return prevCounter += 1
    })
  }

  const addToCartHandler = (event) => {
    event.preventDefault()
    cartContext.addToCartHandler(dish, counter)
  }

  return (
    <div className="border-b border-stone-200">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <img src={dish.img} alt={dish.name} className="object-cover w-20 h-20 rounded-full" />
          <div>
            <h3 className="text-stone-800">{dish.name}</h3>
            <p className="w-48 text-stone-400 text-sm italic truncate">{dish.description}</p>
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-28 items-center">
            <form onSubmit={addToCartHandler}>
              <div className="flex gap-6">
                  <div className="flex justify-center">
                    <button type="submit" className={`${counter === 0 ? "opacity-40" : "hover:border-white hover:drop-shadow-md"} bg-lime-500 border-2 border-lime-500 text-stone-100 font-bold text-sm rounded-full px-3 py-1`} 
                            disabled={counter === 0}>
                      + add
                    </button>
                  </div>
                  <BuyCounter decreaseCounterHandler={decreaseCounter} increaseCounterHandler={increaseCounter} counter={counter} />
              </div>
            </form>
            <p className="text-stone-800 text-sm">$ {dish.price.toFixed(2)}</p>
          </div>
          <div className="absolute -right-2 -bottom-6">
            <p className="text-sm text-stone-400">subtotal <span className="px-2 py-1 bg-stone-100 rounded-xl border border-stone-200 text-stone-800 font-bold">$ {(counter * dish.price).toFixed(2)}</span></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dish