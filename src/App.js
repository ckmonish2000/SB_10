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
import Stars from './Scenes/sb_43/Stars';
import useLoadAsset from "./utils/useLoadAsset";
import introMap from "./maps/introMap";
import Scene3 from './Scenes/sb_43/Scene3';
import Scene4 from "./Scenes/sb_43/Scene4";


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
          <Scene2 />
        </Router>

        <Router sceneId="/Scene3">
          <Scene3 />
        </Router>

        <Router sceneId="/Scene4">
          <Scene4 />
        </Router>


      </GameContainer>
    </>
  );
}

export default App;
