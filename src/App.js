import React from "react";
import "./App.css";

import Greet from "./Components/testfunction";
import Message from "./Components/testclass";
import MessageState from "./Components/sateclass";
import Counter from "./Components/Counter";
import Eventhandler from "./Components/eventHandler";
import ParentComponent from "./Components/Parent";
import Conditional from "./Components/ConditionalOperators";
import Styles from "./Components/Styles";
import InlineStyling from "./Components/inlinestyling";
import Noteapp from './Notestakingapp/Noteapp';
import './Notestakingapp/Noteapp.css';

function App() {
  return (
    <div className="App">
      {/* <Greet name='saikiran'/>
      <Greet name='saipriya'/>
      <Greet name='sarika'/>
  <Message relation='siblings'/> 
  <MessageState/>  
  <Counter/>
  <Eventhandler/>
  
  <Conditional/>
  <Styles />
  
  <InlineStyling/>
  <ParentComponent /> */}
  <Noteapp/>
    </div>
  );
}

export default App;
