import { imgUrl, soundUrl, lottieUrl } from "./utils/path"

const AllAssetMap = {
  // backgrounds & common lottie
  Bg: {
    id: "Backgrounds",

    Bg: ``,

    sprites: [
      `${imgUrl}sb_43/intro_bg.svg`,
      `${imgUrl}sb_43/intro_bg_text.svg`,
      `${imgUrl}sb_43/road_bg.svg`,
      `${imgUrl}sb_43/tree_bg.svg`,
      `${imgUrl}sb_43/wall_bg.svg`,
      `${imgUrl}sb_43/garage.svg`,
      `${imgUrl}sb_43/well_done_bg.svg`,
      `${imgUrl}replay.svg`,
      `${imgUrl}sb_43/boy.svg`,
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
  },


  // fg props
  Props: {
    id: "props",

    Bg: ``,

    sprites: [
      `${imgUrl}sb_43/color_bucket.svg`,
      `${imgUrl}sb_43/bus.svg`,
      `${imgUrl}sb_43/tree/tree_house.svg`,
      `${imgUrl}sb_43/tree/tree_branch.svg`,
      `${imgUrl}sb_43/tree/woodenlog_1.svg`,
      `${imgUrl}sb_43/tree/brown_leaf.svg`,
      `${imgUrl}sb_43/tree/green_leaf.svg`,
      `${imgUrl}sb_43/tree/progressbar_2.svg`,
      `${imgUrl}sb_43/progress_bar_1.svg`,
      `${imgUrl}sb_43/grey_star.svg`,
      `${imgUrl}sb_43/star_icon.svg`,

    ],


    sounds: [
      // `${soundurl}intro.mp3`
    ],

    lottie: []
  },


  Scene2: {
    id: "intro",

    // Bg: `${imgUrl}sb_42_bg_02.svg`,
    Bg: ``,

    sprites: [

      `${imgUrl}sb_43/wall_text_box.svg`,
      `${imgUrl}sb_43/invisble_box.svg`,
      `${imgUrl}sb_43/garage_box.svg`,
      `${imgUrl}sb_43/woodenlog.svg`,
      `${imgUrl}sb_43/green_highlight_box.svg`,
      `${imgUrl}sb_43/bus_green_highlight.svg`,
      `${imgUrl}sb_43/box_red_highlight.svg`,
      `${imgUrl}sb_43/box_yellow_highlight.svg`,
      `${imgUrl}sb_43/pink_highlight.svg`,
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