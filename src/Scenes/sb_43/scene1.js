import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';
import "../../styles/Scene1.css"


export default function Scene1() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)

  const Ref1 = useRef(null)

  console.log(Assets?.Scene1)
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

      const audio = Assets["Scene1"]?.sounds[0]
      audio?.play()
      audio.on("end", () => { setSceneId("/Scene2") })
    }


  }, [])

  return <Scenes
    Bg={Bg}
    sprites={
      <>


        <div className="blue_shade">.</div>

        <div
          ref={Ref1}
          style={{ bottom: "-5px" }}
          className="scene1_blue_char_pos"></div>

      </>
    }
  />;
}
