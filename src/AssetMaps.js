import { imgurl, soundurl, lottieurl } from "./utils/path"

const AllAssetMap = {
  // backgrounds & common lottie
  Bg: {
    id: "Backgrounds",

    Bg: ``,

    sprites: [
      `${imgurl}sb_43/intro_bg.svg`,
      `${imgurl}sb_43/intro_bg_text.svg`,
      `${imgurl}sb_43/road_bg.svg`,
      `${imgurl}sb_43/tree_bg.svg`,
      `${imgurl}sb_43/wall_bg.svg`,
      `${imgurl}sb_43/garage.svg`,
      `${imgurl}sb_43/well_done_bg.svg`,
      `${imgurl}replay.svg`,
      `${imgurl}sb_43/boy.svg`,
    ],


    sounds: [
      `${soundurl}scene1.mp3`,
      `${soundurl}beforetree.mp3`,
      `${soundurl}treeend.mp3`,
      `${soundurl}replayaudio.mp3`,
      `${soundurl}claps.mp3`,
    ],

    lottie: [
      `${lottieurl}sb_43/intro/bluecharacter.json`,
      `${lottieurl}sb_43/intro/yellowcharacter.json`,
      `${lottieurl}sb_43/scene3/ch_walking.json`,
      `${lottieurl}sb_43/scene3/paint_green.json`,
      `${lottieurl}sb_43/scene4/blue_ch_walk.json`,
      `${lottieurl}sb_43/scene4/wipe_paint.json`,
      `${lottieurl}sb_43/welldone_1.json`

    ]
  },


  // fg props
  Props: {
    id: "props",

    Bg: ``,

    sprites: [
      `${imgurl}sb_43/color_bucket.svg`,
      `${imgurl}sb_43/bus.svg`,
      `${imgurl}sb_43/tree/tree_house.svg`,
      `${imgurl}sb_43/tree/tree_branch.svg`,
      `${imgurl}sb_43/tree/woodenlog_1.svg`,
      `${imgurl}sb_43/tree/brown_leaf.svg`,
      `${imgurl}sb_43/tree/green_leaf.svg`,
      `${imgurl}sb_43/tree/progressbar_2.svg`,
      `${imgurl}sb_43/progress_bar_1.svg`,
      `${imgurl}sb_43/grey_star.svg`,
      `${imgurl}sb_43/star_icon.svg`,

    ],


    sounds: [
      // `${soundurl}intro.mp3`
    ],

    lottie: []
  },


  Scene2: {
    id: "intro",

    // Bg: `${imgurl}sb_42_bg_02.svg`,
    Bg: ``,

    sprites: [

      `${imgurl}sb_43/wall_text_box.svg`,
      `${imgurl}sb_43/invisble_box.svg`,
      `${imgurl}sb_43/garage_box.svg`,
      `${imgurl}sb_43/woodenlog.svg`,
      `${imgurl}sb_43/green_highlight_box.svg`,
      `${imgurl}sb_43/bus_green_highlight.svg`,
      `${imgurl}sb_43/box_red_highlight.svg`,
      `${imgurl}sb_43/box_yellow_highlight.svg`,
      `${imgurl}sb_43/pink_highlight.svg`,
      `${imgurl}sb_43/red_log_highlight.svg`,
    ],


    sounds: [
      `${soundurl}big_1.mp3`,
      `${soundurl}monkey_correct.mp3`,
      `${soundurl}wrong.mp3`,
      `${soundurl}big_2.mp3`,
      `${soundurl}treehouse_1.mp3`,

    ],

    lottie: [
    ]
  }
}


export default AllAssetMap