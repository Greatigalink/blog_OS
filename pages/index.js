import styles from '../styles/Home.module.css'
import { useSelector } from "react-redux"
import dynamic from "next/dynamic"

const Nav = dynamic(() => import("../component/nav/index"))
const BackTop = dynamic(() => import("../component/back_top/index"))
const Footer = dynamic(() => import("../component/footer/index"))

const getStore = function() {
  return useSelector(
    (state) => ({
      clock: state.basicState.clock,
      docWidth: state.basicState.docWidth
    })
  )
}

export default function Home() {
  const { clock } = getStore();
  return (
    <div className={styles.container}>

      <main className={styles.main}>
      </main>

      <Footer clock={clock} />
      <Nav type={null} nowNav={"/"}></Nav>
      <BackTop></BackTop>
    </div>
  )
}
