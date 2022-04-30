import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../contexts/SceneContext';
import Scenes from "../utils/Scenes"
import useLoadAsset from '../utils/useLoadAsset';
import "../styles/intro.css"
import Image from '../utils/elements/Image';
import "../styles/monkey.css"
import HomeMap from '../iconMap';
import { BGContext } from '../contexts/Background';
import Scene1Map from './../maps/SceneOneMap';


export default function Home({ play }) {
  // const { Bg, Loading } = useLoadAsset(HomeMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)

  const [Loading, setLoading] = useState(true);
  const Scene1 = useLoadAsset(Scene1Map)

  useEffect(() => {
    setBg(Assets["Backgrounds"]?.sprites[0])
  }, [])

  useEffect(() => {
    if (!Loading && !Scene1.Loading) {
      setSceneId("/Scene1")
      play()
    }
  }, [Loading, Scene1.Loading])

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

        <div onClick={() => {
          const sound = Assets?.Backgrounds?.sounds[0]
          sound.play()
          sound.on('end', () => {
            setLoading(false)
          })
        }}>
          <Image
            src={Assets?.Backgrounds?.sprites[4]} className="play_btn" />
        </div>
      </>
    }
  />;
}
