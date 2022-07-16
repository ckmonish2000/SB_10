import React,{useState} from 'react'
import { DragDropContainer } from "react-drag-drop-container";
import Box from './box';


export default function Main() {
  return (
    <div>
      <Boxable targetKey="box" label="orange" image="img/orange.png" />

      <Box targetKey="box" />
    </div>
  )
}



/*
    Boxable -- a thing you can drag into a Box
*/

function Boxable(props) {
  const { targetKey, label, image, customDragElement } = props;
  return (
    <div className="boxable_component" style={{ display: "inline-block" }}>
      <DragDropContainer
        targetKey={targetKey}
        dragData={{ label: label,test:"sss" }}
        customDragElement={customDragElement}
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



// export default function Main() {
//   const a = ["1","2","3","4","5","6","7"]
//   const [selected, setSelected] = useState("")
//   return (
//    <div >
//      {a.map(v=>{
//       return <Draggable selected={selected} setSelected={setSelected}>{v}</Draggable>
//     })}

// {/* // drop box */}
//     <div 
//     onMouseEnter={()=>{
//       if(selected==="1"){
//         console.log("it's in")
//       }else{
//         console.log("fuck it")
//       }
//     }}
//     onMouseLeave={()=>{
//       console.log("leave")
//     }}
//     className="droppable"></div>
//    </div>

    
//   )
// }
