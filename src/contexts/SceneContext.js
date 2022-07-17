import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [Assets, setAssets] = useState({})
  const [Starz, setStarz] = useState(0)
  const [height, setheight] = useState("73%")
  const [count, setcount] = useState(0)
  const [Data, setData] = useState({})
  const [FGs, setFGs] = useState({});
  const [Ipad, setIpad] = useState(false)


  // scene2 context
  const [Name, setName] = useState("")
  const [Selected_fruits, setSelected_fruits] = useState([])
  const [Selected_vegies, setSelected_vegies] = useState([])

  // console.log(Ipad)
  const [BowlChoosen, setBowlChoosen] = useState([]);

  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{
      // scene2 values
      Name,
      setName,
      Selected_fruits,
      setSelected_fruits,
      Selected_vegies,
      setSelected_vegies,
      // global this and otehrs
      Ipad, setIpad, BowlChoosen, setBowlChoosen, FGs, setFGs, Data, setData, SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Starz, setStarz, height, setheight, count, setcount
    }}>
      {children}
    </SceneContext.Provider>
  )
}
