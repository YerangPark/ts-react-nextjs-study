// basic 콜백함수 예제
import React from 'react'

const Hello = () => {
  const onClick = () => {
    alert('Hello')
  }
  const text = 'Hello, React'

  return <div onClick={onClick}>{text}</div>
}

export default Hello
