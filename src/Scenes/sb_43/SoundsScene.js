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
  const [Played, setPlayed] = useState([])

  const [count, setcount] = useState(0)

  const Ref1 = useRef(null)
  const Ref2 = useRef(null)

  useEffect(() => {
    setBg(Assets["sounds"]?.Bg)

    const sounds_count = Assets["sounds"]?.sounds?.length
    const Sound1 = Assets["sounds"]?.sounds[sounds_count - 2]?.sound
    const Sound2 = Assets["sounds"]?.sounds[sounds_count - 1]?.sound

    const sound_1 = Assets["sounds"]?.sounds[sounds_count - 4]?.sound
    const sound_2 = Assets["sounds"]?.sounds[sounds_count - 3]?.sound

    if (type === "fruits") {
      Sound1?.play()
      Sound1?.on("end", () => { sound_1.play() })
    } else {
      Sound2?.play()
      Sound2?.on("end", () => { sound_2.play() })
    }
  }, [])



  useEffect(() => {
    if (Played.length === 6 && Playing === "") {
      const sounds_count = Assets["sounds"]?.sounds?.length
      const Sound1 = Assets["sounds"]?.sounds[sounds_count - 5]?.sound
      Sound1?.play()
      // Sound1?.on("end",()=>{})

    }
  }, [Played, Playing]);

  const get_name = (url) => {
    let x = url.split("/")
    x = x[x.length - 1]?.split(".")[0]
    return x
  }

  const stop_sound = () => {
    Assets["sounds"]?.sounds?.forEach(v => v?.sound?.stop())
  }


  const Click = (v) => {
    const sound = Assets["sounds"].sounds?.filter(val => get_name(val?.url) === get_name(v?.url))
    if (sound.length > 0) {
      stop_sound()
      // setPlaying("")
      setcount(count + 1)

      setPlaying(get_name(v.url))
      const audio = sound[0]?.sound
      audio?.play()

      audio?.on("end", () => { setPlaying("") })

      if (!Played?.includes(v)) {
        const played = [...Played]
        played.push(v)
        setPlayed(played)
      }
    }
  }

  console.log(Played)

  return <Scenes
    Bg={Bg}
    sprites={
      <>


        <div className="blue_shade">.</div>
        <div className="grid_item_display" style={{ cursor: "default" }}>
          {Data?.map((v, idx) => {
            return <div
              className="test_box"
              style={{ height: "50%", cursor: "default" }}>
              <Image
                onClick={() => Click(v)}
                style={{
                  height: "90%",
                  cursor: "pointer",
                  zIndex: "9999",
                  ...fruit_pos[idx]
                }}
                src={v.img}
              // className={Playing === get_name(v?.url) ? "sel_bro" : "sel_bro"}
              />

              {Playing === get_name(v?.url) && <div style={sel_pos[idx]} className="sels_bro">.</div>}
              <h1
                onClick={() => Click(v)}
                className="name_card_sounf"
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  ...board_pos[idx]
                }}>{get_name(v?.url)?.toLocaleLowerCase()}</h1>
            </div>
          })}
        </div>

        {Played.length >= 6 && <Image
          style={{
            left: "69%",
            width: "5%"
          }}
          src={Assets["sounds"]?.sprites[0]?.img}
          className="home_btn"
          onClick={() => {
            stop_sound()
            setSceneId("/")
          }}
        />}
      </>
    }
  />;
}


const sel_pos = {
  0: {
    position: "fixed",
    left: "25.2%",
    top: "45%"
  },
  1: {
    position: "fixed",
    left: "42.2%",
    top: "45%"
  },
  2: {
    position: "fixed",
    left: "57.5%",
    top: "45%"
  },
  // 
  3: {
    position: "fixed",
    left: "25.2%",
    top: "73%"
  },
  4: {
    position: "fixed",
    left: "42.2%",
    top: "73%"
  },
  5: {
    position: "fixed",
    left: "57.5%",
    top: "73%"
  }
}

const fruit_pos = {
  0: {
    position: "fixed",
    left: "25.5%",
    top: "47%",
    width: "7%",
    height: "12%"
  },
  1: {
    position: "fixed",
    left: "42.5%",
    top: "47%",
    width: "7%",
    height: "12%"
  },
  2: {
    position: "fixed",
    left: "57.7%",
    top: "47%",
    width: "7%",
    height: "12%"
  },
  3: {
    position: "fixed",
    left: "25.5%",
    top: "76%",
    width: "7%",
    height: "12%"
  },
  4: {
    position: "fixed",
    left: "42.5%",
    top: "76%",
    width: "7%",
    height: "12%"
  },
  5: {
    position: "fixed",
    left: "57.7%",
    top: "76%",
    width: "7%",
    height: "12%"
  },
}


const board_pos = {
  0: {
    position: "fixed",
    left: "24.5%",
    top: "60%"
  },
  1: {
    position: "fixed",
    left: "41.2%",
    top: "60%"
  },
  2: {
    position: "fixed",
    left: "56.5%",
    top: "60%"
  },
  3: {
    position: "fixed",
    left: "24.5%",
    top: "87%",
  },
  4: {
    position: "fixed",
    left: "41.2%",
    top: "87%",
  },
  5: {
    position: "fixed",
    left: "56.5%",
    top: "87%",
  }
}