const BuyCounter = ({counter, decreaseCounterHandler, increaseCounterHandler}) => {
  
  return (
    <div className="flex gap-6">
      <button type="button" className={`text-lg ${counter===0 ? "text-stone-300" : "text-stone-700"}`} onClick={decreaseCounterHandler} disabled={counter === 0}>-</button>
      <p className="w-10 justify-center flex items-center text-sm rounded-full border-2 border-stone-200 text-stone-700 px-3">{counter}</p>
      <button type="button" className="text-lg text-stone-700" onClick={increaseCounterHandler}>+</button>
    </div>
  )
}

export default BuyCounter