
import { imgUrl, soundUrl, lottieUrl } from "../utils/path"

const url = `${imgUrl}sb_43/fruits/`
const url2 = `${imgUrl}sb_43/vegies/`

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
    `${url}Apple.svg`,
    `${url}Banana.svg`,
    `${url}Cherry.svg`,
    `${url}Green-Grapes.svg`,
    `${url}Litchi.svg`,
    `${url}Mango.svg`,
    `${url}Orange.svg`,
    `${url}Papaya.svg`,
    `${url}Peach.svg`,
    `${url}Pear.svg`,
    `${url}Pineapple.svg`,
    `${url}Plum.svg`,
    `${url}Strawberry.svg`,
    `${url}Watermelon.svg`,
    `${url}Sweetlime.svg`,
  ]),
  veg: shuffle([

    `${url2}Cabbage.svg`,
    `${url2}Carrot.svg`,
    `${url2}Corn.svg`,
    `${url2}Cucumber.svg`,
    `${url2}Lattuce.svg`,
    `${url2}Onion.svg`,
    `${url2}Raddish.svg`,
    `${url2}Spinach.svg`,
    `${url2}Tomato.svg`,
  ]),
  all: shuffle([
    `${url2}Cabbage.svg`,
    `${url2}Carrot.svg`,
    `${url2}Corn.svg`,
    `${url2}Cucumber.svg`,
    `${url2}Lattuce.svg`,
    `${url2}Onion.svg`,
    `${url2}Raddish.svg`,
    `${url2}Spinach.svg`,
    `${url2}Tomato.svg`,
    `${url}Sweetlime.svg`,
    `${url}Apple.svg`,
    `${url}Banana.svg`,
    `${url}Cherry.svg`,
    `${url}Green-Grapes.svg`,
    `${url}Litchi.svg`,
    `${url}Mango.svg`,
    `${url}Orange.svg`,
    `${url}Papaya.svg`,
    `${url}Peach.svg`,
    `${url}Pear.svg`,
    `${url}Pineapple.svg`,
    `${url}Plum.svg`,
    `${url}Strawberry.svg`,
    `${url}Watermelon.svg`
  ])
}


export default FoodMap 