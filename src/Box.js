import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
// import BoxItem from "./BoxItem";
// import { nanoid } from "nanoid";

export default function Box(props) {
  const { targetKey } = props;
  const [items, setItems] = useState([]);

  const handleDrop = (e) => {

    console.log("handleDrop ", e);

    const newItem = { label: e.dragData.label, uid: Math.random() };
    const newItems = [...items];
    newItems.splice(items.length, 0, newItem);
    setItems(newItems);
    e.containerElem.style.visibility = "hidden";
  };

  return (
    <div>
      <DropTarget
        key={Math.random()}
        onHit={() => { console.log("handleDrop") }}
        targetKey={targetKey}
      ></DropTarget>
    </div>
  )
  // return (
  //   <div className="box"
  //     style={{
  //       height: "200px",
  //       width: "200px",
  //       border: "1px solid"
  //     }}
  //   >
  //     <DropTarget
  //       onHit={handleDrop}
  //       targetKey={targetKey}
  //       dropData={{ name: props.name }}
  //     >
  //       <DropTarget
  //         onHit={handleDrop}
  //         targetKey="boxItem"
  //         dropData={{ name: props.name }}
  //       >
  //         <div
  //           style={{
  //             height: "200px",
  //             width: "200px",
  //             border: "1px solid red"
  //           }}
  //           className="box">
  //           {items.map((item, index) => {
  //             return (
  //               <h1>{item.label}</h1>
  //               // <BoxItem
  //               //   key={item.uid}
  //               //   uid={item.uid}
  //               //   kill={kill}
  //               //   index={index}
  //               //   swap={swap}
  //               //   label={item.label}
  //               // >
  //               //   {item.label}
  //               // </BoxItem>
  //             );
  //           })}
  //         </div>
  //       </DropTarget>
  //     </DropTarget>
  //   </div>
  // );
}
