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
import useCustomLoadAsset2 from '../../utils/useCustomLoadAssets2';
import SoundSceneMap from '../../maps/SoundSceneMap';


export default function Scene5({ type = "fruits" }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Data, setData, FGs } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Loading, setLoading] = useState(true);

  const Ref = useRef(null)
  const AssetsLoad = useCustomLoadAsset2(SoundSceneMap)

  const [TheChoosenOnes, setTheChoosenOnes] = useState([]);
  const [BowlChoosen, setBowlChoosen] = useState([]);
  const [Item, setItem] = useState([])
  const [Chopped, setChopped] = useState([])
  const [showChopped, setshowChopped] = useState(false);
  const [clicked, setclicked] = useState(false);

  const [Selected, setSelected] = useState([]);
  const [Selected2, setSelected2] = useState([]);
  const [ShowCloud, setShowCloud] = useState(false)
  const [showName, setshowName] = useState(false);
  const [show_Board_effect, setshow_Board_effect] = useState(false);
  const [playing, setplaying] = useState(true);

  const [star, setstar] = useState(0)

  const elements_sprites = Assets["Scene5"].sprites?.slice(0, 3)

  const fruits = Assets["Scene5"].sprites?.slice(4, 17)
  const cut_fruits = Assets["Scene5"].sprites?.slice(18, 32)

  const vegies = Assets["Scene5"].sprites?.slice(33, 41)
  const cut_vegies = Assets["Scene5"].sprites?.slice(42)

  const bowls = Assets["Scene5"].sprites?.slice(51)
  const empty_bowl = bowls[0]
  const fruit_bowls = bowls.slice(1, 4)
  const veg_bowls = bowls.slice(4, 7)
  // cut elements
  const cut_bowls_fruits = bowls.slice(7, 22)
  const cut_bowl_vegies = bowls.slice(22)

  let timer = null


  const stop_sound = () => {
    Assets["Scene5"]?.sounds?.forEach(v => { v?.sound.stop() })
  }

  const get_objects = () => {
    if (type === "fruits") return { item: fruits, cutitems: cut_fruits, bowls: cut_bowls_fruits }
    if (type === "vegies") return { item: vegies, cutitems: cut_vegies, bowls: cut_bowl_vegies }
  }

  // get 3 random numbers
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
    if (!playing) {
      timer = setTimeout(() => {
        setplaying(true)
        const length = Assets["Scene5"]?.sounds?.length
        const audio = type === "fruits" ? Assets["Scene5"]?.sounds[1]?.sound : Assets["Scene5"]?.sounds[0]?.sound
        const audio2 = type === "fruits" ? Assets["Scene5"]?.sounds[length - 2]?.sound : Assets["Scene5"]?.sounds[length - 1]?.sound
        audio?.play()
        audio.on("end", () => { audio2?.play() })
        audio2.on("end", () => { setplaying(false) })
      }, 10000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [playing])

  useEffect(() => {
    const obj = get_objects()
    const item = obj.item?.slice(0, 6)
    setData(item)
    setItem(item) // global state

    let sel = get_nums()
    sel = sel.map(v => item[v])
    const selected_names = sel?.map(v => get_name(v.url))
    let chopped = obj?.cutitems?.filter(v => selected_names.includes(get_name(v.url)) && v?.url?.includes("/cut/"))
    let bowl = obj?.bowls?.filter(v => selected_names.includes(get_name(v.url)))

    setTheChoosenOnes(sel) // the fruits on the name board
    setChopped(chopped) // chopped version of the fruits on the name board
    setBowlChoosen(bowl)

    setTimeout(() => {
      setshowName(true)
    }, 500)

  }, [])

  const get_name = (url) => {
    if (url) {
      let x = url?.split("/")
      x = x[x?.length - 1]?.split(".")[0]
      return x
    }
  }

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

    const length = Assets["Scene5"]?.sounds?.length

    const audio = type === "fruits" ? Assets["Scene5"]?.sounds[1]?.sound : Assets["Scene5"]?.sounds[0]?.sound
    audio?.play()

    const audio2 = type === "fruits" ? Assets["Scene5"]?.sounds[length - 2]?.sound : Assets["Scene5"]?.sounds[length - 1]?.sound
    audio.on("end", () => { audio2?.play() })
    audio2.on("end", () => { setplaying(false) })

    setTimeout(() => {
      setshow_Board_effect(true)
    }, 2000)

    setTimeout(() => {
      setshow_Board_effect(false)
    }, 5000)

  }, [])


  useEffect(() => {
    if (ShowCloud) {
      setTimeout(() => {
        setShowCloud(false)
      }, 1200)
    }
  }, [ShowCloud])

  useEffect(() => {
    if (showChopped) {
      setTimeout(() => {
        setshowChopped(false)
        setstar(star + 1)
      }, 2500)
    }
  }, [showChopped]);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setclicked(false)
      }, 6500)
    }
  }, [clicked]);


  useEffect(() => {
    if (Selected2.length === 3 && AssetsLoad?.Loading === false) {
      setTimeout(() => {
        stop_sound()
        setSceneId(type === "fruits" ? "/ahhafruits" : "/ahhaveg")
      }, 1200)
    }
  }, [Selected2, AssetsLoad]);

  // useEffect(() => {
  //   if (!Loading && !Scene2.Loading) {
  //     // setSceneId("/Scene2")
  //   }
  // }, [Scene2.Loading, Loading]);

  const get_bowl_type = () => {
    if (type === "fruits") {
      return fruit_bowls
    } else {
      return veg_bowls
    }
  }

  // console.log(BowlChoosen, "clicked")

  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <Image
          src={FGs.fg_2}
          className="kitchen_stall"
        />



        {/* bowls */}
        <Image
          src={FGs?.bowl_cover}
          className="bowl_cover"
        />
        <Image
          src={empty_bowl.img}
          className="bowl_pos"
        />
        <div>

          {Selected2.includes(get_name(BowlChoosen[0]?.url)) && <Image
            src={BowlChoosen[0]?.img}
            className={`bowl_pos_${Selected2?.indexOf(get_name(BowlChoosen[0]?.url))}`}
          />}

          {Selected2.includes(get_name(BowlChoosen[1]?.url)) && <Image
            src={BowlChoosen[1]?.img}
            className={`bowl_pos_${Selected2?.indexOf(get_name(BowlChoosen[1]?.url))}`}
          />}

          {Selected2.includes(get_name(BowlChoosen[2]?.url)) && <Image
            src={BowlChoosen[2]?.img}
            className={`bowl_pos_${Selected2?.indexOf(get_name(BowlChoosen[2]?.url))}`}
          />}
        </div>

        {/* {star === 1 && <Image
          src={get_bowl_type()[0]?.img}
          className="bowl_pos"
        />}

        {star === 2 && <Image
          src={get_bowl_type()[1]?.img}
          className="bowl_pos"
        />}

        {star === 3 && <Image
          src={get_bowl_type()[2]?.img}
          className="bowl_pos"
        />} */}

        {/* name Board */}
        <Image
          style={{ filter: show_Board_effect ? "drop-shadow(2px 6px 25px yellow)" : "" }}
          className="NameBoard"
          src={Assets["Scene5"]?.sprites[2]?.img}
        />

        {/* nameBoard names */}
        {showName && <div className="NameBoardNames">
          {TheChoosenOnes?.map(val => {
            return <h1 className="name_indi">
              <Image src={val.img} style={{ width: "30px", marginRight: "10px" }} />
              {get_name(val.url)?.toLocaleLowerCase()}
            </h1>
          })}
        </div>}

        {/* shelf */}
        <div>
          {Item.map((v, idx) => {
            const item_name = v.url.split("/")[4].split(".")[0]
            return <Image
              id={item_name}
              onClick={(e) => {
                if (!clicked) {
                  setplaying(true)
                  stop_sound()
                  const answers = TheChoosenOnes?.map(v => get_name(v.url))
                  if (answers.includes(item_name)) {
                    setclicked(true)
                    // show magic
                    setTimeout(() => {
                      setShowCloud(true)
                    }, 2800)

                    setTimeout(() => {
                      setshowChopped(true)
                    }, 2980)

                    // wait until the item appears on the board
                    setTimeout(() => {
                      setSelected([...Selected, item_name])
                    }, 3000)

                    setTimeout(() => {
                      setSelected2([...Selected, item_name])
                      setplaying(false)
                    }, 5500)

                    e.target.className = "move_to_board"

                    Assets["Scene5"]?.sounds[2]?.sound?.play()
                  } else {
                    Assets["Scene5"]?.sounds[3]?.sound?.play()
                  }
                }
              }}
              src={v.img}
              style={{
                width: "60px",
                ...fruits_size_scene1[item_name],
                ...positions[idx],
                margin: "0px",
                opacity: Selected.includes(item_name) ? 0 : 1,
                cursor: Selected.includes(item_name) ? "" : "pointer"
              }}
            />
          })}
        </div>

        {/* cubboard names */}
        {Item.map((v, idx) => {
          return <h1 className={name_position[idx]}>{get_name(v.url)?.toLocaleLowerCase()}</h1>
        })}

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


        {/* chopped Display */}
        {Chopped?.map(v => {
          return <Image
            id={get_name(v.url)}
            style={{
              opacity: Selected[Selected.length - 1] === get_name(v.url) && showChopped ? 1 : 0,
              width: get_name(v.url) === "Cabbage" ? "5%" : "",
              left: get_name(v.url) === "Cabbage" ? "38%" : ""
            }}
            className="chopped_fruits"
            src={v.img}
          />
        })}
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


const name_position = {
  0: "pos_name_1",
  1: "pos_name_2",
  2: "pos_name_3",
  3: "pos_name_4",
  4: "pos_name_5",
  5: "pos_name_6",
}