import React, { Component } from 'react';

import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Javascript from './component/Javascript/Javascript';
import { datosJavascript } from './datosJavascript.json';
import { datosFlexbox } from './datosFlexbox.json';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      datosJavascript,
    };
  }


  render() {
    return (
        <div className="my-app">
          <Header/>
          <Sidebar />
          <div className="container-documentation">
            <Javascript datosJavascript={this.state.datosJavascript} />
          </div>
        </div>
    );
  }
}

export default App