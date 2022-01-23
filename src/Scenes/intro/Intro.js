import React from 'react';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import IntroMap from './AssetMap';


export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap)


  if (Loading) {
    return <h1>hello</h1>
  }
  return <Scenes
    sprites={
      <>
        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(Bg)}`} />
        <button onClick={() => { console.log(Bg) }}>xyz</button>
      </>
    }
  />;
}
