import React from 'react'
import './style.css'

export default ({text, time}) => (
  <div className='timeContainer'>
    <div className='time'> {time} </div>
    <div className='text'> {text} </div>
  </div>
)
