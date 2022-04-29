import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/Scene2.css"
import { BGContext } from '../../contexts/Background';


export default function Scene2() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Starz, setStarz, height } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)

  const sprites = Assets?.Scene2?.sprites?.slice(0, 12)
  const remainingSprites = Assets["Scene2"].sprites.slice(24)

  // loading animation
  useEffect(() => {
    setBg(Assets["Scene2"]?.Bg)
  }, [])



  return <Scenes
    Bg={Bg}
    sprites={
      <>

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

        {sprites?.map((v, idx) => {
          return <div>
            <Image
              id={v?.url}
              style={{ left: idx >= 6 ? `${30 + idx % 6 * 7.5}%` : `${30 + idx * 7.5}%` }}
              className={idx <= 5 ? "pos_1" : "pos_2"}
              src={v.img} />
          </div>

        })}
      </>
    }
  />;
}
