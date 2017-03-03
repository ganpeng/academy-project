import React, { Component, PropTypes } from 'react';

class ConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="constitution-container">
        ConstitutionPage
      </div>
    );
  }
}

export default ConstitutionPage;
