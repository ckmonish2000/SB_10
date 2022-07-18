import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'
import Box from './Box'
import { SceneContext } from './contexts/SceneContext'
import FoodMap from './maps/FruitsAndVeg'


export default function Dnd() {
  const {
    setName,
    Assets,
    setStarz,
    Starz,
    Selected_fruits,
    setSelected_fruits,
    Selected_vegies,
    setSelected_vegies,
    setplaying
  } = useContext(SceneContext)

  const [childrens, setchildrens] = useState([])
  // const [dropped, setdropped] = useState(initialState);
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
  const useless_board = document.getElementsByClassName('useless_board')[0]
  const useless_board_styles = useless_board?.getBoundingClientRect()

  const stop_sound = () => {
    Assets["Scene2"]?.sounds?.forEach(v => v?.sound?.stop())
  }

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


      const item_name = getname(v?.id)
      console.log(fruits?.includes(item_name))

      const onDragEnd = (e) => {
        setTimeout(() => { setName("") }, 1200)
      }

      const onDragStart = () => {
        setName(item_name)
      }

      const onDrop = () => { }

      // const sel_array = fruits?.includes(item_name) ? Selected_fruits : Selected_vegies

      const x = (
        <Boxable
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onDrop={onDrop}
          label={item_name}
          type={fruits?.includes(item_name) ? "fruits" : "vegetables"}
          targetKey="fv"
          style={{ width, height }}
          pos={{ top, left }}
          image={v?.src}
        />
      )


      setchildrens(c => [...c, x])
    })

    container.style.display = "none"
  }, [])

  const on_Dropdown_fruits = (e) => {
    const item_name = e?.dragData?.label
    stop_sound()
    if (fruits?.includes(item_name)) {
      const get_name_sound = Assets["Scene2"].sounds.slice(3)?.filter(v => getname(v.url) === item_name + "_b")
      if (get_name_sound.length > 0) {
        const Sound = get_name_sound[0]?.sound
        Sound?.play()
        setSelected_fruits([...Selected_fruits, item_name])
        setplaying(true)
        Sound.on("end", () => {
          setplaying(false)
        })
      }
      setStarz(Starz + 1)
    } else {
      Assets["Scene2"]?.sounds[1]?.sound?.play()
    }
  }

  const on_Dropdown_vegies = (e) => {
    const item_name = e?.dragData?.label
    stop_sound()

    if (vegetables?.includes(item_name)) {
      const get_name_sound = Assets["Scene2"].sounds.slice(3)?.filter(v => getname(v.url) === item_name + "_b")
      if (get_name_sound.length > 0) {
        const Sound = get_name_sound[0]?.sound
        Sound?.play()
        setSelected_vegies([...Selected_vegies, item_name])
        setplaying(true)
        Sound.on("end", () => {
          setplaying(false)
        })
      }
      setStarz(Starz + 1)
    } else {
      Assets["Scene2"]?.sounds[1]?.sound?.play()
    }
  }



  return (
    ReactDOM.createPortal(
      <>
        {childrens}

        <Box
          handleDrop={on_Dropdown_fruits}
          targetKey="fv"
          style={{
            position: "fixed",
            top: `${drop_1?.top}px`,
            left: `${drop_1?.left}px`,
            width: `${drop_1?.width}px`,
            height: `${drop_1?.height}px`,
          }}
        />

        <Box
          handleDrop={on_Dropdown_vegies}
          targetKey="fv"
          style={{
            position: "fixed",
            top: `${drop_2?.top}px`,
            left: `${drop_2?.left}px`,
            width: `${drop_2?.width}px`,
            height: `${drop_2?.height}px`,
          }}
        />

        <img
          src={useless_board?.src}
          alt=""
          style={{
            position: "fixed",
            top: `${useless_board_styles?.top}px`,
            left: `${useless_board_styles?.left}px`,
            width: `${useless_board_styles?.width}px`,
            height: `${useless_board_styles?.height}px`,
          }}
        />

      </>
      , new_parent)
  )


  function Boxable(props) {

    const {
      Selected_fruits,
      Selected_vegies,
    } = useContext(SceneContext)

    const { targetKey, label, image, customDragElement, style, pos, onDragStart, onDragEnd, onDrop, type } = props;

    const sel_type = type === 'fruits' ? Selected_fruits : Selected_vegies;

    return (
      <div className="boxable_component" style={{ display: sel_type?.includes(label) ? "none" : "inline-block", position: "absolute", ...pos }}>
        <DragDropContainer
          targetKey={targetKey}
          dragData={{ label: label, type: type }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrag={onDrop}
        >
          <img src={image} style={style} />
        </DragDropContainer>
      </div>
    );
  }

}
