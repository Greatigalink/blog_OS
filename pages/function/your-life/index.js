import { Nav, BackTop, Footer } from '../../../component/export'
import { useSelector } from "react-redux"
import style from './yourlife.module.scss'

const getStore = function() {
  return useSelector(
    (state) => ({
      clock: state.basicState.clock
    })
  )
}

export default function YourLife() {
  const { clock } = getStore();
  return(
    <div className={style.your_life}>
      <main className={style.your_life_main}></main>
      <Footer clock={clock} />
      <Nav nowNav={'/function/your-life'} />
      <BackTop />
    </div>
  )
}