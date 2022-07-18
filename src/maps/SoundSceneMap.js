import { imgurl, soundurl, lottieurl } from "../utils/path"
import ChoppersMap from "./ChopperFnV"
import FoodMap from "./FruitsAndVeg"
import SoundMap from './sound';

const SoundSceneMap = {
  id: "sounds",

  Bg: `${imgurl}sb_43/scene5/bg.svg`,

  sprites: [
    `${imgurl}sb_43/homeicon.svg`
  ],


  sounds: [
    ...SoundMap.fruits,
    ...SoundMap.veg,
    `${soundurl}replayaudio.mp3`,
    `${soundurl}tap_learn_fruit.mp3`,
    `${soundurl}tap_learn_vegie.mp3`,
    `${soundurl}fru_snd.mp3`,
    `${soundurl}veg_snd.mp3`,
  ],

  lottie: [
  ]
}

export default SoundSceneMap 