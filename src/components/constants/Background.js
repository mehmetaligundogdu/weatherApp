import React from 'react'
import Arkaplan from '../photos/arkaplan.jpeg'

function Background() {
  return (
    <div className='background'>
        <div className='overlay'></div>
        <img className='background-image' src={Arkaplan}></img>
    </div>
  )
}

export default Background;