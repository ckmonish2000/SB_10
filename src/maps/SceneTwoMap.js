import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import FoodMap from "./FruitsAndVeg"

const Scene2Map = {
  id: "Scene2",

  Bg: `${imgUrl}sb_43/scene2/scene2_bg.svg`,

  sprites: [
    ...FoodMap.all
  ],


  sounds: [
    `${soundUrl}02.mp3`,
  ],

  lottie: [
    `${lottieUrl}Scene_01.json`
  ]
}

export default Scene2Map