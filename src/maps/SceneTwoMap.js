import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import FoodMap from "./FruitsAndVeg"

const Scene2Map = {
  id: "Scene2",

  Bg: `${imgUrl}sb_43/scene2/scene2_bg.svg`,

  sprites: [
    ...FoodMap.all,
    `${imgUrl}sb_43/scene3/Basket_Front.svg`,
    `${imgUrl}sb_43/scene3/Basket.svg`,
    `${imgUrl}sb_43/scene3/front_block.svg`,
  ],


  sounds: [
    `${soundUrl}correct.mp3`,
    `${soundUrl}incorrect.mp3`,
  ],

  lottie: [
    `${lottieUrl}Scene_01.json`
  ]
}

export default Scene2Map