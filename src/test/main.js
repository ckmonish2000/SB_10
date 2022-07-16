import React, { useState } from 'react'
import { DragDropContainer } from "react-drag-drop-container";
import Box from './box';


export default function Main() {
  return (
    <div>
      <Boxable targetKey="box" label="orange" image="img/orange.png" />

      {/* <div style={{ position: "absolute", height: "100px", width: "100px" }}>
        <Box targetKey="box" />
      </div> */}
    </div>
  )
}



function Boxable(props) {
  const { targetKey, label, image, customDragElement } = props;
  return (
    <div className="boxable_component" style={{ display: "inline-block" }}>
      <DragDropContainer
        targetKey={targetKey}
        dragData={{ label: label, test: "sss" }}
      // customDragElement={customDragElement}
      // onDragStart={() => console.log("start")}
      // onDrag={() => console.log("dragging")}
      // onDragEnd={() => console.log("end")}
      // onDrop={(e) => console.log("deopped",e)}
      >
        <img src={image} height="45" style={{ marginLeft: 40 }} />
      </DragDropContainer>
    </div>
  );
}



