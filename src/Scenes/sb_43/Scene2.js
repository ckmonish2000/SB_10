import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/Scene2.css"
import { BGContext } from '../../contexts/Background';
import fruits_size_scene1 from '../../styles/customstyles';


export default function Scene2() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Starz, setStarz, height } = useContext(SceneContext);
  const [Name, setName] = useState("")
  const { Bg, setBg } = useContext(BGContext)

  const sprites = Assets?.Scene2?.sprites?.slice(0, 12)
  const remainingSprites = Assets["Scene2"].sprites.slice(24)

  // loading animation
  useEffect(() => {
    setBg(Assets["Scene2"]?.Bg)
  }, [])

  const getname = (url) => url.split("/")[4].split(".")[0]
  const getStyles = (url) => {
    const key = getname(url)

    if (fruits_size_scene1[key]) {
      return fruits_size_scene1[key]
    }

    return {}
  }

  console.log(Name)
  return <Scenes
    Bg={Bg}
    sprites={
      <>
        {/* basket names */}
        <h1 className="basket_name_1">Fruits</h1>
        <h1 className="basket_name_2">Vegetables</h1>

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

        <div
          className="item_name"
        >{Name}</div>

        {/* fruits and vegies part */}
        {sprites?.map((v, idx) => {
          return <div
            id={getname(v?.url)}
            className="fruitsnveg"
            draggable
            onMouseDown={(e) => setName(e.currentTarget.id)}
            onDragStart={(e) => {
              e.dataTransfer.setData("text", e.currentTarget.id)
            }}
            onMouseUp={(e) => setName("")}
            onDragEnd={() => setName("")}
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
