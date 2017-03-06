import React, { Component, PropTypes } from 'react';

class Welcome extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="welcome">
        <img src={require('../../../images/welcome_img.png')} alt="消化内镜" />
      </div>
    );
  }
}

export default Welcome;
