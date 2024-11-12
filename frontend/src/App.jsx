import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Read from './components/Read'
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar/>
      <Read/>
      <Footer/>
    </>
  )
}

export default App
