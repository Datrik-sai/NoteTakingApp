import React ,{Component} from 'react';
import ChildComponent from './child'

class ParentComponent extends Component {
    constructor(){
        super();
        this.state ={
            Message: ' Sai'
        }
    }

    HandlerMethod = (LastName) => {
         alert(`Hello ${this.state.Message} ${LastName}`)
         console.log(React.version)
    }
    render(){
        return(
            <div>
                <ChildComponent HandleClick = {this.HandlerMethod} />
            </div>
        )
    }
}

export default  ParentComponent;