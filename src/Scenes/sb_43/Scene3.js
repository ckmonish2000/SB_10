import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';
import "../../styles/Scene1.css"
import Scene2Map from '../../maps/SceneTwoMap';
import useCustomLoadAsset from '../../utils/useCustomLoadAsset';
import "../../styles/Scene3.css"


export default function Scene3() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);
  const Scene2 = useCustomLoadAsset(Scene2Map)

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)


  useEffect(() => {
    setBg(Assets["Scene1"]?.Bg)

    if (Ref1.current) {
      const ch = lottie.loadAnimation({
        name: "ch1",
        container: Ref1.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: Assets["Scene1"]?.lottie[0],
      })

      if (Ref2.current) {
        const ch = lottie.loadAnimation({
          name: "ch1",
          container: Ref2.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets["Scene1"]?.lottie[1],
        })
      }

      const audio = Assets["Scene1"]?.sounds[1]
      audio?.play()

      audio.on("end", () => { setLoading(false) })
    }


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


        <div className="blue_shade">.</div>

        <div
          ref={Ref1}
          style={{ bottom: "-5px" }}
          className="scene1_blue_char_pos"></div>

        <div
          ref={Ref2}
          className="verygood">
        </div>

      </>
    }
  />;
}
