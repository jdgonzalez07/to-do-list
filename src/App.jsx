import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Form from './Form/Form'
import List from './List/List'
import Presentation from './Presentation/Presentation'
import Footer from './Footer/Footer'



function App() {
  

  return (
    <>
    <Presentation/>
      <Form/>
    <Footer/>
    </>
  )
}

export default App
