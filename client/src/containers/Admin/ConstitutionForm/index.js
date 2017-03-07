import React, { Component, PropTypes } from 'react';

class ConstitutionForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="constitution-form">
        Create Constitution
      </div>
    );
  }
}

export default ConstitutionForm;
