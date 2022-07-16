import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
// import BoxItem from "./BoxItem";
// import { nanoid } from "nanoid";

export default function Box(props) {
  const { targetKey, handleDrop } = props;
  const [items, setItems] = useState([]);


  return (
    <div style={props.style}>
      <DropTarget
        key={Math.random()}
        onHit={handleDrop}
        targetKey={targetKey}
      ></DropTarget>
    </div>
  )

}
