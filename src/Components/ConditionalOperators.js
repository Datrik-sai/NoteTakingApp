import React, {Component} from 'react'

class Conditional  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn : true
        }
    }
    
    render(){
    //     let Message;
    // if(this.state.IsLoggedIn){
    //     Message= <div>Welcome Saikiran</div>
    // }
    // else{
    //     Message= <div>Welcome Guest</div>
    // }
    //     return(
    //         <div>{Message}</div>
    //     )
    // return(
    //     this.state.IsLoggedIn ? (<div>Welcome saikiran</div>) : (<div>Welcome Guest</div>)
    // )
    return(
        this.state.IsLoggedIn && <div>Welcome Saikiran</div>
    )
    }
}

export default Conditional;
