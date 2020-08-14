import React, { Component } from "react";
import Sidebar from '../Sidebar/';
import { datosFlexbox } from '../../datosFlexbox.json';

class Flexbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datosFlexbox,
    };
  }

  render() {
    return (
      <div className="container-documentation">
        
        <Sidebar datos={this.state.datosFlexbox} />

        <div className="container-flexbox">
          {this.state.datosFlexbox.map((item, index) => {
            //console.log("item", item);
            return (
              <div key={index} className="category">
                <h5>{item.category}</h5>
                <p>{item.description}</p>
                <div className="wrapper-properties">
                  {item.properties.map((property, index) => {
                    return (
                      <div key={index} className="property">
                        <p className="title">{property.title}</p>
                        <p>{property.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Flexbox;
