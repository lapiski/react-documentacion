import React, { Component } from 'react'


class Tabla extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }
  
  render () {
    return (
      <div className="wrapper-tabla">
        <h4>{this.props.datos.title}</h4>
        {this.props.datos.properties.map((property, index) => {
          return (
            <div>
              <div className="item">
                <h5>{property.title}</h5>
                {property.categories.map((category, index) => {
                    return (
                      <div className="line" key={index}>
                        <span className="name">{category.name}</span>
                        <span>{category.description}</span>
                      </div>
                    );
                })}

              </div>    
            </div>
          );
        })}
      </div>
      
    );
  }
}

export default Tabla;