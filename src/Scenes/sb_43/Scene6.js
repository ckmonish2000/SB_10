import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';
import "../../styles/Scene1.css"
import Scene2Map from '../../maps/SceneTwoMap';
import useCustomLoadAsset from '../../utils/useCustomLoadAsset';


export default function GoodJob({ type = "fruits" }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, FGs, BowlChoosen, setBowlChoosen } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);

  const bowls = Assets["Scene5"].sprites?.slice(51)
  const empty_bowl = bowls[0]

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)

  useEffect(() => {
    setBg(Assets["Scene4"]?.Bg)
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
          autoplay: false,
          animationData: Assets["Scene1"]?.lottie[1],
        })
      }

      const audio = type === "fruits" ? Assets["Scene1"]?.sounds[2] : Assets["Scene1"]?.sounds[3]
      audio?.play()

      audio.on("end", () => { setLoading(false) })
    }


  }, [])

  useEffect(() => {
    if (!Loading) {
      setSceneId(type === "fruits" ? "/soundfruit" : "/soundveg")
    }
  }, [Loading]);

  return <Scenes
    Bg={Bg}
    sprites={
      <>


        {/* <div className="blue_shade">.</div> */}

        <div
          ref={Ref1}
          style={{ bottom: "-5px" }}
          className="scene1_blue_char_pos"></div>

        {/* bowl */}
        <Image
          src={FGs?.bowl_cover}
          style={{ bottom: "17%", left: "35%" }}
          className="bowl_cover"
        />
        <Image
          src={empty_bowl.img}
          style={{ bottom: "15%", left: "35%" }}
          className="bowl_pos"
        />

        {/* selected */}
        {
          BowlChoosen?.map((v, idx) => {
            return <Image
              src={BowlChoosen[idx]?.img}
              style={{
                marginLeft: idx === 2 ? "-10px" : "",
                bottom: "24%",
                left: idx === 0 ? "35%" : (idx === 1 ? "37%" : "40%")
              }}
              className={`bowl_pos_${idx}`}
            />
          })
        }


        <div
          ref={Ref2}
          style={{ bottom: "34%", width: "15%" }}
          className="verygood">
        </div>
      </>
    }
  />;
}
