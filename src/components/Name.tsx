import React from 'react'

// 이름을 입력하기 위한 텍스트 박스를 반환
const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
        <label htmlFor='name'>이름</label>
        <input id="name" className='input-name' type='text' onChange={onChange}/>
    </div>
  )
}

export default Name