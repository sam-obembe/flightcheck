import React,{Component} from 'react'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

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

  getDepartures=(start, end)=>{
    const {icao} = this.props.airport
    axios.get(`https://opensky-network.org/api/flights/departure?airport=${icao}&begin=${start}&end=${end}`).then((res)=>{
      this.setState({departures:res.data})
    })
  }

  hideDialog = ()=>{
    this.setState({open:false})
  }

  dateSet= async (e)=>{
    const date = new Date(e.target.value)
    console.log(date)
    // this.setState({[e.target.name]: Date.parse(date.toUTCString())})
    // console.log(this.state)
  }

  render(){
    const {name,city,country,icao} = this.props.airport
    return(
      <div>
        <Dialog open = {this.state.open}>
          <DialogTitle>Flights from {name}</DialogTitle>

          <DialogContent>
            <TextField
            label = "start date"
            type = "date"
            name = "startDate"
            onChange = {(e)=>this.dateSet(e)}
            />

          <TextField
            label = "end date"
            type = "date"
            name = "endDate"
            onChange = {(e)=>this.dateSet(e)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick = {this.props.searchTogg}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default FlightSearch