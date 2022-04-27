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

  const sprites = shuffle(Assets?.Scene2?.sprites)?.slice(0, 12)
  console.log(Assets?.Scene2?.sprites?.slice(1, sprites.length))
  // loading animation
  useEffect(() => {
    setBg(Assets["Scene2"]?.Bg)
  }, [])


  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }



  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <Image
          src={sprites[1]}
          className="hello"
        />
        {sprites?.map((v, idx) => {
          return <Image
            style={{ left: idx >= 6 ? `${30 + idx % 6 * 7.5}%` : `${30 + idx * 7.5}%` }}
            className={idx <= 5 ? "pos_1" : "pos_2"}
            src={v} />
        })}
      </>
    }
  />;
}
