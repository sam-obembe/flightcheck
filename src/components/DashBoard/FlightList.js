import React, {Component} from 'react'
import Table from '@material-ui/core/Table'
import  TableHead from  '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import Button from '@material-ui/core/Button'


class FlightList extends Component{
  constructor(props){
    super(props)
    this.state = {
      page:1,
      firstFlight: 0,
      // lastFlight: 25
    }
  }

  flightList = ()=>{
    const {flights} = this.props
    const{firstFlight} = this.state
    // console.log(flights.slice(0,25))
    return flights.slice(firstFlight, firstFlight+25).map((flight,i)=>{
      return (
        <TableRow key = {i}>
        <TableCell>{flight.callsign}</TableCell>
        <TableCell>{flight.estDepartureAirport}</TableCell>
        <TableCell>{this.convertToString(flight.firstSeen)}</TableCell>
        <TableCell>{flight.estArrivalAirport}</TableCell>
      </TableRow>
      )
    })
  }

  convertToString(utcSeconds){
    let time = new Date(utcSeconds*1000)
    return time.toUTCString()
  }

  pageChange=(arg)=>{
    let {firstFlight, page} = this.state
    if(arg === "Next"){
      let newFlight = firstFlight + 25
      let newPage = page+1
      this.setState({firstFlight:newFlight})
      this.setState({page: newPage})
    }
    else if(arg === "Previous" && this.state.page>1){
      let newFlight = firstFlight -25
      let newPage = page-1
      this.setState({firstFlight:newFlight})
      this.setState({page: newPage})
    }
  }

  render(){
    return(
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flight Number</TableCell>
              <TableCell>Departing From</TableCell>
              <TableCell>Departure Time</TableCell>
              <TableCell>Arriving At</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.flightList()}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell>{this.state.page}</TableCell>  

              <TableCell>
                <Button onClick = {()=>this.pageChange("Previous")}>
                  Previous
                </Button>  
              </TableCell>

              <TableCell>
                <Button onClick = {()=>this.pageChange("Next")}>
                  Next
                </Button>
              </TableCell>

            

            </TableRow>

            
            
          </TableFooter>
        </Table>

      </div>
    )
  }
}

export default FlightList


/*
 flights array structure
 [
   {
     icao24,
     callsign,
     firstSeen,
     lastSeen,
     estArrivalAirport,
     estDepartureAirport,
   }
 ]
*/