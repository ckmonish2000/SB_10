import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'
import Box from './Box'
import { SceneContext } from './contexts/SceneContext'
import FoodMap from './maps/FruitsAndVeg'

export default function Dnd() {
  const { Name, setName } = useContext(SceneContext)

  const [childrens, setchildrens] = useState([])
  // creating a new wrapper to append childs
  const new_parent = document.getElementById('root2')

  const getname = (url) => {
    const URL = url.split("/")
    return URL[URL.length - 1].split(".")[0]
  }

  const vegetables = FoodMap?.veg?.map(v => getname(v))
  const fruits = FoodMap?.fruits?.map(v => getname(v))

  // drop container styles
  const drop_1 = document.getElementsByClassName('drop_container_1')[0]?.getBoundingClientRect()
  const drop_2 = document.getElementsByClassName('drop_container_2')[0]?.getBoundingClientRect()

  useEffect(() => {




    // Scene2 fruits and vegies grid
    const container = document.getElementById('f_v_containers')
    const children = [...container?.children]

    children?.map((v, idx) => {
      const Rect_Pos_Style = v?.getBoundingClientRect() // styles 
      v.style.opacity = 1
      // applying styles to the element
      const top = `${Rect_Pos_Style?.top}px`
      const left = `${Rect_Pos_Style?.left}px`
      const width = `${Rect_Pos_Style?.width}px`
      const height = `${Rect_Pos_Style?.height}px`

      const element = React.createElement("img", {
        style: { top, width, height, left, position: "absolute", zIndex: 9999 },
        src: v?.src
      })

      const item_name = getname(v?.id)
      const x = (

        <DragDropContainer
          dragData={{ label: item_name }}
          // drag start
          onDragStart={(e) => {
            setName(item_name) //set board names
            // console.log("start", v?.id)
          }}

          // on drag
          // onDrag={() => console.log("dragging")}

          // drag end
          onDragEnd={(e) => {
            setTimeout(() => {
              setName("")
            }, 1200)
          }}
          // ondrop
          onDrop={(e) => console.log(e)}
          target={fruits?.includes(item_name) ? "fruits" : "vegetables"}>
          {element}
        </DragDropContainer>)


      setchildrens(c => [...c, x])
    })


    container.style.display = "none"
  }, [])


  return (
    ReactDOM.createPortal(<React.Fragment>
      {childrens}

      {/* fruits drop */}
      <div
        style={{
          position: "fixed",
          top: `${drop_1?.top}px`,
          left: `${drop_1?.left}px`,
          width: `${drop_1?.width}px`,
          height: `${drop_1?.height}px`,
          border: "1px solid"
        }}>

        <Box targetKey="fruits" />
      </div>

      <div style={{
        position: "fixed",
        top: `${drop_2?.top}px`,
        left: `${drop_2?.left}px`,
        width: `${drop_2?.width}px`,
        height: `${drop_2?.height}px`,
        border: "1px solid"
      }}>

        <Box targetKey="vegetables" />
      </div>
    </React.Fragment>, new_parent)
  )
}
