import React, { Component } from 'react'
import Pendulum from './Pendulum.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={Pendulum} alt="Pendulum" />
      </div>
    )
  }
}

export default Spinner
