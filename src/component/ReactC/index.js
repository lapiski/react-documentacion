import React, { Component } from "react";
import Sidebar from '../Sidebar';
import { datosReact } from '../../datosReact.json';

class ReactC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datosReact,
    };
  }

  render() {
    return (
      <div className="container-documentation">

        <Sidebar datos={this.state.datosReact} />

        <div className="container-react">
          {this.state.datosReact.map((item, index) => {
            return (
              <div key={index} className="category">
                <h4>{item.category}</h4>
                {item.properties.map((property, index) => {
                  return (
                    <div key={index} className="property">
                      <h5>{property.title}</h5>
                      <p>{property.description}:</p>

                      <div className="example">
                        <a
                          className="icon"
                          href="https://www.w3schools.com/js/js_random.asp"
                          target="blank"
                        >
                          Flecha
                        </a>
                        <h6>Example</h6>
                        <p>{property.example}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReactC;
