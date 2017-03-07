import React, { Component, PropTypes } from 'react';

class ExpertForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="expert-form">
        Create Expert
      </div>
    );
  }
}

export default ExpertForm;
