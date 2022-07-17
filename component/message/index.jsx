import style from "./messageContainer.module.scss"
import Message from "./message"
import { useState } from "react"

const defaultSetValue = (value = "") => {
  if(AUTO_MESSAGE.isOnLoad) {
    AUTO_MESSAGE.value.push(value)
  }
}

let AUTO_MESSAGE = {
  value: [],
  setValue: defaultSetValue,
  isOnLoad: false
}
let MESSAGE_CONFIG = {
  deplay: 3000
}

const isFull = (stack) => {
  if(stack.length > 8) {
    let item = stack.pop()
    AUTO_MESSAGE.setValue(stack)
    clearTimeout(item.timer)
    return true
  }
  return false
}

const message = {
  info: (text) => {
    let stack = [...AUTO_MESSAGE.value]
    if(isFull(stack)) {
      // return
    }
    stack.unshift({
      value: text,
      type: 'info',
      timer: remove()
    })
    AUTO_MESSAGE.setValue(stack)
  },
  success: (text) => {
    let stack = [...AUTO_MESSAGE.value]
    if(isFull(stack)) {
      return
    }
    stack.unshift({
      value: text,
      type: 'success',
      timer: remove()
    })
    AUTO_MESSAGE.setValue(stack)
  },
  error: (text) => {
    let stack = [...AUTO_MESSAGE.value]
    if(isFull(stack)) {
      return
    }
    stack.unshift({
      value: text,
      type: 'error',
      timer: remove()
    })
    AUTO_MESSAGE.setValue(stack)
  },
  warning: (text) => {
    let stack = [...AUTO_MESSAGE.value]
    if(isFull(stack)) {
      return
    }
    stack.unshift({
      value: text,
      type: 'warning',
      timer: remove()
    })
    AUTO_MESSAGE.setValue(stack)
  }
}

const remove = () => {
  let timer =  setTimeout(() => {
    let stack = [...AUTO_MESSAGE.value]
    stack.pop()
    AUTO_MESSAGE.setValue(stack)
    clearTimeout(timer)
  }, MESSAGE_CONFIG.deplay)
  return timer
}

function MessageContainer() {
  const [ stack, setStack ] = useState([])
  AUTO_MESSAGE = {
    value: stack,
    setValue: setStack,
    isOnLoad: true
  }

  return(
    <div className={style.message_container}>
      <main>
        {
          stack.map((item, index) => <section key={index}><Message 
            type={item.type}
            text={item.value}
          /></section>)
        }
      </main>
    </div>
  )
}

export {
  MessageContainer,
  MESSAGE_CONFIG,
  message,
}