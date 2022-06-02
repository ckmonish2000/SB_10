import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/Scene2.css"
import { BGContext } from '../../contexts/Background';
import fruits_size_scene1 from '../../styles/customstyles';
import FoodMap from './../../maps/FruitsAndVeg';
import { imgUrl } from "../../utils/path"


export default function Scene2({ star }) {
  const { FGs, SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Starz, setStarz, height } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Name, setName] = useState("")
  const [Selected_fruits, setSelected_fruits] = useState([])
  const [Selected_vegies, setSelected_vegies] = useState([])
  const [playing, setplaying] = useState(true);

  const sprites = Assets?.Scene2?.sprites?.slice(0, 12)
  const remainingSprites = Assets["Scene2"].sprites.slice(24)

  let timer = null

  console.log(playing)
  useEffect(() => {
    if (!playing) {
      console.log("bro")
      timer = setTimeout(() => {
        setplaying(true)
        const Sound = Assets["Scene2"].sounds[2]?.sound
        Sound?.play()
        Sound?.on("end", () => {
          setplaying(false)
        })
      }, 2000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [playing])

  // loading animation
  useEffect(() => {
    setBg(Assets["Scene2"]?.Bg)

    const Sound = Assets["Scene2"].sounds[2]?.sound
    Sound?.play()
    Sound.on("end", () => {
      setplaying(false)
    })
  }, [])

  const fruit_names = Assets["Scene2"].sounds.slice(3)

  // this is main
  useEffect(() => {
    if (Starz === 12 && !playing) {
      // setTimeout(() => {
      stop_sound()
      setSceneId("/Scene3")
      setStarz(0)
      // }, 1500)
    }
  }, [Starz, playing])


  // this is for testing
  // useEffect(() => {
  //   stop_sound()
  //   setSceneId("/Scene3")
  // }, [])

  const getname = (url) => {
    const URL = url.split("/")
    return URL[URL.length - 1].split(".")[0]
  }

  const getStyles = (url) => {
    const key = getname(url)

    if (fruits_size_scene1[key]) {
      return fruits_size_scene1[key]
    }

    return {}
  }
  const check = (v) => (Selected_fruits?.includes(getname(v?.url)) || Selected_vegies?.includes(getname(v?.url)))

  const onFruitDrop = (e) => {
    const fruits = FoodMap?.fruits?.map(v => getname(v))
    const fruitName = e.dataTransfer.getData("text")

    if (fruits.includes(fruitName) && !Selected_fruits.includes(fruitName)) {
      const get_name_sound = Assets["Scene2"].sounds.slice(3)?.filter(v => getname(v.url) === fruitName + "_B")
      if (get_name_sound.length > 0) {
        const Sound = get_name_sound[0]?.sound
        setplaying(true)
        Sound?.play()
        Sound.on("end", () => {
          setplaying(false)
        })

      }
      setStarz(Starz + 1)
      // Assets["Scene2"]?.sounds[0]?.sound?.play()
      setSelected_fruits([...Selected_fruits, fruitName])
    } else {
      Assets["Scene2"]?.sounds[1]?.sound?.play()
    }

  }

  const onVegiesDrop = (e) => {
    const vegies = FoodMap?.veg?.map(v => getname(v))
    const vegiesName = e.dataTransfer.getData("text")

    if (vegies.includes(vegiesName) && !Selected_vegies.includes(vegiesName)) {
      const get_name_sound = Assets["Scene2"].sounds.slice(3)?.filter(v => getname(v.url) === vegiesName + "_B")
      if (get_name_sound.length > 0) {
        const Sound = get_name_sound[0]?.sound
        setplaying(true)
        Sound?.play()
        Sound.on("end", () => {
          setplaying(false)
        })
      }
      setStarz(Starz + 1)
      // Assets["Scene2"]?.sounds[0]?.sound?.play()
      setSelected_vegies([...Selected_vegies, vegiesName])
    } else {
      Assets["Scene2"]?.sounds[1]?.sound?.play()
    }

  }

  const stop_sound = () => {
    Assets["Scene2"]?.sounds?.forEach(v => v?.sound?.stop())
  }

  return <Scenes
    Bg={Bg}
    sprites={
      <>
        {/* stand */}
        <Image
          src={FGs.fg_1}
          className="fruits_stall"
        />

        {star}

        {/* basket names */}
        <h1 className="basket_name_1">Fruits</h1>
        <h1 className="basket_name_2">Vegetables</h1>

        {/* waste elements for look */}
        <Image src={remainingSprites[2].img} className="useless_board" />

        {/* baskets */}
        <Image src={remainingSprites[1].img} className="basket1" />
        <Image src={remainingSprites[1].img} className="basket2" />

        {/* basket cover */}
        <Image
          style={{ bottom: "31.5%", zIndex: "999" }}
          src={remainingSprites[0].img}
          className="basket1" />

        <Image
          style={{ bottom: "31.5%", zIndex: "999" }}
          src={remainingSprites[0].img}
          className="basket2" />

        {/* fruits and vegies in the basket */}

        {/* fruits */}
        <div className="basket_fruits">
          {Selected_fruits?.map((v, idx) => {
            const url = `${imgUrl}sb_43/fruits/${v}.svg`
            const img = sprites?.filter(va => va.url === url)
            return <Image
              src={img[0].img}
              style={{
                // display: idx > 5 ? "none" : "",
                width: "50px",
                ...getStyles(url),
                marginLeft: idx > 0 ? "-41px" : "",
                marginBottom: "-23px"
              }}
            />
          })}
        </div>

        {/* vegies */}
        <div className="basket_vegies">
          {Selected_vegies?.map((v, idx) => {
            const url = `${imgUrl}sb_43/vegies/${v}.svg`
            const img = sprites?.filter(va => va.url === url)
            return <Image
              src={img[0].img}
              style={{
                // display: idx > 5 ? "none" : "",
                width: "50px",
                ...getStyles(url),
                marginLeft: idx > 0 ? "-34px" : "",
              }}
            />
          })}
        </div>

        {/* name of fruits and vegies */}
        <div
          className="item_name"
        >{Name.toLocaleLowerCase()}</div>

        {/* drop container */}
        <div
          className="drop_container_1"
          onDrop={onFruitDrop}
          onDragOver={e => e.preventDefault()}
        >.</div>

        <div
          className="drop_container_2"
          onDrop={onVegiesDrop}
          onDragOver={e => e.preventDefault()}
        >.</div>

        {/* fruits and vegies part */}
        {sprites?.map((v, idx) => {
          return <div
            style={{
              opacity: check(v) ? 0 : 1
            }}
            id={getname(v?.url)}
            className="fruitsnveg"
            draggable
            onMouseDown={(e) => {
              if (timer) clearTimeout(timer)
              stop_sound()
              setName(e.currentTarget.id)
            }}
            onDragStart={(e) => {
              e.dataTransfer.setData("text", e.currentTarget.id)
            }}
            onMouseUp={(e) =>
              setTimeout(() => {
                setName("")
              }, 1200)
            }
            onDragEnd={() => setTimeout(() => {
              setName("")
            }, 1200)}
          >
            <Image
              id={v?.url}
              style={{
                left: idx >= 6 ? `${30 + idx % 6 * 7.5}%` : `${30 + idx * 7.5}%`,
                zIndex: idx >= 6 ? 9 : 7,
                ...getStyles(v?.url)
              }}
              className={idx <= 5 ? "pos_1" : "pos_2"}
              src={v.img} />
          </div>

        })}
      </>
    }
  />;
}
