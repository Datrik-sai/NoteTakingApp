import React, {Component} from 'react';

class Message extends Component {
    render(){
        return(
            <div> {this.props.relation} are my world</div>
        )
    }
}

export default Message;
