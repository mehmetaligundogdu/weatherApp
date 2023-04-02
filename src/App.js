import React, {useState} from 'react'
import './App.css'
import Background from './components/constants/Background'
import Search from './components/constants/Search'
import Result from './components/constants/Result'

function App() {
  const [weather, setWeather] = useState({});
  return (
    <div className='uygulama'>
      <Background background={weather.weather && weather.weather[0].main}/>
      <div className='baslik'>Hava Durumu</div>
      <Search resultWeather={setWeather}/>
      <Result weather={weather}/>
    </div>
  )
}

export default App
