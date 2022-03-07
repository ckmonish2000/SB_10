import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"

import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/Scene2.css"
import { Stars2 } from './Stars';
import { BGContext } from '../../contexts/Background';


export default function Intro() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const { intro } = Assets

  const [count, setcount] = useState(1)
  const [starCount, setstarCount] = useState(1)
  const [countp1, setcountp1] = useState(0)
  const [Wrong, setWrong] = useState(0)
  const [Correct, setCorrect] = useState(0)

  const [swing, setswing] = useState(false)

  const Ref = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);

  const countRef = useRef(null);
  countRef.current = count


  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)
  const [paint, setpaint] = useState(false)

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

  const gen_nums = () => {
    const one = randomInt(0, 9)
    let two = randomInt(0, 9)

    while (two === one) {
      two = randomInt(0, 9)
    }


    setnum1(one)
    setnum2(two)
  }

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
    setBg(Assets["Backgrounds"]?.sprites[4])
    if (num1 == null && num2 === null) {
      gen_nums()
    }

    if (intro && Ref.current) {
      try {
        const ch = lottie.loadAnimation({
          name: "1",
          container: Ref.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets["Backgrounds"]?.lottie[2],
        })

        const ch2 = lottie.loadAnimation({
          name: "2",
          container: Ref2.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets["Backgrounds"]?.lottie[3],
        })

        ch2.addEventListener("complete", () => {
          setpaint(true)
        })


        const ch3 = lottie.loadAnimation({
          name: "wipe",
          container: Ref3.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: Assets["Backgrounds"]?.lottie[5],
        })


        const ch4 = lottie.loadAnimation({
          name: "blue",
          container: Ref4.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: Assets["Backgrounds"]?.lottie[4],
        })



      } catch (err) {
        console.log(err)
      }
    }


    Assets?.intro?.sounds[0]?.play()

  }, [])

  useEffect(() => {
    if (starCount === 6) {

      setSceneId("/mend")
    }
  }, [starCount])

  useEffect(() => {
    if (paint) {
      lottie.play("wipe")
      lottie.play("blue")
    }
  }, [paint])


  const Next = () => {
    stop_all_sounds()
    Assets?.intro?.sounds[1]?.play()
    setswing(true)
    setcountp1(count + 1)
    lottie.stop("swing")
    lottie.play("swing")
    setstarCount(starCount + 1)
    gen_nums()
  }

  console.log(Assets["Backgrounds"]?.lottie[5])

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* border 1 */}

        <Stars2
          count={starCount}
          board={Assets?.intro?.sprites[2]}
          grey={Assets?.intro?.sprites[3]}
          color={Assets?.intro?.sprites[4]}
          styles={["root_star_pos",
            { position: 'absolute', width: '100%', left: "0%" },
            "b_star_1",
            "b_star_2",
            "b_star_3",
            "b_star_4",
            "b_star_5",
          ]}
        />


        <span className='num_pos_1'
          onClick={() => {
            if (num1 > num2 && !swing) {
              setCorrect(1)
              setTimeout(() => { Next() }, 500)
            } else {
              stop_all_sounds()
              setWrong(1)
              Assets?.intro?.sounds[2]?.play()
            }
          }}
        >{num1}</span>


        <span
          onClick={() => {
            if (num1 < num2 && !swing) {
              setCorrect(2)
              setTimeout(() => { Next() }, 500)
            } else {
              stop_all_sounds()
              setWrong(2)
              Assets?.intro?.sounds[2]?.play()
            }
          }}
          className='num_pos_2'>{num2}</span>


        <div ref={Ref} className='yellow_lottie'></div>
        <div ref={Ref2} className='paint_pos_1' style={{ opacity: paint ? 0 : 1 }}></div>

        <div ref={Ref3} className='paint_pos_1' style={{ opacity: paint ? 1 : 0 }}></div>
        <div ref={Ref4} className='yellow_lottie'></div>

      </>
    }
  />;
}
