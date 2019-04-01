import React,{Component} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import {Redirect} from 'react-router-dom'
import FailModal from './FailModal'

class LoginForm extends Component{
  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      success: "",
    }
  }

  inputHandle=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submit=()=>{
    const {user,pass} = this.props.toMatch
    const {username, password} = this.state
    if(username===user && password === pass){
      this.setState({success:true})
    }else{
      this.setState({success:false})
    }
  }

  redirOrError=()=>{
    if(this.state.success === true){
      return <Redirect to = "/dashboard"/>
    }else if (this.state.success === false){
      return <FailModal hide = {this.hideDialog}/>
    }
  }

  hideDialog=()=>{
    this.setState({success:""})
  }
  

  render(){
    const loginStyle = {
      width: "20vw", display: "flex",
      flexDirection: "column", padding: "20px"
    }

    return(
      <div>
        <Paper>
          {this.redirOrError()}
          <div style = {loginStyle}>
            <Typography variant = "h5">Hello</Typography>
            <Input placeholder = "username" name = "username" onChange = {(e)=>this.inputHandle(e)}/>
            <Input  placeholder = "password" name = "password" onChange = {(e)=>this.inputHandle(e)}/>
            <Button onClick = {()=>this.submit()}>Submit</Button>
          </div>
        </Paper>
      </div>
        
   
    )
  }
}

export default LoginForm
