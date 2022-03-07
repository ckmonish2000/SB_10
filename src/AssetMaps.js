import { imgUrl, soundUrl, lottieUrl } from "./utils/path"

const AllAssetMap = {
  // backgrounds & common lottie
  Bg: {
    id: "Backgrounds",

    Bg: ``,

    sprites: [
      `${imgUrl}sb_43/Intro_bg.svg`,
      `${imgUrl}sb_43/Intro-bg_Text.svg`,
      `${imgUrl}sb_43/Road_bg.svg`,
      `${imgUrl}sb_43/Tree_bg.svg`,
      `${imgUrl}sb_43/Wall_bg.svg`,
      `${imgUrl}sb_43/Garage.svg`,
      `${imgUrl}sb_43/Well_Done_bg.svg`,
    ],


    sounds: [
      // `${soundUrl}Intro.mp3`
    ],

    lottie: [
      `${lottieUrl}intro/bluecharacter.json`,
      `${lottieUrl}intro/yellowcharacter.json`,
      `${lottieUrl}scene3/Ch_Walking.json`,
      `${lottieUrl}scene3/paint_green.json`,
      `${lottieUrl}scene4/Blue_Ch_Walk.json`,
      `${lottieUrl}scene4/wipe_paint.json`,

    ]
  },

}


export default AllAssetMap