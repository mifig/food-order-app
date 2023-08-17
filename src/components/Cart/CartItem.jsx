const CartItem = ({item}) => {
  return (
    <div key={item.dish.name} className="flex gap-3 items-center justify-between">
      <div className="flex gap-3 items-center">
        <img src={item.dish.img} alt={item.dish.name} className="object-cover w-12 h-12 rounded-full" />
        <div>
          <p className="text-white">{item.dish.name}</p>
          <p className="italic text-stone-100 text-sm opacity-50">${item.dish.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-lime-900 font-bold">x {item.quantity}</p>
        <p className="bg-stone-100 rounded-full px-2 py-1 border-2 border-lime-500 drop-shadow-sm text-stone-800 font-bold text-sm">$ {(item.dish.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartItem