import React, { Component, PropTypes } from 'react';

import Constitution from '../../components/Constitution/';

class ConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="constitution-container">
        <Constitution />
      </div>
    );
  }
}

export default ConstitutionPage;
