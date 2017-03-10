import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="footer">
        <Link to="/admin" style={{color:"#fff", padding:"30px"}}>管理员</Link>
      </div>
    );
  }
}

export default Footer;
