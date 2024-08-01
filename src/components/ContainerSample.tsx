// 컴포넌트 상속 관계 with TS 예제
import React from 'react'

// Container의 props 타입을 정의
type ContainerProps = {
  title: string
  children: React.ReactNode
}

// const Container = (props: { title: string; children: React.ReactElement }) => {
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello">
      <p>이 부분이 배경색으로 둘러싸여 있다.</p>
    </Container>
  )
}

export default Parent
