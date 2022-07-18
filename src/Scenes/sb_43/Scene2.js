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
  const { Name, FGs, setSceneId, Assets, Starz, setStarz, Selected_fruits, setSelected_fruits, Selected_vegies, setSelected_vegies, playing, setplaying } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)



  const sprites = Assets?.Scene2?.sprites?.slice(0, 12)
  const remainingSprites = Assets["Scene2"].sprites.slice(12)

  // console.log(Assets?.Scene2?.sprites)

  let timer = null

  useEffect(() => {
    if (!playing) {
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

        {/* {star} */}

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
          style={{ bottom: "22.5%", zIndex: "999" }}
          src={remainingSprites[0].img}
          className="basket1" />

        <Image
          style={{ bottom: "22.5%", zIndex: "999" }}
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
                marginLeft: idx > 0 ? "-31px" : "",
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
                marginBottom: "10px"
              }}
            />
          })}
        </div>

        {/* name of fruits and vegies */}
        <div className="item_name">{Name.toLocaleLowerCase()}</div>

        {/* drop container */}
        <div className="drop_container_1">.</div>
        <div className="drop_container_2">.</div>

        {/* fruits and vegies part */}
        <div id="f_v_containers">
          {sprites?.map((v, idx) => {
            return <Image
              id={v?.url}
              style={{
                left: idx >= 6 ? `${26.5 + idx % 6 * 7}%` : `${27.5 + idx * 6.65}%`,
                zIndex: idx >= 6 ? 9 : 7,
                ...getStyles(v?.url),

              }}
              className={idx <= 5 ? "pos_1" : "pos_2"}
              src={v.img} />
          })}
        </div>
      </>
    }
  />;
}
