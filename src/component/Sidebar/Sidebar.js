import React, { Component } from 'react'

class MenuDocumentacion extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }


  render () {
    return (
      <div className="listado-categorias">
        <ul>
          <li>JS Array</li>
          <ul>
            <li>filter()</li>
            <li>map()</li>
            <li>push()</li>
            <li>unshift()</li>
            <li>shift()</li>
            <li>pop()</li>
            <li>splice()</li>
            <li>join()</li>
          </ul>
          <li>JS Math</li>
          <ul>
            <li>floor()</li>
            <li>random()</li>
            <li>round()</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default MenuDocumentacion;