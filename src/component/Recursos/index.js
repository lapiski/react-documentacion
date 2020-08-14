import React, { Component } from "react";
import Sidebar from '../Sidebar';
import { datosRecursos } from '../../datosRecursos.json';

class Recursos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datosRecursos,
    };
  }

  render() {
    return (
      <div className="container-documentation">
        
        <Sidebar datos={this.state.datosRecursos} />

        <div className="container-flexbox">
          {this.state.datosRecursos.map((item, index) => {
            //console.log("item", item);
            return (
              <a href="{item.link}" key={index} className="category">
                <h5>{item.category}</h5>
                <p>{item.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recursos;
