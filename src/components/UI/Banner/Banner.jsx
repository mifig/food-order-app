import "./Banner.css"

const Banner = () => {
  return (
    <div className="relative">
      <div className="pt-40 h-96 bg-auto bg-cover rounded-br-full" style={{backgroundImage: "url('https://www.lovethegarden.com/sites/default/files/content/articles/UK_unusual-veg-romanesco.jpg')"}}>
        <h2 className="text-center mb-3 text-4xl font-bold text-stone-100 drop-shadow-lg">Your #1 Food Ordering App</h2>
        <p className="text-center text-stone-800 text-xl mb-10 drop-shadow-lg">Order your <strong className="text-lime-500 text-md">favorite dishes</strong> with this new improved app.</p>
      </div>
    </div>
  )
}

export default Banner