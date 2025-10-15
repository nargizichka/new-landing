import { useState } from 'react'
import Home from './pages/home/index.jsx'
import Header from './components/feature/Header'
import Footer from './components/feature/Footer'
import './App.css'
import 'remixicon/fonts/remixicon.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
  )
}

export default App
