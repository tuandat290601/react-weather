import React, { Component } from 'react'
import { connect } from "react-redux"

import ForecastItem from '../ForecastItem/ForecastItem'

import "./DateForecast.css"
class DateForecast extends Component {
  render() {
    return (
      <section className='date-forecast'>
        <h1 className='date-forecast-title'>
          Welcome to {this.props.city.name}.
        </h1>
        <div className="forecast-list">
        {this.props.city.cityChosen?.daily.map((day,index)=>{
          return <ForecastItem key = {index} day = {day}/>
        })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDayChosen: (payload) => {dispatch({type: "SET_DAY_CHOSEN", payload})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DateForecast)

