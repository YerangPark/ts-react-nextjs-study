import React from 'react';
import logo from './logo.svg';
import './App.css';

// 함수로 App 컴포넌트 정의
function App() {
  // App 컴포넌트는 HTML 요소를 반환함.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

// 정의한 App을 default로 익스포트 함.
export default App;
