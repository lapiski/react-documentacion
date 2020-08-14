import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <li>
              <Link to="/javascript">Javascript</Link>
            </li>
            <li>
              <Link to="/flexbox">Flexbox</Link>
            </li>
            <li>
              <Link to="/">Css</Link>
            </li>
            <li>
              <Link to="/">Bootstrap</Link>
            </li>
            <li>
              <Link to="/react">React</Link>
            </li>
            <li>
              <Link to="/">Wordpress</Link>
            </li>
            <li>
              <Link to="/recursos">Recursos</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default Header;