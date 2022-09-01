import React, { Component } from 'react'
import { Main, Sidebar } from '../../components'

import "./Home.css"

export default class Home extends Component {
  render() {
    return (
      <main className='home'>
        <Sidebar/>
        <Main/>
      </main>
    )
  }
}
