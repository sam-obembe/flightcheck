import React from 'react'
import AppBar from '@material-ui/core/AppBar'


const LandingNav = ()=>{
  return(
    <div style = {{marginBottom: "100px"}}>
      <AppBar>
      <img src = {require("../../paper-plane.png")} alt = "logo" width = "50px"/>
      </AppBar>
    </div>
  
  )
}

export default LandingNav