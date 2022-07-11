import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import ChoppedMap from "./bowlFnV"
import ChoppersMap from "./ChopperFnV"
import FoodMap from "./FruitsAndVeg"

const ChopperMap = {
  id: "Scene5",

  Bg: `${imgUrl}sb_43/scene5/bg.svg`,

  sprites: [
    `${imgUrl}sb_43/scene5/bg.svg`,
    `${imgUrl}sb_43/scene5/board.svg`,
    `${imgUrl}sb_43/scene5/Name-Board.svg`,
    ...FoodMap.fruits,
    ...ChoppersMap.fruits,
    ...FoodMap.veg,
    ...ChoppersMap.veg,
    `${imgUrl}sb_43/Fruit-Bowl_0.svg`,
    `${imgUrl}sb_43/Fruit-Bowl_1.svg`,
    `${imgUrl}sb_43/Fruit-Bowl_2.svg`,
    `${imgUrl}sb_43/Fruits_bowl.svg`,
    `${imgUrl}sb_43/Veg-Bowl_1.svg`,
    `${imgUrl}sb_43/Veg-Bowl_2.svg`,
    `${imgUrl}sb_43/Veg-Bowl_3.svg`,
    ...ChoppedMap.fruits,
    ...ChoppedMap.veg,
  ],


  sounds: [
    `${soundUrl}selveg.mp3`,
    `${soundUrl}selfruits.mp3`,
    `${soundUrl}correct.mp3`,
    `${soundUrl}incorrect.mp3`,
    `${soundUrl}tap_fruit.mp3`,
    `${soundUrl}tap_vegies.mp3`,
  ],

  lottie: [
    `${lottieUrl}Burst.json`
  ]
}

export default ChopperMap 