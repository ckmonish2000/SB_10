import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../contexts/SceneContext';
import Scenes from "../utils/Scenes"
import useLoadAsset from '../utils/useLoadAsset';
import "../styles/intro.css"
import Image from '../utils/elements/Image';
import "../styles/monkey.css"
import HomeMap from '../iconMap';
import { BGContext } from '../contexts/Background';


export default function Home({ play }) {
  // const { Bg, Loading } = useLoadAsset(HomeMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  useEffect(() => {
    setBg(Assets["Backgrounds"]?.sprites[0])
  }, [])

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <Image
          src={Assets?.Backgrounds?.sprites[1]} className="title" />

        <Image
          src={Assets?.Backgrounds?.sprites[2]} className="intro_fg" />

        <Image
          src={Assets?.Backgrounds?.sprites[3]} className="title_font" />

        <Image
          src={Assets?.Backgrounds?.sprites[4]} className="play_btn" />

        {/* <div style={{ width: "10%" }} className="play_butn">
          <Image
            style={{ width: "100%" }}
            onClick={() => {
              setSceneId("/Scene1")
              play()
            }}
            src={Assets?.icons?.sprites[0]} />
        </div> */}


      </>
    }
  />;
}
