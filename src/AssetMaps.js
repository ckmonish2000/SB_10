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
      // `${imgUrl}Intro-Text.svg`,
      // `${imgUrl}play.svg`,
      `${imgUrl}FG_monkey.svg`,
      `${imgUrl}pink_box.svg`,
      `${imgUrl}monkey/bar.svg`,
      `${imgUrl}monkey/grey.svg`,
      `${imgUrl}monkey/banana.svg`,
      `${imgUrl}red_border.svg`,
      `${imgUrl}green_border.svg`
    ],


    sounds: [
      // `${soundUrl}Intro.mp3`
      `${soundUrl}monkey_1.mp3`,
      // `${soundUrl}monkey_2.mp3`,
      `${soundUrl}monkey_correct.mp3`,
      `${soundUrl}wrong.mp3`,
    ],

    lottie: [
      // `${lottieUrl}Scene_01.json`,
      `${lottieUrl}Monkey_Hanging.json`,
      `${lottieUrl}Monkey_02.json`
    ]
  }
}


export default AllAssetMap