import { Type } from "./type"
import { cutWord } from "./cutWord"
import Scroll from "../util/scroll";
import { Thorttle, ThorttleAnimation, Stabilization } from "./thorttle";
import TextLink from "./textLink";
import { dayOrNight } from "./changeStyle"
import Time from "./time"

// const Type = () => require("./type").Type
// const cutWord = () => require("./cutWord").cutWord
// const Scroll = () => require("./scroll").default
// const Thorttle = () => require("./thorttle").default
// const TextLink = () => require("./textLink").default
// const dayOrNight = () => require("./changeStyle").dayOrNight
// const Time = () => require("./time").default

// console.log(TextLink()("dsfsf"))

export {
  Type,
  cutWord,
  Scroll,
  Thorttle,
  ThorttleAnimation,
  Stabilization,
  TextLink,
  dayOrNight,
  Time
}