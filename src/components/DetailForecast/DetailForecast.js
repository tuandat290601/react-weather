import React, { Component } from 'react'
import { connect } from "react-redux"
import { convertMsToFullDatetime, convertMsToDayInWeek } from '../../utils/helperFunctions'

import "./DetailForecast.css"

class DetailForecast extends Component {
  render() {
    return (
      <section className='detail-forecast'>
        {this.props.city.dayChosen !== null && <div className="detail-forecast-container">
          <h1 className="detail-title">
            {convertMsToDayInWeek(this.props.city.dayChosen.dt * 1000)}
          </h1>
          <div className="detail-list">
            <div className="list">
              <div className="list-title">
                Sun and Moon
              </div>
              <p className="detail">Sunrise: {convertMsToFullDatetime(this.props.city.dayChosen.sunrise * 1000)}</p>
              <p className="detail">Sunset: {convertMsToFullDatetime(this.props.city.dayChosen.sunset * 1000)}</p>
              <p className="detail">Moonrise: {convertMsToFullDatetime(this.props.city.dayChosen.moonrise * 1000)}</p>
              <p className="detail">Moonset: {convertMsToFullDatetime(this.props.city.dayChosen.moonset * 1000)}</p>
            </div>
            <div className="list">
              <div className="list-title">
                Temparature
              </div>
              <p className="detail">Day: {this.props.city.dayChosen.temp.day}&#176;C</p>
              <p className="detail">Min: {this.props.city.dayChosen.temp.min}&#176;C</p>
              <p className="detail">Max: {this.props.city.dayChosen.temp.max}&#176;C</p>
              <p className="detail">Night: {this.props.city.dayChosen.temp.night}&#176;C</p>
            </div>
            <div className="list">
              <div className="list-title">
                Feels like
              </div>
              <p className="detail">Day: {this.props.city.dayChosen.feels_like.day}&#176;C</p>
              <p className="detail">Morning: {this.props.city.dayChosen.feels_like.morn}&#176;C</p>
              <p className="detail">Evening: {this.props.city.dayChosen.feels_like.eve}&#176;C</p>
              <p className="detail">Night: {this.props.city.dayChosen.feels_like.night}&#176;C</p>
            </div>
            <div className="list">
              <div className="list-title">
                Other
              </div>
              <p className="detail">Wind degrees: {this.props.city.dayChosen.wind_deg}</p>
              <p className="detail">Wind speed: {this.props.city.dayChosen.wind_speed}</p>
              <p className="detail">Clouds: {this.props.city.dayChosen.clouds}</p>
              <p className="detail">UV: {this.props.city.dayChosen.uvi}</p>
            </div>
          </div>
        </div>}
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailForecast)
