import React, { Component } from 'react'

class Tarjeta extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }

  componentDidMount(){
    console.log("this.props.datos",this.props.datos.properties.categories)
  }
  
  render () {

    if (this.props.datos.tipo){

      return (
        <div className="wrapper-tarjetas">

          {/* Mezclar string con variables */}
          <li key={index} className="category" href={`#${item.prueba}`}></li>

          {/* Si existe un elemento */}
          {item.category && <h5 className="mt-4 mb-3">{item.category}</h5>}  
          
        </div> 
      );

    } else {

      return (

        <div className="wrapper-tarjetas" id={this.props.datos.prueba}>
          <h4>{this.props.datos.title}</h4>
          <div className="items-tarjetas" >{this.props.datos.properties.map((property, index) => {
            return (
              <div className="item"key={index}>
                <a  className="link" href={property.url} target="blank">{property.title}</a>
                <p>{property.description}</p>
              </div>)
            })}
          </div>
        </div> 

      );   
        
    }
   

  }
}

export default Tarjeta;