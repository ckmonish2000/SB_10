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
      `${imgUrl}replay.svg`,
      `${imgUrl}sb_43/boy.svg`,
    ],


    sounds: [
      `${soundUrl}Scene1.mp3`,
      `${soundUrl}BeforeTree.mp3`,
      `${soundUrl}TreeEnd.mp3`,
      `${soundUrl}replayAudio.mp3`,
      `${soundUrl}claps.mp3`,
    ],

    lottie: [
      `${lottieUrl}sb_43/intro/bluecharacter.json`,
      `${lottieUrl}sb_43/intro/yellowcharacter.json`,
      `${lottieUrl}sb_43/scene3/Ch_Walking.json`,
      `${lottieUrl}sb_43/scene3/paint_green.json`,
      `${lottieUrl}sb_43/scene4/Blue_Ch_Walk.json`,
      `${lottieUrl}sb_43/scene4/wipe_paint.json`,
      `${lottieUrl}sb_43/welldone_1.json`

    ]
  },


  // fg props
  Props: {
    id: "props",

    Bg: ``,

    sprites: [
      `${imgUrl}sb_43/Color-Bucket.svg`,
      `${imgUrl}sb_43/Bus.svg`,
      `${imgUrl}sb_43/tree/Tree_house.svg`,
      `${imgUrl}sb_43/tree/Tree_branch.svg`,
      `${imgUrl}sb_43/tree/Woodenlog_1.svg`,
      `${imgUrl}sb_43/tree/Brown_leaf.svg`,
      `${imgUrl}sb_43/tree/Green_leaf.svg`,
      `${imgUrl}sb_43/tree/progressbar_2.svg`,
      `${imgUrl}sb_43/Progress_bar_1.svg`,
      `${imgUrl}sb_43/grey_star.svg`,
      `${imgUrl}sb_43/Star_icon.svg`,

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
      `${imgUrl}sb_43/Woodenlog.svg`,
      `${imgUrl}sb_43/Green_highlight_box.svg`,
      `${imgUrl}sb_43/Bus_Green_highlight.svg`,
      `${imgUrl}sb_43/box_red_highlight.svg`,
      `${imgUrl}sb_43/box_yellow_highlight.svg`,
      `${imgUrl}sb_43/Pink-highlight.svg`,
      `${imgUrl}sb_43/red_log_highlight.svg`,
    ],


    sounds: [
      `${soundUrl}big_1.mp3`,
      `${soundUrl}monkey_correct.mp3`,
      `${soundUrl}wrong.mp3`,
      `${soundUrl}big_2.mp3`,
      `${soundUrl}treehouse_1.mp3`,

    ],

    lottie: [
    ]
  }
}


export default AllAssetMap