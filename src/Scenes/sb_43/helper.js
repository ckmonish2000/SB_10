const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

const gen_nums = (setnum1, setnum2, setnum3) => {
  const one = randomInt(1, 10)
  let two = randomInt(1, 10)
  let three = randomInt(1, 10)

  while (two === one || two === three) {
    two = randomInt(1, 10)
  }

  while (three === one || two === three) {
    three = randomInt(1, 10)
  }

  setnum1(one)
  setnum2(two)
  setnum3(three)
}


export {
  gen_nums
}