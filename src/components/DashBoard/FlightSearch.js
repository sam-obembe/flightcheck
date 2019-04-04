import React,{Component} from 'react'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'

class FlightSearch extends Component{
  constructor(props){
    super(props)
    this.state = {
      open: true,
      startDate: "",
      endDate: "",
      departures: [],
      arrivals: []
    }
  }

  getFlights=async(start, end,flightType)=>{
    const {icao} = this.props.airport
    await axios.get(`https://opensky-network.org/api/flights/${flightType}?airport=${icao}&begin=${start}&end=${end}`).then((res)=>{
      // console.log(res.data)
      this.setState({[flightType]:res.data})
    })
  }

  hideDialog = ()=>{
    this.setState({open:false})
  }

  dateSet= async (e)=>{
    const date = new Date(e.target.value)
    await this.setState({[e.target.name]: Date.parse(date.toUTCString())/1000})
    // console.log(this.state)
  }

  render(){
    const {name,city,country,icao} = this.props.airport
    console.log(name, city, country, icao)
    const {startDate, endDate} = this.state
    return(
      <div>
        <Dialog open = {this.state.open}>
          <DialogTitle>Flights to and from {name}</DialogTitle>

          <DialogContent>
            <InputLabel>start Date</InputLabel>
            <TextField
            type = "date"
            name = "startDate"
            placeholder = "start date"
            onChange = {(e)=>this.dateSet(e)}
            /> <br/>

            <InputLabel>End Date</InputLabel>
            <TextField
              type = "date"
              name = "endDate"
              onChange = {(e)=>this.dateSet(e)}
              />
          </DialogContent>

          <DialogActions>
            <Button onClick = {()=>{
              this.getFlights(startDate,endDate,"departure")
              }}>
              Get Departures
            </Button>

            <Button onClick = {()=>{
              this.getFlights(startDate,endDate, "arrival")
              }}>
              Get Arrivals
            </Button>

            <Button onClick = {this.props.searchTogg}>Cancel</Button>
          </DialogActions>

        </Dialog>
      </div>
    )
  }
}

export default FlightSearch

/*
A component that implements the material UI Dialog component.
There are two input fields, one for the start date and one for the end date. These will set the dates in state using the function dateSet()

hideDialog() is a function that is called when the "Cancel" button is clicked. It hides the Dialog component by setting the value of "open" to false in <Dialog open = false>*stuff here* </Dialog>

getFlights() is a function capable of doing both api calls to get deparing flights and arriving flights from an airport. The airport ICAO is gotten from the dashboard and exists in this component's props in "this.props.airport"

The "Get Departures" and "Get Arrivals" buttons pass in "departure" and "arrival" into the getFlights() function respectively. 
*/