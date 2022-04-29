import { useState, useEffect, useContext } from "react"
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Home from "./Scenes/Home";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import { SceneContext } from "./contexts/SceneContext";
import useAllAsset from "./utils/useAllAssets";
import AllAssetMap from "./AssetMaps";
import HomeMap from "./iconMap";
import Scene1 from "./Scenes/sb_43/scene1";
import Scene2 from "./Scenes/sb_43/Scene2";
import Image from "./utils/elements/Image";
import Treehouse from "./Scenes/sb_43/treehouse";
import BeforeTree from "./Scenes/sb_43/BeforeTree";
import End from "./Scenes/sb_43/End";
import Stars from './Scenes/sb_43/Stars';
import useLoadAsset from "./utils/useLoadAsset";
import introMap from "./maps/introMap";


function App() {
  const [Load, setLoad] = useState(true);
  const [BG_sound, setBG_sound] = useState(null)
  const [icon1, seticon1] = useState("")
  const [icon2, seticon2] = useState("")
  const [playing, setplaying] = useState(false)
  const [mute, setmute] = useState(false)
  const { SceneId, Assets, height, setheight, Starz, count } = useContext(SceneContext);


  // const Map = [AllAssetMap.Bg, HomeMap, AllAssetMap.Props, AllAssetMap.Scene2]
  // const Asset = useAllAsset(Map)
  const Asset = useLoadAsset(introMap)

  const resizer = () => {
    if (window.innerWidth <= 1264) {
      setheight("87%")
    } else {
      setheight("73%")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)

    loadAudio()

    window.addEventListener("resize", resizer)

    return () => {
      window.removeEventListener("resize", resizer)
    }
  }, []);


  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee03_nt_1to100_btn/sounds/bg_sound.mp3"))
    seticon1(await LoadImage("ee03_nt_1to100_btn/images/sound.svg"))
    seticon2(await LoadImage("ee03_nt_1to100_btn/images/nosound.svg"))

  }

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/" && playing === false) {
      setplaying(true)
    }
  }, [BG_sound, SceneId])

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true)
      } else {
        BG_sound?.mute(false)
      }
    }
  }, [mute])

  const toggleMute = () => { setmute(!mute) }


  if (Load && !Asset.Loading) return <div className="intro_Loading_screen">Loading....</div>


  return (
    <>

      {/* game one stars */}
      {(SceneId === "/Scene2" || SceneId === "/Scene3" || SceneId === "/Scene3.5" || SceneId === "/Scene4" || SceneId === "/Scene4.5") && <Stars
        // height={height}
        s={true}
        board={Assets?.props?.sprites[8]}
        styles={[
          "progress_head_2",
          "star2",
          "star2",
          "star2",
          "star2",
          "star2",
        ]}
        color={Assets?.props?.sprites[10]}
        grey={Assets?.props?.sprites[9]}
        count={Starz}
      />}


      {/* second star */}

      {SceneId === "/Scene5" && <Stars
        board={Assets?.props?.sprites[7]}
        styles={[
          "progress_head",
          "star",
          "star",
          "star",
          "star",
          "star",
        ]}
        color={Assets?.props?.sprites[6]}
        grey={Assets?.props?.sprites[5]}
        count={count}
      />}

      <GameContainer>
        {!mute && SceneId !== "/" && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`} alt="" className="mute_btn" onClick={toggleMute} />}

        {mute && SceneId !== "/" && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`} alt="" className="mute_btn" onClick={toggleMute} />}

        <Router sceneId="/">
          <Home play={() => { BG_sound?.play() }} />
        </Router>

        <Router sceneId="/Scene1">
          <Scene1 />
        </Router>

        <Router sceneId="/Scene2">
          <Scene2
            // number positioning
            snd={3}
            bg={4}
            numbox={0}
            cw={[4, 6]}
            next="/Scene3"
            num={['num_pos_1', 'num_pos_2', 'num_pos_3']}
            box={["first_box", "second_box", "third_box"]}
            ani={['yellow_lottie', 'paint_pos_1']}
            second={["23%", "48%", "73%"]}
            third={[{
              left: "21.8%",
              fontSize: "780%",
              bottom: "48%"
            },
            {
              left: "46.8%",
              fontSize: "780%",
              bottom: "48%"
            },
            {
              left: "71.8%",
              fontSize: "780%",
              bottom: "48%"
            },
            ]}
          />
        </Router>

        <Router sceneId="/Scene3">
          <Scene2
            // number positioning
            cw={[5, 6]}
            snd={3}
            bg={2}
            numbox={1}
            next="/Scene3.5"
            num={['bus_num_pos1', 'bus_num_pos2', 'bus_num_pos3']}
            box={["bus_box_1", "bus_box_2", "bus_box_3"]}
            ani={['yellow_lottie', 'paint_pos_1']}
            second={["21.5%", "37%", "52.5%"]}
            third={[{
              left: "19.8%",
              fontSize: "780%",
            },
            {
              left: "35.8%",
              fontSize: "780%",
            },
            {
              left: "51.5%",
              fontSize: "780%",
            },
            ]}
            extra={<div>
              <Image src={Assets?.props?.sprites[1]} className="bus_pos" />
            </div>}
          />
        </Router>

        <Router sceneId="/Scene3.5">
          <Scene2
            // number positioning
            cw={[5, 6]}
            snd={3}
            bg={2}
            numbox={1}
            next="/Scene4"
            num={['bus_num_pos1', 'bus_num_pos2', 'bus_num_pos3']}
            box={["bus_box_1", "bus_box_2", "bus_box_3"]}
            ani={['yellow_lottie', 'paint_pos_1']}
            second={["21.5%", "37%", "52.5%"]}
            third={[{
              left: "19.8%",
              fontSize: "780%",
            },
            {
              left: "35.8%",
              fontSize: "780%",
            },
            {
              left: "51.5%",
              fontSize: "780%",
            },
            ]}
            extra={<div>
              <Image src={Assets?.props?.sprites[1]} className="bus_pos" />
            </div>}
          />
        </Router>



        <Router sceneId="/Scene4">
          <Scene2
            // number positioning
            cw={[4, 6]}
            snd={3}
            bg={5}
            numbox={2}
            next="/Scene4.5"
            num={['gar_num_1', 'gar_num_2', 'gar_num_3']}
            box={["gar_box_1", "gar_box_2", "gar_box_3"]}
            ani={['yellow_lottie', 'paint_pos_1']}
            second={["31%", "44%", "58.5%"]}
            third={[{
              left: "29.85%",
              bottom: "47.5%",
              fontSize: "780%",
            },
            {
              left: "43%",
              bottom: "47.5%",
              fontSize: "780%",
            },
            {
              left: "57.4%",
              bottom: "47.5%",
              fontSize: "780%",
            },
            ]}
          />
        </Router>

        <Router sceneId="/Scene4.5">
          <Scene2
            // number positioning
            cw={[4, 6]}
            snd={3}
            bg={5}
            numbox={2}
            next="/beforeTree"
            num={['gar_num_1', 'gar_num_2', 'gar_num_3']}
            box={["gar_box_1", "gar_box_2", "gar_box_3"]}
            ani={['yellow_lottie', 'paint_pos_1']}
            second={["31%", "44%", "58.5%"]}
            third={[{
              left: "29.85%",
              bottom: "47.5%",
              fontSize: "780%",
            },
            {
              left: "43%",
              bottom: "47.5%",
              fontSize: "780%",
            },
            {
              left: "57.4%",
              bottom: "47.5%",
              fontSize: "780%",
            },
            ]}
          />
        </Router>


        <Router sceneId="/beforeTree">
          <BeforeTree />
        </Router>

        <Router sceneId="/Scene5">
          <Treehouse
            bg={3}
            numbox={3}
            num={['wood_num_1', 'wood_num_2', 'wood_num_3']}
            box={["gar_box_1", "gar_box_2", "gar_box_3"]}
            second={["31.5%", "46%", "58.7%"]}
          />
        </Router>

        <Router sceneId="/End">
          <End BG_sound={BG_sound} />
        </Router>



      </GameContainer>
    </>
  );
}

export default App;
