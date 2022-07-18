import { imgurl, soundurl, lottieurl } from "../utils/path"
import ChoppedMap from "./bowlFnV"
import ChoppersMap from "./ChopperFnV"
import FoodMap from "./FruitsAndVeg"

const ChopperMap = {
  id: "Scene5",

  Bg: `${imgurl}sb_43/scene5/bg.svg`,

  sprites: [
    `${imgurl}sb_43/scene5/bg.svg`,
    `${imgurl}sb_43/scene5/board.svg`,
    `${imgurl}sb_43/scene5/name_board.svg`,
    ...FoodMap.fruits,
    ...ChoppersMap.fruits,
    ...FoodMap.veg,
    ...ChoppersMap.veg,
    `${imgurl}sb_43/fruit_bowl_0.svg`,
    `${imgurl}sb_43/fruit_bowl_1.svg`,
    `${imgurl}sb_43/fruit_bowl_2.svg`,
    `${imgurl}sb_43/fruits_bowl.svg`,
    `${imgurl}sb_43/veg_bowl_1.svg`,
    `${imgurl}sb_43/veg_bowl_2.svg`,
    `${imgurl}sb_43/veg_bowl_3.svg`,
    ...ChoppedMap.fruits,
    ...ChoppedMap.veg,
  ],


  sounds: [
    `${soundurl}selveg.mp3`,
    `${soundurl}selfruits.mp3`,
    `${soundurl}correct.mp3`,
    `${soundurl}incorrect.mp3`,
    `${soundurl}tap_fruit.mp3`,
    `${soundurl}tap_vegies.mp3`,
  ],

  lottie: [
    `${lottieurl}burst.json`
  ]
}

export default ChopperMap 