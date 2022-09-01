import React, { Component } from 'react'
import { connect } from "react-redux"
import { convertMsToTime } from '../../utils/helperFunctions'
import DateForecast from '../DateForecast/DateForecast'
import DetailForecast from '../DetailForecast/DetailForecast'
import "./Main.css"

class Main extends Component {
  render() {
    return (
      <main className='main'>
      {this.props.city.cityChosen !== null && 
      <>
      <div className="main-container">
            <div className="region-time">
                <h1 className="brief-time">
                    {convertMsToTime(this.props.city.cityChosen?.current.dt * 1000)}
                </h1>
                <div className="detail-time">
                    {new Date(this.props.city.cityChosen.current.dt*1000).toString()}
                </div>
            </div>
        </div>
        <DateForecast/>
        <DetailForecast/>
      </>}
        
      </main>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main)
