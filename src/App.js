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


function App() {
  const [Load, setLoad] = useState(true);
  const [BG_sound, setBG_sound] = useState(null)
  const [icon1, seticon1] = useState("")
  const [icon2, seticon2] = useState("")
  const [playing, setplaying] = useState(false)
  const [mute, setmute] = useState(false)
  const { SceneId, Assets } = useContext(SceneContext);


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
        <Scene2
          // number positioning
          bg={4}
          numbox={0}
          next="/Scene3"
          num={['num_pos_1', 'num_pos_2', 'num_pos_3']}
          box={["first_box", "second_box", "third_box"]}
          ani={['yellow_lottie', 'paint_pos_1']}
          second={["23.5%", "48.5%", "73.5%"]}
        />
      </Router>

      <Router sceneId="/Scene3">
        <Scene2
          // number positioning
          bg={2}
          numbox={1}
          next="/Scene4"
          num={['bus_num_pos1', 'bus_num_pos2', 'bus_num_pos3']}
          box={["bus_box_1", "bus_box_2", "bus_box_3"]}
          ani={['yellow_lottie', 'paint_pos_1']}
          second={["21.5%", "37%", "53%"]}
          extra={<div>
            <Image src={Assets?.props?.sprites[1]} className="bus_pos" />
          </div>}
        />
      </Router>


      <Router sceneId="/Scene4">
        <Scene2
          // number positioning
          bg={5}
          numbox={2}
          next="/Scene4"
          num={['gar_num_1', 'gar_num_2', 'gar_num_3']}
          box={["gar_box_1", "gar_box_2", "gar_box_3"]}
          ani={['yellow_lottie', 'paint_pos_1']}
          second={["21.5%", "37%", "53%"]}
        />
      </Router>


      <Router sceneId="/Scene5">
        <Treehouse
          bg={3}
          numbox={3}
          num={['wood_num_1', 'wood_num_2', 'wood_num_3']}
          box={["gar_box_1", "gar_box_2", "gar_box_3"]}
          second={["31.7%", "46%", "59.5%"]}
        />
      </Router>



    </GameContainer>
  );
}

export default App;
