import React, {Component} from 'react'
import DashNav from './DashNav'
import airports from './airports'
import AirportCard from './AirportCard'
import FlightSearch from './FlightSearch'

class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      airports: airports,
      search: false,
      selected: ""
    }
  }

  showAirports =()=>{
    return this.state.airports.map((airport,i)=>{
      return <AirportCard key = {i}  airport = {airport} showSearch = {this.searchToggle}/>
    })
  }

  showFlightSearch =()=>{
    if(this.state.search===true){
      return <FlightSearch searchTogg = {this.searchToggle} airport = {this.state.selected}/>
    }
  }

  searchToggle=(airport)=>{
    if(this.state.search===false){
      this.setState({search:true})
      this.setState({selected: airport})
    }else{
      this.setState({search:false})
      this.setState({selected:""})
  }
  }


  render(){
    console.log(this.state)
    const gridStyle = {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap"
    }
    
    return(
      <div>
        <DashNav/>
        {this.showFlightSearch()}
        <div style= {gridStyle}>
          {this.showAirports()}
        </div>
        
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Dashboard

/*
On the dashboard I'm rendering a card for each airport using the showAirports function which maps over the airports array in state, which I set to contain values I'm importing from airports.js

*/