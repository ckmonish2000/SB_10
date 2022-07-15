import React, { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'

export default function Dnd() {

  useEffect(() => {
    // Scene2 container
    const container = document.getElementById('f_v_containers')
    const children = [...container?.children]
    // creating a new wrapper to append childs
    const new_parent = document.createElement('div')
    // div in DND
    const DND_ROOT = document.getElementById('DND')

    children?.map(v => {
      console.log(v?.children)
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
        style: { top, width, height, left, position: "fixed", zIndex: 9999 },
        src: v?.src
      })
      const x = ReactDOMServer.renderToString(<DragDropContainer target="foo">{element}</DragDropContainer>)
      // new_parent.innerHTML = x
      new_parent.insertAdjacentHTML('beforeend', x)
    })

    // append scene2 element here
    DND_ROOT.appendChild(new_parent)

  }, [])


  const title = React.createElement('h1', {}, 'My First React Code');
  return (
    <div id="DND">
      Dnd
    </div>
  )
}
