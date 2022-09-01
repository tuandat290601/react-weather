import React, { Component } from 'react'
import { connect } from "react-redux"

import CityItem from '../CityItem/CityItem'

import "./CityList.css"


class CityList extends Component {
  render() {
    return (
      <div className='city-list'>
          {this.props.city.cityList.length > 0 && this.props.city.cityList.map((city, index) => {
            return <CityItem key = {index} {...city}/>
          })}
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
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList)
