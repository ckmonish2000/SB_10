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
      `${soundUrl}Scene1.mp3`
    ],

    lottie: [
      `${lottieUrl}sb_43/intro/bluecharacter.json`,
      `${lottieUrl}sb_43/intro/yellowcharacter.json`,
      `${lottieUrl}sb_43/scene3/Ch_Walking.json`,
      `${lottieUrl}sb_43/scene3/paint_green.json`,
      `${lottieUrl}sb_43/scene4/Blue_Ch_Walk.json`,
      `${lottieUrl}sb_43/scene4/wipe_paint.json`,

    ]
  },


  // fg props
  Props: {
    id: "props",

    Bg: ``,

    sprites: [
      `${imgUrl}sb_43/Color-Bucket.svg`,
      `${imgUrl}sb_43/Bus.svg`,
    ],


    sounds: [
      // `${soundUrl}Intro.mp3`
    ],

    lottie: []
  },


  Scene2: {
    id: "intro",

    Bg: `${imgUrl}SB_42_BG_02.svg`,

    sprites: [

      `${imgUrl}sb_43/wall_text_box.svg`,
      `${imgUrl}sb_43/invisble_box.svg`,
      `${imgUrl}sb_43/garage_box.svg`,
      `${imgUrl}sb_43/Woodenlog.svg`
    ],


    sounds: [

      `${soundUrl}monkey_1.mp3`,
      `${soundUrl}monkey_correct.mp3`,
      `${soundUrl}wrong.mp3`,
    ],

    lottie: [
    ]
  }
}


export default AllAssetMap