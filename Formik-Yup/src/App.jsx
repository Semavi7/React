import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <RegisterForm />
    </div>
  )
}

export default App
