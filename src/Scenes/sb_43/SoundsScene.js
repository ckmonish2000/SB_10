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

  console.log(Data, Assets["sounds"])
  return <Scenes
    Bg={Bg}
    sprites={
      <>


        <div className="blue_shade">.</div>
        <div className="grid_item_display">
          {Data?.map(v => {
            return <Image
              style={{ width: "250px", height: "250px" }}
              src={v.img}
              className=""
            />
          })}

        </div>
      </>
    }
  />;
}
