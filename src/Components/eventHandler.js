import React, {Component} from 'react';

class Eventhandler extends Component{
    constructor(){
        super();
        this.state = {
            Message :'Hallo saikiran'
        }
    }
      ClickHandler = () => {
this.setState({
    Message: 'How r u '
})
    }
    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                 <button onClick = {this.ClickHandler}>Click</button>
            </div>
           
        )
    }
}
export default  Eventhandler;