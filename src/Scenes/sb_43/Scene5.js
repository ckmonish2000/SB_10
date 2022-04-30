import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';
import "../../styles/Scene1.css"
import Scene2Map from '../../maps/SceneTwoMap';
import useCustomLoadAsset from '../../utils/useCustomLoadAsset';
import "../../styles/Scene4.css"
import ChopperMap from '../../maps/ChopperMap';


export default function Scene5() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);
  const Scene2 = useCustomLoadAsset(ChopperMap)


  useEffect(() => {
    setBg(Assets["Scene5"]?.Bg)
    // const audio = Assets["Scene5"]?.sounds[0]
    // audio?.play()

    // audio.on("end", () => { setLoading(false) })


  }, [])

  useEffect(() => {
    if (!Loading && !Scene2.Loading) {
      // setSceneId("/Scene2")
    }
  }, [Scene2.Loading, Loading]);

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <Image
          src={Assets["Scene4"]?.sprites[0]}
          className="fruit_bowl"
        />

        <Image
          src={Assets["Scene4"]?.sprites[1]}
          className="vegi_bowl"
        />

      </>
    }
  />;
}
