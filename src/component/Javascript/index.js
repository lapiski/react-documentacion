import React, { Component } from "react";
import Sidebar from '../Sidebar/';
import Tarjeta from '../Tarjeta/';
import Tabla from '../Tabla/';
import { datosJavascript } from '../../datosJavascript.json';
import { datosArray } from '../../datosArray.json';
import { datosEventos } from '../../datosEventos.json';
import { datosOperadores } from '../../datosOperadores.json';
import { Link } from 'react-router-dom';

class Javascript extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datosJavascript,
      datosArray,
      datosEventos,
      datosOperadores,
    };
  }

  render() {
    return (
      <div className="container-documentation">

        <Sidebar datos={this.state.datosJavascript} />

        <div className="container-javascript">

          <Link to="javascript/ficha">Ir a FICHA</Link>

          <Tarjeta datos={this.state.datosArray}/>

          <Tarjeta datos={this.state.datosEventos}/>

          <Tarjeta datos={this.state.datosJavascript}/>

          <Tabla datos={this.state.datosOperadores}/>

          {/* {this.state.datosJavascript.map((item, index) => {
            return (
              <div key={index} className="category">
                <h4>{item.category}</h4>
                {item.properties.map((property, index) => {
                  return (
                    <div key={index} className="property">
                      <h5>{property.title}</h5>
                      <p>{property.description}</p>

                      <div className="example">
                        <a
                          className="icon"
                          href="https://www.w3schools.com/js/js_random.asp"
                          target="blank"
                        >
                          Flecha
                        </a>
                        <h6>Example</h6>
                        <p>
                          {property.example} <span> {property.back}</span>
                        </p>

                        {property.example2 ? (
                          <div>
                            <p>{property.example2} <span> {property.back2}</span></p>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })} */}


        </div>
      </div>
    );
  }
}

export default Javascript;
