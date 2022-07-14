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
import Scene5 from "./Scenes/sb_43/Scene5";
import GoodJob from "./Scenes/sb_43/Scene6";
import SoundScene from "./Scenes/sb_43/SoundsScene";
import { imgUrl } from "./utils/path";


function App() {
  const [Load, setLoad] = useState(true);
  const [BG_sound, setBG_sound] = useState(null)
  const [icon1, seticon1] = useState("")
  const [icon2, seticon2] = useState("")
  const [playing, setplaying] = useState(false)
  const [mute, setmute] = useState(false)
  const [LandScape, setLandScape] = useState(false)
  const [stars, setstars] = useState({
    progress: null,
    grey: null,
    star: null
  })
  const { SceneId, Assets, height, setheight, Starz, count, FGs, setFGs, Ipad, setIpad } = useContext(SceneContext);


  // const Map = [AllAssetMap.Bg, HomeMap, AllAssetMap.Props, AllAssetMap.Scene2]
  // const Asset = useAllAsset(Map)
  const Asset = useLoadAsset(introMap)

  const resizer = () => {
    console.log(window.innerWidth / window.innerHeight)
    setLandScape(window.innerWidth / window.innerHeight < 1.0)
    if (window.innerWidth <= 1264) {
      setheight("87%")
    } else {
      setheight("73%")
    }

    setIpad(window.innerWidth / window.innerHeight >= 1.3 && window.innerWidth / window.innerHeight <= 1.44)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)

    loadAudio()

    setIpad(window.innerWidth / window.innerHeight >= 1.3 && window.innerWidth / window.innerHeight <= 1.44)
    window.addEventListener("resize", resizer)

    return () => {
      window.removeEventListener("resize", resizer)
    }
  }, []);


  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee03_nt_1to100_btn/sounds/bg_sound.mp3"))
    seticon1(await LoadImage("ee03_nt_1to100_btn/images/sound.svg"))
    seticon2(await LoadImage("ee03_nt_1to100_btn/images/nosound.svg"))
    const progress_bar = await LoadImage(`${imgUrl}sb_43/stars/Progress_bar.svg`)
    const grey = await LoadImage(`${imgUrl}sb_43/stars/Grey_star.svg`)
    const star = await LoadImage(`${imgUrl}sb_43/stars/Star.svg`)
    const fg_1 = await LoadImage(`${imgUrl}sb_43/scene2/scene2_fg.svg`)
    const fg_2 = await LoadImage(`${imgUrl}sb_43/scene5/fg.svg`)
    const bowl_cover = await LoadImage(`${imgUrl}sb_43/Bowl_Frunt.svg`)
    setFGs({ fg_1, fg_2, bowl_cover })
    setstars({
      progress: progress_bar,
      grey,
      star
    })
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

  // if (LandScape) {
  //   return <h1 id="landscapeMode">Rotate your device</h1>
  // }

  if (Load && !Asset.Loading) return <div className="loadingIndicator">
    <div className="vendorWrapper"></div>
    <div className="playerPreloader">
      <div className="playerPreloadCircle"></div>
    </div>
  </div>


  return (
    <>
      {/* game one stars */}
      {/* {SceneId === "/Scene2" && <Stars
        // height={height}
        s={true}
        board={stars?.progress}
        color={stars?.star}
        grey={stars?.grey}
        count={Starz}
        total={12}
      />} */}

      <h1 style={{ display: LandScape ? "" : "none" }} id="landscapeMode">Rotate your device</h1>

      <div style={{ opacity: LandScape ? 0 : 1 }}>
        <GameContainer setLandScape={setLandScape} LandScape={LandScape}>
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
              star={<Stars
                // height={height}
                s={true}
                board={stars?.progress}
                color={stars?.star}
                grey={stars?.grey}
                count={Starz}
                total={12}
              />}
            />
          </Router>

          <Router sceneId="/Scene3">
            <Scene3 />
          </Router>

          <Router sceneId="/Scene4">
            <Scene4 />
          </Router>

          <Router sceneId="/fruit">
            <Scene5 />
          </Router>

          <Router sceneId="/veg">
            <Scene5 type="vegies" />
          </Router>

          <Router sceneId="/ahhaveg">
            <GoodJob type="veg" />
          </Router>

          <Router sceneId="/ahhafruits">
            <GoodJob />
          </Router>

          <Router sceneId="/soundfruit">
            <SoundScene />
          </Router>

          <Router sceneId="/soundveg">
            <SoundScene type="veg" />
          </Router>


        </GameContainer>
      </div>
    </>
  );
}

export default App;
