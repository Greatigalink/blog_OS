import style from "./time-grid.module.scss"
import { useState } from "react"

const passStyle = {
  backgroundColor: "#bdbdbd"
}
const furtureStyle = {
  backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
}
const nowStyle = {
  backgroundImage: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)"
}
const createTimeArray = (inputerTimeMsg = {}) => {
  let yourLifeTimeList = []

  let { age, planAge, bornMonth } = inputerTimeMsg
  age = parseInt(age)
  planAge = parseInt(planAge)
  bornMonth = parseInt(bornMonth)
  let date = new Date()
  let bornDate = new Date(date.getFullYear() - age, bornMonth)
  let bornDateMs = bornDate.getTime()
  let deathDate = new Date(bornDate.getFullYear() + planAge, bornMonth)
  let deathDateMs = deathDate.getTime()

  let monthNumbers = planAge * 12
  let [startYear, startMonth] = [bornDate.getFullYear(), bornDate.getMonth()]

  for (let i = 0; i <= monthNumbers; i++) {
    let nowDate = new Date(startYear, startMonth !== 12 ? startMonth : 0)
    yourLifeTimeList[i] = {
      timeMs: nowDate.getTime(),
      date: nowDate,
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() || 12,
    }
    startMonth += 1
    if (startMonth > 12) {
      startYear += 1
      startMonth = 1
    }
  }
  return yourLifeTimeList
}

const computeWidthHeight = (docWidth, docHeight, listLength) => {
  let startWidth = 10
  let startHeight = startWidth
  let limitWidth = docWidth - 300
  let limitHeight = docHeight - 300

  let rowNumbers = Math.floor(limitWidth / startWidth)
  let colNumbers = Math.ceil(listLength / rowNumbers)

  while (colNumbers * startHeight < limitHeight && startWidth < 15) {
    startWidth += 1
    startHeight = startWidth
    rowNumbers = Math.floor(limitWidth / startWidth)
    colNumbers = Math.ceil(listLength / rowNumbers)
  }

  return [Math.round(startWidth), Math.round(startHeight)]
}

const getPassFurtureStyle = (year, month) => {
  let nowDate = new Date()
  let Year = nowDate.getFullYear()
  let Month = nowDate.getMonth() + 1
  if (year < Year) {
    return passStyle;
  } else if (year === Year && month < Month) {
    return passStyle;
  } else if (year === Year && month === Month) {
    return nowStyle;
  } else {
    return furtureStyle;
  }
}

let displayTimer = null
const moveInGridItem = (pointTime, setPointTime) => {
  const timeStr = `${pointTime.year} 年 ${pointTime.month} 月`
  if(!displayTimer) {
    displayTimer = setTimeout(() => {
      setPointTime('')
      displayTimer = null
    }, 3000)
  }
  setPointTime(timeStr)
}

export default function TimeGrid({ basicMessage, onReStart = () => { } }) {
  const { docWidth, docHeight, inputerTimeMsg } = basicMessage
  const yourLifeLists = createTimeArray(inputerTimeMsg)
  const [gridWidth, gridHeight] = computeWidthHeight(docWidth, docHeight, yourLifeLists.length)
  const [pointTime, setPointTime] = useState('')
  return (
    <div className={style.time_grid}>
      <main className={style.time_grid_main}>
        <aside className={style.time_grid_main_guide}>
          <ul>
            <li>
              每个
              <aside style={{ width: `${gridWidth}px`, height: `${gridHeight}px`, backgroundColor: 'white' }}></aside>
              星点代表一个月
            </li>
            <li>
              <aside style={{ width: `${gridWidth}px`, height: `${gridHeight}px`, backgroundColor: passStyle.backgroundColor }}></aside>
              代表已经逝去的时间
            </li>
            <li>
              <aside style={{ width: `${gridWidth}px`, height: `${gridHeight}px`, backgroundImage: furtureStyle.backgroundImage }}></aside>
              代表未来剩下的时间
            </li>
            <li>
              <aside style={{ width: `${gridWidth}px`, height: `${gridHeight}px`, backgroundImage: nowStyle.backgroundImage }}></aside>
              代表当前月份的星点
            </li>
            <li>您的寿命为<span>{inputerTimeMsg.planAge}</span>年，共<span>{inputerTimeMsg.planAge * 12}</span>个星点(月)</li>
            <button onClick={() => onReStart()} className={style.time_grid_main_restart}>ReStart</button>
          </ul>
          <section className={style.time_grid_main_guide_enter}>
            <h2>{pointTime}</h2>
          </section>
        </aside>
        <ul className={style.time_grid_main_list}>
          {yourLifeLists.map(
            (item, index) =>
              <li
                key={index}
                className={style.time_grid_main_list_item}
                style={{ width: `${gridWidth}px`, height: `${gridHeight}px` }}
                onMouseMove={() => moveInGridItem(item, setPointTime)}
              >
                <aside style={getPassFurtureStyle(item.year, item.month)}></aside>
                <main className={style.time_grid_main_list_item_timePoint}>
                  <section>
                    <img src="/image/point.png" alt="T" />
                  </section>
                </main>
              </li>
          )}
        </ul>
      </main>
    </div>
  )
}