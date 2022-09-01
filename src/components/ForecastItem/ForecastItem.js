import React, { Component } from 'react'
import { connect } from "react-redux"

import { convertMsToDayInWeek } from '../../utils/helperFunctions'

import "./ForecastItem.css"
class ForecastItem extends Component {
  render() {
    return (
      <div className='forecast-item' onClick={()=>this.props.setDayChosen(this.props.day)}>
        <div className="forecast-item-container">
          <div className="forecast-icon">
            <img src={`https://openweathermap.org/img/wn/${this.props.day.weather[0].icon}@2x.png`} alt="" />
          </div>
          <div className="forecast-day">
            {convertMsToDayInWeek(this.props.day.dt * 1000)}
          </div>
          <div className="forecast-temp">
            {(this.props.day.temp.max + this.props.day.temp.min).toFixed()/2}&#176;C
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
   
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDayChosen: (payload) => {dispatch({type: "SET_DAY_CHOSEN", payload})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForecastItem)
