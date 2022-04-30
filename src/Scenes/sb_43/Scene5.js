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
import { shuffle } from './../../maps/FruitsAndVeg';


export default function Scene5({ type = "fruits" }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({})
  const [TheChoosenOnes, setTheChoosenOnes] = useState([]);
  const [Item, setItem] = useState([])

  const [Selected, setSelected] = useState([]);
  const [ShowCloud, setShowCloud] = useState(false)

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

  const get_nums = () => {
    const maximum = 5
    const minimum = 0
    const randomnumber1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let randomnumber2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let randomnumber3 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    while (randomnumber2 === randomnumber1 || randomnumber2 === randomnumber3) {
      randomnumber2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    while (randomnumber3 === randomnumber1 || randomnumber3 === randomnumber2) {
      randomnumber3 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    return [randomnumber1, randomnumber2, randomnumber3]
  }

  useEffect(() => {
    setData(get_objects())
    const item = get_objects().item?.slice(0, 6)
    setItem(item)
    let sel = get_nums()
    sel = sel.map(v => item[v])
    setTheChoosenOnes(sel)

  }, [])


  console.log(TheChoosenOnes, ".")
  useEffect(() => {
    setBg(Assets["Scene5"]?.Bg)

    if (Ref.current) {
      const ch = lottie.loadAnimation({
        name: "ch1",
        container: Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: Assets["Scene5"]?.lottie[0],
      })
    }
    // const audio = Assets["Scene5"]?.sounds[0]
    // audio?.play()

    // audio.on("end", () => { setLoading(false) })


  }, [])


  useEffect(() => {
    if (ShowCloud) {
      setTimeout(() => {
        setShowCloud(false)
      }, 1500)
    }
  }, [ShowCloud])
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
          {Item.map((v, idx) => {
            const item_name = v.url.split("/")[4].split(".")[0]
            return <Image
              onClick={(e) => {
                // show magic
                setTimeout(() => {
                  setShowCloud(true)
                }, 2800)

                // wait until the item appears on the board
                setTimeout(() => {
                  setSelected([...Selected, item_name])
                }, 3000)

                e.target.className = "move_to_board"
              }}
              src={v.img}
              style={{
                width: "60px",
                ...fruits_size_scene1[item_name],
                ...positions[idx],
                margin: "0px",
                opacity: Selected.includes(item_name) ? 0 : 1
              }}
            />
          })}
        </div>

        {/* cuttingboard */}
        <Image
          src={Assets["Scene5"]?.sprites[1]?.img}
          className="cutting_board"
        />

        {/* cloud */}
        <div
          style={{ opacity: ShowCloud ? 1 : 0 }}
          ref={Ref}
          className="cloud"></div>
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
