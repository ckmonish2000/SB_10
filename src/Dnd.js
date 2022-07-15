import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'

export default function Dnd() {
  // const childrens = []
  const [childrens, setchildrens] = useState([])
  // creating a new wrapper to append childs
  const new_parent = document.getElementById('root2')

  useEffect(() => {
    // Scene2 container
    const container = document.getElementById('f_v_containers')
    const children = [...container?.children]

    children?.map((v, idx) => {
      const Rect_Pos_Style = v?.getBoundingClientRect() // styles 
      // reset style
      v.style.display = ""
      v.style.left = ""
      v.style.top = ""
      v.style.width = ""
      v.style.height = ""

      // applying styles to the element
      const top = `${Rect_Pos_Style?.top}px`
      const left = `${Rect_Pos_Style?.left}px`
      const width = `${Rect_Pos_Style?.width}px`
      const height = `${Rect_Pos_Style?.height}px`

      const element = React.createElement("img", {
        style: { top, width, height, left, position: "absolute", zIndex: 9999 },
        src: v?.src
      })

      const x = <DragDropContainer
        onDragStart={(e) => console.log("start", e)}
        onDrag={() => console.log("dragging")}
        onDragEnd={() => console.log("end")}
        onDrop={(e) => console.log(e)}
        target="foo">{element}</DragDropContainer>
      // new_parent.innerHTML = x
      console.log(x, idx)
      setchildrens(c => [...c, x])
    })

    // append scene2 element here
    // DND_ROOT.appendChild(new_parent)
  }, [])


  return (
    ReactDOM.createPortal(<React.Fragment>{childrens}</React.Fragment>, new_parent)
  )
}
