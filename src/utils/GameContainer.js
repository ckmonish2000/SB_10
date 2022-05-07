import { useEffect, useState } from 'react';

export default function GameContainer({ children, LandScape, setLandScape }) {
  const [scale, setscale] = useState(window.innerWidth * 0.67 / 1000);


  useEffect(() => {
    window.addEventListener("resize", onResize)
    setLandScape(window.innerWidth / window.innerHeight < 1.0)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const onResize = () => {
    const scale = (window.innerWidth * 0.67 / 1000)
    setscale(scale)
    setLandScape(window.innerWidth / window.innerHeight < 1.0)
  }




  return <div className="vendorWrapper">
    <div className="playHold" style={{
      position: "absolute",
      width: "1920px",
      height: "900px",
      transformOrigin: "210px 900px",
      left: "-210px",
      bottom: "0px",
      transform: `scale(${scale})`,
      overflow: "hidden"
    }}>
      {/* {!LandScape && children} */}
      {children}
    </div>
  </div>
}
