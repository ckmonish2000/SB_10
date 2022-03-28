import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"

import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/Scene2.css"
import Stars, { Stars2 } from './Stars';
import { BGContext } from '../../contexts/Background';
import { gen_nums } from './helper';


export default function Treehouse({ num, box, bg, numbox, second }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, count, setcount } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)



  const [starCount, setstarCount] = useState(1)
  const [countp1, setcountp1] = useState(0)
  const [Wrong, setWrong] = useState(0)
  const [Correct, setCorrect] = useState(0)


  const countRef = useRef(null);
  countRef.current = count

  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)
  const [num3, setnum3] = useState(null)
  const [playing, setplaying] = useState(true)
  let timer = null




  const stop_all_sounds = () => {
    Assets?.intro?.sounds?.map(v => v.stop())
  }

  useEffect(() => {
    setTimeout(() => {
      setWrong(0)
    }, 2000)
  }, [Wrong])


  useEffect(() => {
    setTimeout(() => {
      setCorrect(0)
    }, 1000)
  }, [Correct])

  // loading animation
  useEffect(() => {
    setBg(Assets["Backgrounds"]?.sprites[bg])

    if (num1 == null && num2 === null && num2 === null) {
      gen_nums(setnum1, setnum2, setnum3)
    }

    const sound = Assets?.intro?.sounds[4]
    sound?.play()
    sound?.on("end", () => { setplaying(false) })
  }, [])


  useEffect(() => {
    if (count === 5) {
      setTimeout(() => {
        const audio = Assets?.Backgrounds?.sounds[2]
        audio?.play()
        audio?.on("end", () => {
          stop_all_sounds()
          setplaying(false)
          setSceneId("/End")
        })
      }, 1000)
    }
  }, [count])

  useEffect(() => {
    if (!playing) {
      timer = setTimeout(() => {
        setplaying(true)
        const sound = Assets?.intro?.sounds[4]
        sound?.play()
        sound?.on("end", () => { setplaying(false) })
      }, 10000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [playing])


  const Switch_now = () => {
    // setSceneId(next)
    setTimeout(() => {
      gen_nums(setnum1, setnum2, setnum3)
    }, 2000)

    setcount(count + 1)

  }

  const first_click = () => {
    if (timer) clearTimeout(timer)
    if (num1 > num2 && num1 > num3) {
      stop_all_sounds()
      setCorrect(1)
      setWrong(0)
      Assets?.intro?.sounds[1]?.play()
      Switch_now()
    } else if (Correct === 0) {
      stop_all_sounds()
      setWrong(1)
      setCorrect(0)
      Assets?.intro?.sounds[2]?.play()
    }
  }

  const second_click = () => {
    if (timer) clearTimeout(timer)
    if (num2 > num1 && num2 > num3) {
      stop_all_sounds()
      Assets?.intro?.sounds[1]?.play()
      setCorrect(2)
      setWrong(0)
      Switch_now()
    } else if (Correct === 0) {
      stop_all_sounds()
      setWrong(2)
      setCorrect(0)
      Assets?.intro?.sounds[2]?.play()
    }
  }

  const third_click = () => {
    if (timer) clearTimeout(timer)
    if (num3 > num1 && num3 > num2) {
      stop_all_sounds()
      Assets?.intro?.sounds[1]?.play()
      setCorrect(3)
      setWrong(0)
      Switch_now()
    } else if (Correct === 0) {
      stop_all_sounds()
      setWrong(3)
      setCorrect(0)
      Assets?.intro?.sounds[2]?.play()
    }
  }


  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* <Stars
          board={Assets?.props?.sprites[7]}
          styles={[
            "progress_head",
            "star",
            "star",
            "star",
            "star",
            "star",
          ]}
          color={Assets?.props?.sprites[6]}
          grey={Assets?.props?.sprites[5]}
          count={count}
        /> */}
        {count !== 5 && <span>
          {/* numbers */}
          <span className={num[0]}
            style={{ left: `${num1}`.length === 2 ? second[0] : "", zIndex: 3 }}
            onClick={first_click}
          >{num1}</span>

          <span
            style={{ left: `${num2}`.length === 2 ? second[1] : "48%", zIndex: 3 }}
            onClick={second_click}
            className={num[1]}>{num2}</span>

          <span
            style={{ left: `${num3}`.length === 2 ? second[2] : "", zIndex: 3 }}
            onClick={third_click}
            className={num[2]}>{num3}</span>

          {/* numbers box*/}
          <Image
            onClick={first_click}
            src={Assets["intro"]?.sprites[numbox]} className={box[0]}
            style={{ bottom: "5%", zIndex: 2 }} />

          <Image
            onClick={second_click}
            src={Assets["intro"]?.sprites[numbox]}
            className={box[1]}
            style={{ bottom: "5%", zIndex: 2, left: "44%" }} />

          <Image
            onClick={third_click}
            src={Assets["intro"]?.sprites[numbox]}
            className={box[2]}
            style={{ bottom: "5%", zIndex: 2 }} />

          {Correct !== 0 && <Image src={Assets["intro"]?.sprites[8]} className={box[Correct - 1]} style={{ zIndex: 99999, bottom: "5%", left: Correct === 2 ? "44%" : "" }} />}
          {Wrong !== 0 && <Image src={Assets["intro"]?.sprites[9]} className={box[Wrong - 1]} style={{ zIndex: 99999, bottom: "5%", left: Wrong === 2 ? "44%" : "" }} />}
        </span>}
        {/* house */}
        <Image
          src={Assets["props"]?.sprites[2]}
          className="treeHouse"
        />

        <Image
          src={Assets["props"]?.sprites[3]}
          className="treehouse_branch"
        />


        {/* logs */}

        {count > 0 && <Image
          // id="slide-in-bck-center"
          src={Assets["props"]?.sprites[4]}
          className="tree_log_1"
        />}



        {count > 1 && <Image
          // id="slide-in-bck-center"
          src={Assets["props"]?.sprites[4]}
          className="tree_log_2"
        />}

        {count > 2 && <Image
          // id="slide-in-bck-center"
          src={Assets["props"]?.sprites[4]}
          className="tree_log_3"
        />}

        {count > 3 && <Image
          // id="slide-in-bck-center"
          src={Assets["props"]?.sprites[4]}
          className="tree_log_4"
        />}



        {count > 4 && <Image
          // id="slide-in-bck-center"
          src={Assets["props"]?.sprites[4]}
          className="tree_log_5"
        />}


        {/* boy */}
        {count > 4 &&
          <Image
            onClick={first_click}
            src={Assets["Backgrounds"]?.sprites[8]} className="boy"
          />}
      </>
    }
  />;
}
