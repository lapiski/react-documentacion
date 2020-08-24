import React, { Component } from "react";
import Sidebar from '../Sidebar/';
import Tarjeta from '../Tarjeta/';
import Tabla from '../Tabla/';
import { datosJavascript } from '../../datosJavascript.json';
import { Link } from 'react-router-dom';

class Javascript extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datosJavascript,
    };
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container-documentation">

        <Sidebar datos={this.state.datosJavascript} />

        <div className="container-javascript">

          <Link to="javascript/ficha">Ir a FICHA</Link>

          <Tarjeta datos={this.state.datosJavascript.find(element => element.title === "Métodos Array")}/>
          <Tarjeta datos={this.state.datosJavascript.find(element => element.title === "Eventos")}/>
          <Tarjeta datos={this.state.datosJavascript.find(element => element.title === "Objeto Math")}/>
          <Tarjeta datos={this.state.datosJavascript.find(element => element.title === "Objeto Number")}/>
          <Tarjeta datos={this.state.datosJavascript.find(element => element.title === "DOM")}/>
          <Tabla datos={this.state.datosJavascript.find(element => element.title === "Operadores")}/>
          <Tarjeta datos={this.state.datosJavascript.find(element => element.title === "Tipos de datos")}/>
          

          {/* <Tarjeta datos={this.state.datosEventos}/>


          <Tabla datos={this.state.datosOperadores}/> */}

        </div>
      </div>
    );
  }
}

export default Javascript;
