import React, { Component } from 'react'
import { connect } from "react-redux"
import { convertDeg } from '../../utils/helperFunctions'
import "./CityItem.css"

class CityItem extends Component {
    render() {
        return (
            <div className='city-item' onClick={()=>{
                this.props.getCityForecastData({lat: this.props.coord.lat, lon: this.props.coord.lon, name: this.props.name})
                this.props.setCityName(this.props.name)
                }}>
                <div className="city-item-container">
                    <div className="city-item-header">
                        <img src={`https://openweathermap.org/images/flags/${this.props.sys.country.toLowerCase()}.png`} alt="" />
                        <p className="city-name">
                            {this.props.name}
                        </p>
                    </div>
                    <div className="city-item-body">
                        <div className="city-temp">
                            <div className="city-avg-temp">
                                {convertDeg(this.props.main.temp)}&#176;C
                            </div>
                            <div className="city-desc-temp">
                                temperature from {convertDeg(this.props.main.temp_min)}&#176;C to {convertDeg(this.props.main.temp_max)}&#176;C
                            </div>
                        </div>
                        <div className="city-wind-cloud">
                            wind {this.props.wind.speed} m/s, cloud {this.props.clouds.all}%
                        </div>
                    </div>
                    <div className="city-item-footer">
                        Coordinate [{this.props.coord.lat}, {this.props.coord.lon}]
                    </div>
                </div>
            </div>
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
        getCityForecastData: (payload) => { dispatch({ type: "GET_CITY_FORECAST_DATA", payload} ) },
        setCityName: (payload) => {dispatch({type: "SET_NAME", payload})}
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CityItem)
