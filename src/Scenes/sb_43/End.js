import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';


export default function End({ BG_sound }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)

  const Ref1 = useRef(null)


  useEffect(() => {
    setBg(Assets["Backgrounds"]?.sprites[6])
    if (Ref1.current) {
      const ch = lottie.loadAnimation({
        name: "ch1",
        container: Ref1.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: Assets["Backgrounds"]?.lottie[6],
      })


      const audio = Assets["Backgrounds"]?.sounds[3]
      const audio2 = Assets["Backgrounds"]?.sounds[4]
      audio2?.play()
      audio2.on("end", () => { audio?.play() })
      // audio.on("end", () => { setSceneId("/Scene5") })
    }


  }, [])

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <div ref={Ref1} className="well_pos" ></div>

        <div style={{ left: "45.5%", width: "7.5%", bottom: "4%" }}
          className="paint_bucket">
          <Image
            src={Assets?.Backgrounds?.sprites[7]}
            style={{ width: "100%" }}
            onClick={() => {
              BG_sound?.stop()
              const audio = Assets["Backgrounds"]?.sounds[3]
              const audio2 = Assets["Backgrounds"]?.sounds[4]
              audio?.stop()
              audio2?.stop()
              setSceneId("/")
            }}
            id="vision" />
        </div>

      </>
    }
  />;
}
