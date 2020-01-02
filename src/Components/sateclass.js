import React, { Component } from "react";

class MessageState extends Component {
  constructor() {
    super();
    this.state = {
      My_Message: "my testing dynamic state"
    };
  }

  OnChangeHandler = () =>{
      this.setState({
          My_Message: 'Thanks for clicking the event'
      })
  }
  render() {
    return <div> 
        <h1 onClick = {()=>this.OnChangeHandler()}>
        {this.state.My_Message} </h1>
        <br></br>
        <button onClick = {()=>this.OnChangeHandler()}>Click to Change</button>
     </div>;
  }
}
export default MessageState;
