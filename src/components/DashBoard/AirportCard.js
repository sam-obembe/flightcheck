import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const AirportCard = (props)=>{
  let cardStyle = {
    width: "250px",
    margin: "10px",
  }
  const {city,country,name,img} = props.airport
  return(
    <div style = {cardStyle}>
      <Card>
        <CardActionArea>
          <img src = {img} alt = "airport" style = {{height: "250px"}}/>
        </CardActionArea>
    
   
        <CardContent>
        <Typography variant = "h5"> {name} </Typography>
          <Typography component = "p"> {city}, {country} </Typography>
        </CardContent>

        <CardActions>
          <Button onClick = {()=>props.showSearch(props.airport)}>See more</Button>
        </CardActions>
        
      </Card>
    </div>
      
   
  )
}
export default AirportCard

/*
This component implements the Card component from material UI. It accepts airport details passed through props from the dashboard. When see more is, the state in Dashboard is updated, setting "selected" in Dashboard state to the and the FlightSearch dialog is shown
*/