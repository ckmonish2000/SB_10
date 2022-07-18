import { imgurl, soundurl, lottieurl } from "../utils/path"
import FoodMap from "./FruitsAndVeg"
import FVNAMEMap from "./FVNAMEMAP"

const Scene2Map = {
  id: "Scene2",

  Bg: `${imgurl}sb_43/scene2/scene2_bg.svg`,

  sprites: [
    // ...FoodMap.all,
    ...FoodMap.veg.slice(0, 6),
    ...FoodMap.fruits.slice(0, 6),
    `${imgurl}sb_43/scene3/basket_front.svg`,
    `${imgurl}sb_43/scene3/basket.svg`,
    `${imgurl}sb_43/scene3/front_block.svg`,
  ],


  sounds: [
    `${soundurl}correct.mp3`,
    `${soundurl}incorrect.mp3`,
    `${soundurl}03.mp3`,
    ...FVNAMEMap.fruits,
    ...FVNAMEMap.veg
  ],

  lottie: [
    `${lottieurl}scene_01.json`
  ]
}

export default Scene2Map