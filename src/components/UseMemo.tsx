// 값을 메모이제이션하는 useMemo 예제
import React, { useState, useMemo } from 'react'

const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]
    })
    setText('')
  }

  // 다시 그릴 때마다 items.reduce를 실행.
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
  // items가 업데이트되는 시점에 items.reduce를 실행.
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
    // 아래 두 번째 인수의 배열 안에 items가 있으므로, items가 새롭게 되었을 때만 함수 실행해서 메모 업데이트
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
      <hr />
    </div>
  )
}

export default UseMemoSample
