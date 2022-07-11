import { imgUrl, soundUrl, lottieUrl } from "../utils/path"
import ChoppersMap from "./ChopperFnV"
import FoodMap from "./FruitsAndVeg"
import SoundMap from './sound';

const SoundSceneMap = {
  id: "sounds",

  Bg: `${imgUrl}sb_43/scene5/bg.svg`,

  sprites: [
    `${imgUrl}sb_43/HomeIcon.svg`
  ],


  sounds: [
    ...SoundMap.fruits,
    ...SoundMap.veg,
    `${soundUrl}replayaudio.mp3`,
    `${soundUrl}tap_learn_fruit.mp3`,
    `${soundUrl}tap_learn_vegie.mp3`,
    `${soundUrl}fru_snd.mp3`,
    `${soundUrl}veg_snd.mp3`,
  ],

  lottie: [
  ]
}

export default SoundSceneMap 