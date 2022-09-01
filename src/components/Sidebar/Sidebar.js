import React, { Component } from 'react'
import CityList from '../CityList/CityList'

import { connect } from "react-redux"


import "./Sidebar.css"

class Sidebar extends Component {
  constructor(){
    super()
    this.state = {
      searchKey: ""
    }
  }
  render() {
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      this.props.getCityList(this.state.searchKey);
    }
    return (
      <aside className='sidebar'>
        <div className="sidebar-container">
          <form className="sidebar-search-container" onSubmit={handleSearchSubmit}>
            <input type="text" className='sidebar-search'
            value = {this.state.searchKey} 
            placeholder='Enter a city...' 
            onChange={(e) => {
              this.setState({
              searchKey: e.target.value
            })}}/>
            <p className='sidebar-search-title'>Enter to search</p>
          </form>
        </div>
        <CityList />
      </aside>
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
    getCityList: (payload) => { dispatch({ type: "GET_CITY_LIST_DATA", payload} ) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
