import React from 'react'
import ChangeBackground from './ChangeBackground';

function Background({background}) {
  return (
    <div className='background'>
        <div className='overlay'></div>
        <ChangeBackground status={background}/>
    </div>
  )
}

export default Background;