import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';


export default function Scene1() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)

  console.log(Assets?.Scene1)
  useEffect(() => {
    setBg(Assets["Scene1"]?.Bg)
    if (Ref1.current) {
      // const ch = lottie.loadAnimation({
      //   name: "ch1",
      //   container: Ref1.current,
      //   renderer: "svg",
      //   loop: true,
      //   autoplay: true,
      //   animationData: Assets["Backgrounds"]?.lottie[0],
      // })

      // const ch2 = lottie.loadAnimation({
      //   name: "ch2",
      //   container: Ref2.current,
      //   renderer: "svg",
      //   loop: true,
      //   autoplay: true,
      //   animationData: Assets["Backgrounds"]?.lottie[1],
      // })

      // const audio = Assets["Backgrounds"]?.sounds[0]
      // audio?.play()
      // audio.on("end", () => { setSceneId("/Scene2") })
    }


  }, [])

  return <Scenes
    Bg={Bg}
    sprites={
      <>


        {/* <Image src={Assets?.props?.sprites[0]} className="paint_bucket" id="vision" /> */}

        <div ref={Ref1} className="scene1_blue_char_pos"></div>
        <div ref={Ref2} className="scene1_yellow_char_pos"></div>

      </>
    }
  />;
}
