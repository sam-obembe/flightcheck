import React from 'react'
import LandingNav from './LandingNav'
import LoginForm from './LoginForm'

class Landing extends React.Component{
  constructor(){
    super()
      this.state ={
        user: "demo",
        pass: "demo"
    }
    
  }
  render(){
    return(
      <div style = {{display:"flex", flexDirection:"column"}}>
      
        <LandingNav/>
   
        <LoginForm toMatch = {this.state}/>

      </div>
    )
  }
}

export default Landing