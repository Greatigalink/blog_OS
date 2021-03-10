// import { Footer } from "../../../component/export"
import dynamic from "next/dynamic"

const Nav = dynamic(() => import("../../../component/nav/index"))
const Footer = dynamic(() => import("../../../component/footer/index"))

export default function Diary() {
  return(
    <div>
      <header></header>
      <main>
        <h1>加载好慢呀</h1>
      </main>
      <Nav nowNav={"/record/diary"} />
      <Footer />
    </div>
  )
}