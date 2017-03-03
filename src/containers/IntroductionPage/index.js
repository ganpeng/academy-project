import React, { Component, PropTypes } from 'react';

import Introduction from '../../components/Introduction/';

class IntroductionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="introduction-container">
        <Introduction />
      </div>
    );
  }
}

export default IntroductionPage;
