import style from "./ask-message.module.scss"
import { useState } from "react"
import { BlogShowMessage } from "../../../../api/export"

const vModelInput = (e, state, property, setValue) => {
  let newValue = Object.assign({}, state);
  newValue[property] = e.target.value;
  setValue(newValue);
};

const nextMessage = (type, index, inputTime, setNowMessage) => {
  if (!/^[\-\+]?\d+$/.test(inputTime[type])) {
    BlogShowMessage('error', '请输入数值~')
    return
  }
  const value = parseInt(inputTime[type])
  if (value === Infinity) {
    BlogShowMessage('error', '请输入~')
    return
  }
  switch (type) {
    case 'age': {
      if (value <= 0) {
        BlogShowMessage('error', '年龄怎么会小于等于0呢？')
        return
      } else if (value >= 141) {
        BlogShowMessage('warning', '太高了，目前人类寿命世界纪录为141岁~')
        return
      }
    }; break;
    case 'bornMonth': {
      if (value < 0 || value > 12) {
        BlogShowMessage('error', '月份范围为 1~12 !!')
        return
      }
    }; break;
    case 'planAge': {
      if (value <= 0) {
        BlogShowMessage('warning', '活着活着回娘胎了？')
        return
      } else if (value >= 141) {
        BlogShowMessage('warning', '目前世界纪录为141岁，确定你这么长寿？')
        return
      } else if (value <= inputTime['age']) {
        BlogShowMessage('warning', '怎么活倒退了呢？你已经不能变年轻了！')
        return
      }
    }
  }
  setNowMessage(index)
}

const onSubmitMessage = (inputTime, onGetMessage) => {
  onGetMessage(inputTime)
}

export default function AskMessage({ onGetMessage = () => { } }) {
  const [inputTime, setInputTime] = useState({
    age: Infinity,
    planAge: Infinity,
    bornMonth: Infinity,
  });
  const [nowMessage, setNowMessage] = useState(0);
  const messageLists = [
    {
      index: 0,
      type: 'age',
      title: '今年几岁了？'
    },
    {
      index: 1,
      type: 'bornMonth',
      title: '哪月出生的？'
    },
    {
      index: 2,
      type: 'planAge',
      title: '觉得自己能活到几岁呢？'
    }
  ]

  return (
    <div className={style.ask_message}>
      <ul>
        {
          messageLists.map((item, index) =>
            <li key={item.type} className={nowMessage === item.index ? style.ask_message_item : style.ask_message_item_hidden}>
              <aside>{item.title}</aside>
              <input
                onChange={(e) => vModelInput(e, inputTime, item.type, setInputTime)}
              />
              <button className={style.ask_message_item_ok} onClick={() => nextMessage(item.type, index + 1, inputTime, setNowMessage)}>OK</button>
            </li>
          )}
        <li className={nowMessage === messageLists.length ? style.ask_message_item : style.ask_message_item_hidden}>
          <button className={style.ask_message_item_create} onClick={() => onSubmitMessage(inputTime, onGetMessage)}>生成时空日历</button>
        </li>
      </ul>
      <button className={style.ask_message_restart} onClick={() => setNowMessage(0)}>Re Enter</button>
    </div>
  )
}