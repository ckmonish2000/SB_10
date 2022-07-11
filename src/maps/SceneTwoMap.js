import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import FoodMap from "./FruitsAndVeg"
import FVNAMEMap from "./FVNAMEMAP"

const Scene2Map = {
  id: "Scene2",

  Bg: `${imgUrl}sb_43/scene2/scene2_bg.svg`,

  sprites: [
    // ...FoodMap.all,
    ...FoodMap.veg.slice(0, 6),
    ...FoodMap.fruits.slice(0, 6),
    `${imgUrl}sb_43/scene3/Basket_Front.svg`,
    `${imgUrl}sb_43/scene3/Basket.svg`,
    `${imgUrl}sb_43/scene3/front_block.svg`,
  ],


  sounds: [
    `${soundUrl}correct.mp3`,
    `${soundUrl}incorrect.mp3`,
    `${soundUrl}03.mp3`,
    ...FVNAMEMap.fruits,
    ...FVNAMEMap.veg
  ],

  lottie: [
    `${lottieUrl}Scene_01.json`
  ]
}

export default Scene2Map