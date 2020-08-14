import React, { Component } from 'react'

class Sidebar extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }
  
  render () {
    return (
      <ul className="listado-categorias">
        {this.props.datos.map((item, index) => {
          return (
            <li key={index} className="category">
              {item.category}


              {item.properties && (
                <ul>
                  {item.properties.map((property, index) => {
                    return (
                      <li key={index} className="property">
                        {property.title}
                      </li>
                    );
                  })}
                </ul>
              )}


            </li>
          );
        })}
      </ul>


    );
  }
}

export default Sidebar;