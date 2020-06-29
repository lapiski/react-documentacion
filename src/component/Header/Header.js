import React, { Component } from 'react'

class Header extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }


  render () {
    return (
      <div className="header">
        <ul>
          <li>Css</li>
          <li>Flexbox</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Wordpress</li>
          <li>Recursos</li>
        </ul>
      </div>
    );
  }
}

export default Header;