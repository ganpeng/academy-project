import React, { Component, PropTypes } from 'react';

import { NavLink } from 'react-router-dom';


class Header extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="header">
        <div className="content-wrapper">
          <NavLink to="/" activeClassName="active">
            <div className="logo"></div>
          </NavLink>
          <nav className="nav-list">
            <NavLink className="nav-item" activeClassName="active" to="/introduction" >
              <span className="item-icon"></span>
              <span className="item-text">
                研究院介绍
              </span>
            </NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/organization" >
              <span className="item-icon"></span>
              <span className="item-text">
                组织机构
              </span>
            </NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/constitution" >
              <span className="item-icon"></span>
              <span className="item-text">
                章程
              </span>
            </NavLink>
            <NavLink className="nav-item"  activeClassName="active" to="/expertlist" >
              <span className="item-icon"></span>
              <span className="item-text">
                专家委员会名单
              </span>
            </NavLink>
            <NavLink className="nav-item"  activeClassName="active" to="/leader" >
              <span className="item-icon"></span>
              <span className="item-text">
                研究院领导
              </span>
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
