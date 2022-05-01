import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import ChoppersMap from "./ChopperFnV"
import FoodMap from "./FruitsAndVeg"
import SoundMap from './sound';

const SoundSceneMap = {
  id: "sounds",

  Bg: `${imgUrl}sb_43/scene5/bg.svg`,

  sprites: [],


  sounds: [
    ...SoundMap.fruits,
    ...SoundMap.veg,
  ],

  lottie: [
  ]
}

export default SoundSceneMap 