import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import Image from '../../utils/elements/Image';
import lottie from "lottie-web"
import { BGContext } from '../../contexts/Background';
import "../../styles/Scene1.css"
import Scene2Map from '../../maps/SceneTwoMap';
import useCustomLoadAsset from '../../utils/useCustomLoadAsset';
import "../../styles/Scene4.css"
import ChopperMap from '../../maps/ChopperMap';
import fruits_size_scene1 from './../../styles/customstyles';


export default function Scene5({ type = "fruits" }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({})

  const Ref = useRef(null)

  const elements_sprites = Assets["Scene5"].sprites?.slice(0, 3)

  const fruits = Assets["Scene5"].sprites?.slice(4, 17)
  const cut_fruits = Assets["Scene5"].sprites?.slice(18, 32)

  const vegies = Assets["Scene5"].sprites?.slice(33, 41)
  const cut_vegies = Assets["Scene5"].sprites?.slice(42)

  const get_objects = () => {
    if (type === "fruits") return { item: fruits, cutitems: cut_fruits }
    if (type === "vegies") return { item: vegies, cutitems: cut_vegies }
  }


  useEffect(() => {
    setData(get_objects())
  }, [])

  useEffect(() => {
    setBg(Assets["Scene5"]?.Bg)
    // const audio = Assets["Scene5"]?.sounds[0]
    // audio?.play()

    // audio.on("end", () => { setLoading(false) })


  }, [])

  // useEffect(() => {
  //   if (!Loading && !Scene2.Loading) {
  //     // setSceneId("/Scene2")
  //   }
  // }, [Scene2.Loading, Loading]);


  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* shelf */}
        <div>
          {Data?.item?.slice(0, 6)?.map((v, idx) => {
            const item_name = v.url.split("/")[4].split(".")[0]
            return <Image
              onClick={(e) => { e.target.className = "move_to_board" }}
              src={v.img}
              style={{
                width: "60px",
                ...fruits_size_scene1[item_name],
                ...positions[idx],
                margin: "0px"
              }}
            />
          })}
        </div>

        {/* cuttingboard */}
        <Image
          src={Assets["Scene5"]?.sprites[1]?.img}
          className="cutting_board"
        />
      </>
    }
  />;
}


const positions = {
  0: {
    position: "fixed",
    bottom: "56%",
    left: "61%"
  },
  1: {
    position: "fixed",
    bottom: "56%",
    left: "70%"
  },
  2: {
    position: "fixed",
    bottom: "40%",
    left: "61.5%"
  },
  3: {
    position: "fixed",
    bottom: "40%",
    left: "70.5%"
  },
  4: {
    position: "fixed",
    bottom: "25%",
    left: "61.5%"
  },
  5: {
    position: "fixed",
    bottom: "25%",
    left: "70.5%"
  }

}
