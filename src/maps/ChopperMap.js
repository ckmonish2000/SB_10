import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
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
  ],


  sounds: [
  ],

  lottie: [
  ]
}

export default ChopperMap 