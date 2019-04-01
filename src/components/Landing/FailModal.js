import React,{Component} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { DialogContent, DialogActions } from '@material-ui/core';

class FailModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      open:true
    }
  }
 
  render(){
    return(
      <div>
        <Dialog open = {this.state.open}>
          <DialogContent>
            <p>Sorry wrong username or password</p>
          </DialogContent>

          <DialogActions>
            <Button onClick = {this.props.hide}>Try Again</Button>
          </DialogActions>
          
          
        </Dialog>
      </div>
    )
  }
  
}

export default FailModal