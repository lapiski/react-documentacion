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

    if (this.props.datos.tipoCategory){

      return (
        <div className="wrapper-tarjetas">
          <h4 id={this.props.datos.id}>{this.props.datos.title}</h4>
          <div>{this.props.datos.properties.map((property, index) => {
            return (
              <div className="category" key={index}>

                <h5>{property.subTitle}</h5>
                <div className="items-tarjetas">{property.categories.map((category, index) => {
                  return(
                      <div key={index} className="item">
                          <a  className="link" href={category.url} target="blank"> {category.title}</a>
                          <p>{category.description}</p>
                      </div>
                      )
                  })}
                </div>
              </div>)
            })}
          </div>
        </div> 
      );

    } else {

      return (

        <div className="wrapper-tarjetas">
          <h4 id={this.props.datos.id}>{this.props.datos.title}</h4>
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