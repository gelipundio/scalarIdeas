import React, { Component } from 'react'
import './style.css'
import Container from './Container'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {...props} // {days, hours, minutes, seconds}
    this.startCount.bind(this)
  }

  startCount () {
    const {days, hours, minutes, seconds} = this.state
    setTimeout(() => {
      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) return
      let newDay, newHour, newMinute, newSecond

      if (seconds === 0) {
        newSecond = 59
        newMinute = minutes - 1
      } else {
        newSecond = seconds - 1
        newMinute = minutes
      }

      if (minutes === 0 && seconds === 0) {
        newMinute = 59
        newHour = hours - 1
      } else {
        newHour = hours
      }

      if (hours === 0 && minutes === 0 && seconds === 0) {
        newHour = 23
        newDay = days - 1
      } else {
        newDay = days
      }

      this.setState({
        days: newDay,
        hours: newHour,
        minutes: newMinute,
        seconds: newSecond
      })
    }, 1000)
  }

  render () {
    const {days, hours, minutes, seconds} = this.state
    this.startCount()
    return (
      <div className='timer'>
        <Container text='Days' time={days} />
        <Container text='Hours' time={hours} />
        <Container text='Minutes' time={minutes} />
        <Container text='Seconds' time={seconds} />
      </div>
    )
  }
}

export default Timer
