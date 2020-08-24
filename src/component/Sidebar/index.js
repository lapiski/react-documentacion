import React, { Component } from 'react'

class Sidebar extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }

  componentDidMount(){
    console.log("sidebar data ==>",this.props.datos)
  }

  scrollToElement = (e) => {
    // var topOfertaCupon = jQuery('.oferta-cupones').offset().top ;
		// jQuery("html,body").animate( { scrollTop:topOfertaCupon - 10} , 700 );
    
    var prueba = e.getAttribute("class");
    alert(prueba);
  }
  
  render () {
    return (
      <ul className="listado-categorias">
        {this.props.datos.map((item, index) => {
          return (
            <li key={index} className="category">
              <h4 className={item.id} onClick={this.scrollToElement}>{item.title}</h4>

              <ul>
                {item.properties.map((property, index) => {
                  return (
                    <li key={index} className="property">
                      {property.title && <span>{property.title}</span>}  
                      {property.subTitle && <h5>{property.subTitle}</h5>}  

                      {property.categories  &&
                        <ul>
                          {property.categories.map((category, index) => {
                            return(
                              <li key={index}>{category.title}</li>
                            )
                          })}
                        </ul>
                      }
                    </li>
                  );
                })}
              </ul>
         
            </li>
          );
        })}
      </ul>


    );
  }
}

export default Sidebar;