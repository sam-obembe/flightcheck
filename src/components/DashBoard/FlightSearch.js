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
      
    }
  }

  getFlights=()=>{

  }

  hideDialog = ()=>{
    this.setState({open:false})
  }

  render(){
    const {name,city,country,icao} = this.props.airport
    return(
      <div>
        <Dialog open = {this.state.open}>
          <DialogTitle>Flights from {name}</DialogTitle>

          <DialogContent>
            <TextField
            label = "departing Flights"
            type = "number"
            />

          <TextField
            label = "arriving Flights"
            type = "number"
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