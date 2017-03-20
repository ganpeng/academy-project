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
        <div className="link-wrapper">
          <Link to="/admin" style={{color:"#fff"}}>关于我们</Link>&nbsp;|&nbsp;
          <Link to="/admin" style={{color:"#fff"}}>加入我们</Link>&nbsp;|&nbsp;
          <Link to="/admin" style={{color:"#fff"}}>合作申请</Link>&nbsp;|&nbsp;
          <Link to="/admin" style={{color:"#fff"}}>意见反馈</Link>
        </div>
        <p className="copyright">&copy; 2016-2017 沪ICP备13004620号-5</p>
      </div>
    );
  }
}

export default Footer;
