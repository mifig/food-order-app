import Dish from "./Dish"

const DishesList = () => {
  const dishes = [
    { name: "Sushi", description: "Finest fish and veggies", price: 22.99, img: "https://fusedbyfionauyema.com/wp-content/uploads/2021/02/Fused-by-Fiona-Uyema-Sushi-Q-A-how-to-make-sushi-at-home.jpg" },
    { name: "Shcnitzel", description: "A german specialty!", price: 16.50, img: "https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg" },
    { name: "Barbecue Burger", description: "American, raw, meaty", price: 12.99, img: "https://thecuriousplate.com/wp-content/uploads/2018/04/Barbecue-Bourbon-Burgers-www.climbinggriermountain.com_.jpg-3.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" },
    { name: "Green Bowl", description: "Healthy... and green...", price: 18.99, img: "https://www.mydarlingvegan.com/wp-content/uploads/2017/12/Green-Goddess-4.jpg" }
  ]

  return (
    <div className="mx-20 grow">
      <h2 className="font-bold text-stone-700 mb-4">SHOPPING CART</h2>
      {dishes.map((dish, index) => {
        return (
          <Dish dish={dish} key={index} />
        )
      })}
    </div>
  )
}

export default DishesList