import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BackgroundProvider from './contexts/Background';
import SceneContextProvider from './contexts/SceneContext';
// import SelectorContextProvider from './contexts/SelectorContext';
import SoundContextProvider from './contexts/SoundContext';
import "./styles/index.css"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'




ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <BackgroundProvider>
      <SceneContextProvider>
        <SoundContextProvider>
          {/* <SelectorContextProvider> */}
          <App />
          {/* </SelectorContextProvider> */}
        </SoundContextProvider>
      </SceneContextProvider>
    </BackgroundProvider>
  </DndProvider>
  ,
  document.getElementById('root')
);
