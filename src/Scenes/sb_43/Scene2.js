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


export default function Scene2({ cw, num, box, ani, extra, bg, next, numbox, second, snd, third }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Starz, setStarz, height } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)




  const [Wrong, setWrong] = useState(0)
  const [Correct, setCorrect] = useState(0)



  const Ref = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);



  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)
  const [num3, setnum3] = useState(null)
  const [paint, setpaint] = useState(false)
  const [final, setfinal] = useState(false)
  const [show, setshow] = useState(false)
  const [Wipe, setWipe] = useState(true)
  const [playing, setplaying] = useState(true)

  let timer = null

  const stop_all_sounds = () => {
    Assets?.intro?.sounds?.map(v => v.stop())
    Assets?.props?.sounds?.map(v => v.stop())
    Assets?.Backgrounds?.sounds?.map(v => v.stop())
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

    if (Ref.current) {
      try {
        const ch = lottie.loadAnimation({
          name: "1",
          container: Ref.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets["Backgrounds"]?.lottie[2],
        })


        setTimeout(function () {
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
            setshow(true)
          })
        }, 500)


        const ch3 = lottie.loadAnimation({
          name: "wipe",
          container: Ref3.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: Assets["Backgrounds"]?.lottie[5],
        })

        ch3.addEventListener("complete", () => { setWipe(false) })
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
  }, [])


  useEffect(() => {
    if (!Wipe) {
      const sound = Assets?.intro?.sounds[snd]
      sound?.play()
      sound?.on("end", () => {
        setplaying(false)
      })
    }
  }, [Wipe])

  useEffect(() => {
    if (!playing) {
      timer = setTimeout(() => {
        setplaying(true)
        const sound = Assets?.intro?.sounds[3]
        sound?.play()
        sound?.on("end", () => {
          setplaying(false)
        })
      }, 10000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [playing])


  useEffect(() => {
    if (paint) {
      lottie.play("wipe")
      lottie.play("blue")
    }
  }, [paint])

  const Switch_now = () => {
    setStarz(Starz + 1)
    setTimeout(() => {
      stop_all_sounds()
      setSceneId(next)
    }, 1000)
  }

  const first_click = () => {
    if (timer) clearTimeout(timer)
    if (num1 > num2 && num1 > num3 && Correct === 0) {
      stop_all_sounds()
      Assets?.intro?.sounds[1]?.play()
      setCorrect(1)
      setWrong(0)
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
    if (num2 > num1 && num2 > num3 && Correct === 0) {
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
          // height={height}
          s={true}
          board={Assets?.props?.sprites[8]}
          styles={[
            "progress_head_2",
            "star2",
            "star2",
            "star2",
            "star2",
            "star2",
          ]}
          color={Assets?.props?.sprites[10]}
          grey={Assets?.props?.sprites[9]}
          count={Starz}
        /> */}

        {/* numbers */}
        {show && <span className={num[0]}
          style={
            `${num1}`.length !== 3 ?
              { left: `${num1}`.length === 2 ? second[0] : "", zIndex: final ? 999999 : "" } :
              { ...third[0], zIndex: final ? 999999 : "" }
          }
          onClick={first_click}
        >{num1}</span>}

        {show && <span
          style={
            `${num2}`.length !== 3 ?
              { left: `${num2}`.length === 2 ? second[1] : "", zIndex: final ? 999999 : "" } :
              { ...third[1], zIndex: final ? 999999 : "" }
          }
          onClick={second_click}
          className={num[1]}>{num2}</span>}

        {show && <span
          style={
            `${num3}`.length !== 3 ?
              { left: `${num3}`.length === 2 ? second[2] : "", zIndex: final ? 999999 : "" } :
              { ...third[2], zIndex: final ? 999999 : "" }
          }
          onClick={third_click}
          className={num[2]}>{num3}</span>}

        {/* numbers box*/}
        <Image onClick={first_click} src={Assets["intro"]?.sprites[numbox]} className={box[0]} style={{ zIndex: final ? 9999 : "" }} />
        <Image onClick={second_click} src={Assets["intro"]?.sprites[numbox]} className={box[1]} style={{ zIndex: final ? 9999 : "" }} />
        <Image onClick={third_click} src={Assets["intro"]?.sprites[numbox]} className={box[2]} style={{ zIndex: final ? 9999 : "" }} />


        {/* wrong write box */}

        {Correct !== 0 && <Image src={Assets["intro"]?.sprites[cw[0]]} className={box[Correct - 1]} style={{ zIndex: 99999 }} />}
        {Wrong !== 0 && <Image src={Assets["intro"]?.sprites[cw[1]]} className={box[Wrong - 1]} style={{ zIndex: 99999 }} />}

        {/* lotties */}

        <div ref={Ref} className={ani[0]}></div>
        <div ref={Ref2} className={ani[1]} style={{ opacity: paint ? 0 : 1 }}></div>

        <div ref={Ref3} className={ani[1]} style={{ opacity: paint ? 1 : 0 }}></div>
        <div ref={Ref4} className={ani[0]}></div>

        {extra}

      </>
    }
  />;
}
