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


export default function Scene4() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);
  const [NavTo, setNavTo] = useState("")
  const Scene2 = useCustomLoadAsset(ChopperMap)

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)


  useEffect(() => {
    setBg(Assets["Scene4"]?.Bg)
    const audio = Assets["Scene4"]?.sounds[0]
    audio?.play()

    audio.on("end", () => { setLoading(false) })


  }, [])

  useEffect(() => {
    if (!Loading && !Scene2.Loading && NavTo !== "") {
      setSceneId(NavTo)
    }
  }, [Scene2.Loading, Loading, NavTo]);

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <Image
          onClick={() => {

            setNavTo("/fruit")
            setLoading(false)
          }}
          src={Assets["Scene4"]?.sprites[0]}
          className="fruit_bowl"
        />

        <div className="fruits_name_bowl">
          Fruits
        </div>
        <div className="veg_name_bowl">Vegetables</div>

        <Image
          onClick={() => {
            setNavTo("/veg")
            setLoading(false)
          }}
          src={Assets["Scene4"]?.sprites[1]}
          className="vegi_bowl"
        />

      </>
    }
  />;
}
