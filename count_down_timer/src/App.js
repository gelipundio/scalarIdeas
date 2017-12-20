import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './timer/Timer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to this awesome Count-Down-Timer!!</h1>
        </header>
        <p className='App-intro'>
          <Timer days={1} hours={23} minutes={27} seconds={47} />
        </p>
      </div>
    )
  }
}

export default App
