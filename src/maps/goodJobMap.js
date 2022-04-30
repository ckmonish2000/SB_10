import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import ChoppersMap from "./ChopperFnV"
import FoodMap from "./FruitsAndVeg"

const ChopperMap = {
  id: "Scene6",

  Bg: `${imgUrl}sb_43/scene4/bg.svg`,

  sprites: [
    `${imgUrl}sb_43/Fruit-Bowl_0.svg`,
    `${imgUrl}sb_43/Fruit-Bowl_1.svg`,
    `${imgUrl}sb_43/Fruit-Bowl_2.svg`,
    `${imgUrl}sb_43/Fruit-Bowl.svg`,
    `${imgUrl}sb_43/Veg-Bowl_1.svg`,
    `${imgUrl}sb_43/Veg-Bowl_2.svg`,
    `${imgUrl}sb_43/Veg-Bowl_3.svg`,
    `${imgUrl}sb_43/Vegitable_bowl.svg`,
  ],


  sounds: [

  ],

  lottie: [
    `${lottieUrl}Burst.json`
  ]
}

export default ChopperMap 