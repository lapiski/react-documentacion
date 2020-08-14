import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './component/Header/';
import Javascript from './component/Javascript/';
import Flexbox from './component/Flexbox/';
import Recursos from './component/Recursos/';
import ReactC from './component/ReactC/';
import Ficha from './component/Ficha/';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

    };
  }

  render() {
    return (
        <div className="my-app">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route
                exact
                path="/javascript"
                render={() => <Javascript datosJavascript={this.state.datosJavascript} />}
              />
              <Route
                path="/flexbox"
                render={() => <Flexbox datosFlexbox={this.state.datosFlexbox} />} 
              />
              <Route
                path="/recursos"
                render={() => <Recursos datosRecursos={this.state.datosRecursos} />} 
              />
              <Route
                path="/javascript/ficha"
                component={Ficha}
              />
              <Route
                path="/react"
                render={() => <ReactC datosReact={this.state.datosReact} />} 
              />
            </Switch> 
          </BrowserRouter>
        </div>
    );
  }
}

export default App