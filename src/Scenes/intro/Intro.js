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
  const [num3, setnum3] = useState(null)
  const [paint, setpaint] = useState(false)
  const [final, setfinal] = useState(false)

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

  const gen_nums = () => {
    const one = randomInt(1, 10)
    let two = randomInt(1, 10)
    let three = randomInt(1, 10)

    while (two === one || two === three) {
      two = randomInt(1, 10)
    }

    while (three === one || two === three) {
      three = randomInt(1, 10)
    }

    setnum1(one)
    setnum2(two)
    setnum3(three)
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

    if (num1 == null && num2 === null && num2 === null) {
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


        ch4.addEventListener("complete", () => { setfinal(true) })

      } catch (err) {
        console.log(err)
      }
    }

    Assets?.intro?.sounds[0]?.play()
  }, [])



  useEffect(() => {
    if (paint) {
      lottie.play("wipe")
      lottie.play("blue")
    }
  }, [paint])



  console.log(Correct)

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* numbers */}
        <span className='num_pos_1'
          style={{ left: `${num1}`.length === 2 ? "23.5%" : "", zIndex: final ? 999999 : "" }}
          onClick={() => {
            if (num1 > num2 && num1 > num3 && !swing) {
              setCorrect(1)
              // setTimeout(() => { Next() }, 500)
            } else {
              stop_all_sounds()
              setWrong(1)
              Assets?.intro?.sounds[2]?.play()
            }
          }}
        >{num1}</span>

        <span
          style={{ zIndex: final ? 999999 : "" }}
          onClick={() => {
            if (num2 > num1 && num2 > num3 && !swing) {
              setCorrect(2)
              // setTimeout(() => { Next() }, 500)
            } else {
              stop_all_sounds()
              setWrong(2)
              Assets?.intro?.sounds[2]?.play()
            }
          }}
          className='num_pos_2'>{num2}</span>

        <span
          style={{ zIndex: final ? 999999 : "" }}
          onClick={() => {
            if (num3 > num1 && num3 > num2 && !swing) {
              setCorrect(2)
              // setTimeout(() => { Next() }, 500)
            } else {
              stop_all_sounds()
              setWrong(2)
              Assets?.intro?.sounds[2]?.play()
            }
          }}
          className='num_pos_3'>{num3}</span>

        {/* numbers box*/}
        <Image src={Assets["intro"]?.sprites[0]} className="first_box" style={{ zIndex: final ? 9999 : "" }} />
        <Image src={Assets["intro"]?.sprites[0]} className="second_box" style={{ zIndex: final ? 9999 : "" }} />
        <Image src={Assets["intro"]?.sprites[0]} className="third_box" style={{ zIndex: final ? 9999 : "" }} />


        {/* lotties */}

        <div ref={Ref} className='yellow_lottie'></div>
        <div ref={Ref2} className='paint_pos_1' style={{ opacity: paint ? 0 : 1 }}></div>

        <div ref={Ref3} className='paint_pos_1' style={{ opacity: paint ? 1 : 0 }}></div>
        <div ref={Ref4} className='yellow_lottie'></div>

      </>
    }
  />;
}
