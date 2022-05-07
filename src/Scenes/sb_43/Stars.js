import React from 'react'
import Image from '../../utils/elements/Image'

const get_array = (count) => {
  const x = []
  for (let i = 0; i < count; i++) {
    x.push(1)
  }
  return x
}

export default function Stars({ board, grey, color, styles, count, s = false, height = "", total }) {
  return (
    <div className="progress_head" style={{ bottom: height }}>
      <Image src={board} style={{ width: "100%", height: "100%" }} />

      <div className={"leaves"}>
        {get_array(total).map((v, idx) => {
          return <Image src={count > idx ? color : grey} className="stars" />
        })}

        {/* <Image src={count > 0 ? color : grey} className="stars" /> */}
        {/* <Image src={count > 1 ? color : grey} className={styles[2]} />
        <Image src={count > 2 ? color : grey} className={styles[3]} />
        <Image src={count > 3 ? color : grey} className={styles[4]} />
        <Image src={count > 4 ? color : grey} className={styles[5]} /> */}
      </div>
    </div>
  )
}


export function Stars2({ board, grey, color, styles, count }) {
  return (
    <div className={styles[0]}>
      <Image src={board} />
      <Image src={grey} style={styles[1]} />

      {count > 1 && <Image src={color} className={styles[2]} />}
      {count > 2 && <Image src={color} className={styles[3]} />}
      {count > 3 && <Image src={color} className={styles[4]} />}
      {count > 4 && <Image src={color} className={styles[5]} />}
      {count > 5 && <Image src={color} className={styles[6]} />}

    </div>
  )
}