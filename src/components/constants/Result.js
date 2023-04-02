import React from 'react'

function Result({weather}) {
  return (
    <>
        {typeof weather.main != 'undefined' && (
            <div className='result-container'>
            <div className='city'>{weather.name} ({weather.sys.country})</div>
            <div className='detail'>
                <div className='degree'>{parseInt(weather.main.temp)} <span>°C</span></div>
                <div className='status'>{weather.weather[0].description}</div>
            </div>
        </div>
        )}
    </>
  )
}

export default Result;