import React, { PropTypes } from 'react';
const Header = props => (
  <div role="navigation" className="header navbar navbar-inverse navbar-fixed-top" data-reactid=".0.0">
    <div className="header-inner" >
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">
            <span className="prefix">R</span>
            <span>Suite InputNumber</span>
          </a>
          <button type="button" className="navbar-toggle collapsed">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse collapse">
          <ul className="nav navbar-right navbar-nav"
          ><li role="presentation" className="">
              <a href="https://github.com/rsuite/rsuite-inputnumber" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
