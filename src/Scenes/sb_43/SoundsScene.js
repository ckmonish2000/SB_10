import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';
import "../../styles/Scene1.css"
import Scene2Map from '../../maps/SceneTwoMap';
import useCustomLoadAsset from '../../utils/useCustomLoadAsset';


export default function SoundScene({ type = "fruits" }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Data } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);
  const Scene2 = useCustomLoadAsset(Scene2Map)

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)

  useEffect(() => {
    setBg(Assets["sounds"]?.Bg)

  }, [])

  // useEffect(() => {
  //   if (!Loading && !Scene2.Loading) {
  //     setSceneId("/Scene2")
  //   }
  // }, [Scene2.Loading, Loading]);

  const get_name = (url) => {
    let x = url.split("/")
    x = x[x.length - 1].split(".")[0]
    return x
  }

  return <Scenes
    Bg={Bg}
    sprites={
      <>


        <div className="blue_shade">.</div>
        <div className="grid_item_display">
          {Data?.map(v => {
            return <div>
              <Image
                style={{ width: "150px", height: "150px" }}
                src={v.img}
                className=""
              />
              <h1
                className="name_card_sounf"
                style={{ textAlign: "center" }}>{get_name(v.url)}</h1>
            </div>
          })}

        </div>
      </>
    }
  />;
}
