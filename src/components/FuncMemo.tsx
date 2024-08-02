// 함수 메모이제이션 useCallback 예제
import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

// 일반 함수 컴포넌트
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log('Decrement Button 다시 그려짐')
  return <button onClick={onClick}>Decrement</button>
}

// 메모이제이션 함수 컴포넌트
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('IncrementButton이 다시 그려짐')
  return <button onClick={onClick}>Increment</button>
})
IncrementButton.displayName = 'IncrementButton'

// 메모이제이션 함수 컴포넌트
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('DoubleButton이 다시 그려짐')
  return <button onClick={onClick}>Double</button>
})
DoubleButton.displayName = 'DoubleButton'

export const Parent3 = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const increment = () => {
    setCount((c) => c + 1)
  }

  // useCallback을 이용해 함수를 메모이제이션 함
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, []) // 두 번째 인수가 빈 배열이므로, useCallback은 항상 같은 함수 반환

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      {/* 메모이제이션된 컴포넌트에 메모이제이션된 함수 전달 */}
      <DoubleButton onClick={double} />
      <hr />
    </div>
  )
}

export default Parent3
