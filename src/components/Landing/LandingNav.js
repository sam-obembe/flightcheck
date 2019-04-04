import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const LandingNav = ()=>{
  return(
    <div style = {{marginBottom: "100px"}}>
      <AppBar>
        <Typography variant = "h4">Flight Search</Typography>
      </AppBar>
    </div>
  
  )
}

export default LandingNav