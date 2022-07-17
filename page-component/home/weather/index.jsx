import style from "./weather.module.scss"

const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

const getWeatherTime = () => {
  let date = new Date()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let week = date.getDay()
  let toDay = weeks[week]

  return `${month}月${day}日 ${toDay}`
}

export default function Weather({ weather }) {
  return(
    <div className={style.home_weather}>
      <header className={style.home_weather_head}>
        <h2>{weather.city || "--"}</h2>
      </header>
      <main className={style.home_weather_main}>
        <header>
          <section>{weather.temperature || "--"}</section>
          <section>
            <aside>℃</aside>
            <aside>{weather.weather || "--"}</aside>
          </section>
        </header>
        <footer>
          <aside>
            {`${weather.address} / ${getWeatherTime()}`}
          </aside>
        </footer>
      </main>
    </div>
  )
}