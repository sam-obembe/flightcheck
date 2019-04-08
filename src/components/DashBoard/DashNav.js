import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
// import Typography from '@material-ui/core/Typography'

const DashNav = ()=>{
  const divStyle = {
    display: "flex",
    flexDirection : "row",
    height: "50px",
    justifyContent: "space-between"
  }
  return(
    <div style = {{marginBottom: "100px"}}>
     
      <AppBar>
        
        <div style = {divStyle}>
          <img src = {require("../../paper-plane.png")} alt = "logo" width = "50px"/>
          <Link to = "/"><Button>Logout</Button></Link>
        </div>
        
      </AppBar>
 
    </div>
  
  )
}

export default DashNav

/*
 <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/


