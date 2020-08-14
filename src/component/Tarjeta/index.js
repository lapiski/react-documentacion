import React, { Component } from 'react'

class Tarjeta extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }
  
  render () {
    return (
      <div className="wrapper-tarjetas">

        {this.props.datos.map((item, index) => {
          return (
            <div>
              <h4 className="mt-4 mb-3">{item.title}</h4>
              {item.category && <h5 className="mt-4 mb-3">{item.category}</h5>}
              {item.link && <a href={item.link}><h5>Link Teclas</h5></a>}
              <div className="items-tarjetas mb-5" key={index}>
                {item.properties.map((property, index) => {
                    return (
                      <div key={index} className="item">
                        <a  className="link"
                            href={property.url}
                            target="blank">
                            {property.title}
                        </a>
                        
                        {property.subtitle && <span>{property.subtitle}</span>}
                        <p>{property.description}</p>
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

export default Tarjeta;