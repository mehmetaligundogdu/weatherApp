import React from 'react'
import './App.css'
import Background from './components/constants/Background'
import Search from './components/constants/Search'
import Result from './components/constants/Result'

function App() {
  return (
    <div className='uygulama'>
      <Background />
      <div className='baslik'>Hava Durumu</div>
      <Search />
      <Result />
    </div>
  )
}

export default App
