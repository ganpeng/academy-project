import React, { Component, PropTypes } from 'react';


class IntroductionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="introduction-container">
        IntroductionPage
      </div>
    );
  }
}

export default IntroductionPage;
