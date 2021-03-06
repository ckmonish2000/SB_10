import { imgUrl, soundUrl, lottieUrl } from "../utils/path"

const Scene1Map = {
  id: "Scene1",

  Bg: `${imgUrl}sb_43/scene2/scene2_bg.svg`,

  sprites: [
    `${imgUrl}sb_43/scene2/scene2_bg.svg`,
  ],


  sounds: [
    `${soundUrl}02.mp3`,
    `${soundUrl}verygood.mp3`,
    `${soundUrl}ahhaFruit.mp3`,
    `${soundUrl}ahhaVeg.mp3`,
  ],

  lottie: [
    `${lottieUrl}Scene_01.json`,
    `${lottieUrl}excel_text.json`,
  ]
}

export default Scene1Map