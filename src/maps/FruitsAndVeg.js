
import { imgurl, soundurl, lottieurl } from "../utils/path"

const url = `${imgurl}sb_43/fruits/`
const url2 = `${imgurl}sb_43/vegies/`

export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



const FoodMap = {
  fruits: shuffle([
    `${url}apple.svg`,
    `${url}banana.svg`,
    `${url}cherry.svg`,
    `${url}grapes.svg`,
    `${url}litchi.svg`,
    `${url}mango.svg`,
    `${url}orange.svg`,
    `${url}papaya.svg`,
    `${url}peach.svg`,
    `${url}pear.svg`,
    `${url}pineapple.svg`,
    `${url}plum.svg`,
    `${url}strawberry.svg`,
    `${url}watermelon.svg`,
    `${url}sweetlime.svg`,
  ]),
  veg: shuffle([
    // 9
    `${url2}cabbage.svg`,
    `${url2}carrot.svg`,
    `${url2}corn.svg`,
    `${url2}cucumber.svg`,
    `${url2}lettuce.svg`,
    `${url2}onion.svg`,
    `${url2}raddish.svg`,
    `${url2}spinach.svg`,
    `${url2}tomato.svg`,
  ]),
  all: shuffle([
    `${url2}cabbage.svg`,
    `${url2}carrot.svg`,
    `${url2}corn.svg`,
    `${url2}cucumber.svg`,
    `${url2}lettuce.svg`,
    `${url2}onion.svg`,
    `${url2}raddish.svg`,
    `${url2}spinach.svg`,
    `${url2}tomato.svg`,
    `${url}sweetlime.svg`,
    `${url}apple.svg`,
    `${url}banana.svg`,
    `${url}cherry.svg`,
    `${url}grapes.svg`,
    `${url}litchi.svg`,
    `${url}mango.svg`,
    `${url}orange.svg`,
    `${url}papaya.svg`,
    `${url}peach.svg`,
    `${url}pear.svg`,
    `${url}pineapple.svg`,
    `${url}plum.svg`,
    `${url}strawberry.svg`,
    `${url}watermelon.svg`
  ])
}


export default FoodMap 