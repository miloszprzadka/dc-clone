import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import TextChat from './components/TextChat'
import VoiceChat from './components/VoiceChat'
import Roles from './components/Roles'
import Call from './components/Call'
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <Navbar/>
      <Main/>
      <TextChat/>
      <VoiceChat/>
      <Roles/>
      <Call/>
      <Footer/>
    </div>
  )
}

export default App
