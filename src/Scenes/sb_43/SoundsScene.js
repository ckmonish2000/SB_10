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
  const [Playing, setPlaying] = useState("");

  const [count, setcount] = useState(0)

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)

  useEffect(() => {
    setBg(Assets["sounds"]?.Bg)

  }, [])

  // useEffect(() => {
  //   if (count === 6) {
  //     setSceneId("/")
  //   }
  // }, [count]);

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
            return <div
              style={{ height: "280px" }}
              onClick={() => {
                if (Playing === "") {
                  const sound = Assets["sounds"].sounds?.filter(val => get_name(val.url) === get_name(v.url))
                  if (sound.length > 0) {
                    setPlaying(get_name(v.url))
                    const audio = sound[0]?.sound
                    audio?.play()
                    audio.on('end', () => {
                      setPlaying("")
                      setcount(count + 1)
                    })

                  }
                }
              }}
            >
              <Image
                style={{ width: "150px", height: "150px" }}
                src={v.img}
                className={Playing === get_name(v.url) ? "sel_bro" : ""}
              />
              <h1
                className="name_card_sounf"
                style={{ textAlign: "center" }}>{get_name(v.url)}</h1>
            </div>
          })}
        </div>

        {count === 6 && <Image
          src={Assets["sounds"]?.sprites[0]?.img}
          className="home_btn"
          onClick={() => { setSceneId("/") }}
        />}
      </>
    }
  />;
}
