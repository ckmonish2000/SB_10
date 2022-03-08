import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/beforeTree")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [Assets, setAssets] = useState({})
  const [Starz, setStarz] = useState(0)

  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{ SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Starz, setStarz }}>
      {children}
    </SceneContext.Provider>
  )
}
