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

        {this.props.datos.map((item, index) => {
          return (
            <div>
              {item.title && <h4 className="mt-4 mb-3">{item.title}</h4>}
              <div className="item">
                <h5>{item.category}</h5>
             
            
                {item.properties.map((property, index) => {
                    return (
                      <div className="line" key={index}>
                        <span className="name">{property.name}</span>
                        <span>{property.description}</span>
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