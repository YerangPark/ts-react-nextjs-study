import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import App from './App'; // App.js에서 App 함수를 로딩
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import Parent from './components/ContainerSample'

// 웹 페이지에 리액트로 생성한 내용을 표시하려면, ReactDOM.createRoot에 컨테이너를 전달해
// root 객체를 작성하고, render 메서드에 요소를 전달하면 된다.

const root = ReactDOM.createRoot(
  // index.html에 있는 root라는 ID를 가지는 요소를 지정.
  document.getElementById('root') as HTMLElement
)
root.render(
  // 화면에 그릴 JSX 태그를 지정
  <React.StrictMode>
    <Hello /> {/* App은 src/App.tsx로부터 임포트 한 것을 사용함 */}
    <Name />
    <Message />
    <Parent />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
