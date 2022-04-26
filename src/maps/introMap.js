import { imgUrl, soundUrl, lottieUrl } from "../utils/path"

const introMap = {
  id: "Backgrounds",

  Bg: `${imgUrl}sb_43/intro_bg.svg`,

  sprites: [
    `${imgUrl}sb_43/intro/intro_bg.svg`,
    `${imgUrl}sb_43/intro/intro_charecter.svg`,
    `${imgUrl}sb_43/intro/intro_FG.svg`,
    `${imgUrl}sb_43/intro/intro_font.svg`,
    `${imgUrl}play.svg`,
  ],


  sounds: [
    `${soundUrl}scene1.mp3`,
    `${soundUrl}beforetree.mp3`,
    `${soundUrl}treeend.mp3`,
    `${soundUrl}replayaudio.mp3`,
    `${soundUrl}claps.mp3`,
  ],

  lottie: [
    `${lottieUrl}sb_43/intro/bluecharacter.json`,
    `${lottieUrl}sb_43/intro/yellowcharacter.json`,
    `${lottieUrl}sb_43/scene3/ch_walking.json`,
    `${lottieUrl}sb_43/scene3/paint_green.json`,
    `${lottieUrl}sb_43/scene4/blue_ch_walk.json`,
    `${lottieUrl}sb_43/scene4/wipe_paint.json`,
    `${lottieUrl}sb_43/welldone_1.json`

  ]
}

export default introMap