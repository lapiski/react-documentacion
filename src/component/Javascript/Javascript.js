import React, { Component } from 'react';
//import { arrayDatos } from '../../datos.json';

// get our fontawesome imports
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

class ContenedorDocumentacion extends Component {

  constructor(props){
    super(props);

    this.state={  
    }
  }

  render () {
  
  
    //<p id="demo"></p>
    //<button className="btn" onClick={this.lanzaFuncion}>Ejecutar</button>
    //<p>npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome</p>
    // this.props.noticias; porque estamos pasando la prop del PADRE al HIJO en vez de this.state.noticias


    return (
      <div>
        {this.props.datosJavascript.map((item,index) =>{
            console.log("item",item)
            return (
              <div key={index} className="category" >
                <h4>{item.category}</h4>
                {
                  item.properties.map((property, index) => {
                    return(
                    <div key={index} className="property">
                      <h5>{property.title}</h5>
                      <p>{property.description}:</p>
          
                      <div className="example">
                        <a className="icon" href="https://www.w3schools.com/js/js_random.asp" target="blank">Flecha</a>
                        <h6>Example</h6>
                        <p>{property.example} <span>// {property.back}</span></p>
          
                        { property.example2
                          ? <div>
                              <p>{property.example2} <span>// {property.back2}</span></p>
                            </div>
                          : <div></div>
                        }
                      </div>
                    </div>)
                  })  
                }
              </div>
            )
          })}
      </div>
    )
  }




}

export default ContenedorDocumentacion;

