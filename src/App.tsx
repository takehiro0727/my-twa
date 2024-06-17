import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'
import { initUtils } from '@tma.js/sdk';

function App() {
  const [count, setCount] = useState(0)
  const utils = initUtils();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>
      <div className="card">
        {/* <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}> */}
        {/* <button onClick={() => WebApp.showAlert(`${WebApp.initDataUnsafe.user?.id}`)}> */}
        <button onClick={() => utils.openTelegramLink('https://t.me/share/url?url=https://t.me/durictma_bot?text=test'
        )}>
            Invite a friend
        </button>
      </div>
    </>
  )
}

export default App
