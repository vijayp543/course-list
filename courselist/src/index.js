import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const First = () => {
  return <div>
    <App />
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<First />)