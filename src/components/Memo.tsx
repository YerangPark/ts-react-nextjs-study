// 메모이제이션 예제
import React, { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

// 보통 함수 컴포넌트
// isFizz가 true면 Fizz라고 표시하고, 그 이외에는 표시하지 않음.
// isFizz의 변화와 관계 없이 부모가 다시 그려지면 Fizz도 다시 그려지게 됨.
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  // console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
  // onClick: () => void // 컴포넌트에 함수나 객체를 전달하면 메모이제이션 컴포넌트여도 부모 그릴 때 다시 그림.
}

// 메모이제이션한 함수 컴포넌트
// Fizz와 동일하게 isBuzz가 True일 때만 그려주고, 그 외에는 안그려줌.
// 부모 컴포넌트가 다시 그려져도 isBuzz의 변화가 없으면 다시 안그림.
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props
  // const { isBuzz, onClick } = props
  // console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`)
  return <span>{isBuzz ? 'Buzz' : ''}</span>
  // return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
})
Buzz.displayName = 'Buzz'

export const Parent2 = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  // const onBuzzClick = () => {
  //   console.log(`Buzz가 클릭됐습니다. isBuzz=${isBuzz}`)
  // }
  // console.log(`Parent가 다시 그려졌습니다. count=${count}`)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`현재 카운트 : ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
        {/* <Buzz isBuzz={isBuzz} onClick={onBuzzClick} /> */}
      </p>
      <hr />
    </div>
  )
}
export default Parent2
