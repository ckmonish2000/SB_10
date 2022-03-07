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
import Scene2 from "./Scenes/intro/Scene2";


function App() {
  const [Load, setLoad] = useState(true);
  const [BG_sound, setBG_sound] = useState(null)
  const [icon1, seticon1] = useState("")
  const [icon2, seticon2] = useState("")
  const [playing, setplaying] = useState(false)
  const [mute, setmute] = useState(false)
  const { SceneId } = useContext(SceneContext);


  const Map = [AllAssetMap.Bg, HomeMap, AllAssetMap.Props, AllAssetMap.Scene2]
  const Asset = useAllAsset(Map)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)

    loadAudio()
  }, []);


  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("internal/sounds/bg_sound.mp3"))
    seticon1(await LoadImage("internal/images/sound.svg"))
    seticon2(await LoadImage("internal/images/nosound.svg"))

  }

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/home" && playing === false) {
      BG_sound?.play()
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


  if (Load || Asset?.Loading) return <div className="intro_Loading_screen">Loading....</div>


  return (
    <GameContainer>
      {!mute && SceneId !== "/home" && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`} alt="" className="mute_btn" onClick={toggleMute} />}
      {mute && SceneId !== "/home" && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`} alt="" className="mute_btn" onClick={toggleMute} />}

      <Router sceneId="/">
        <Home />
      </Router>

      <Router sceneId="/Scene1">
        <Scene1 />
      </Router>

      <Router sceneId="/Scene2">
        <Scene2 />
      </Router>


      {/* <Router sceneId="/Summer">
        <Animation sceneName="summer" />
      </Router> */}



    </GameContainer>
  );
}

export default App;
