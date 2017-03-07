import React, { Component, PropTypes } from 'react';

class ConstitutionList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="constitution-list">
        Constitution List
      </div>
    );
  }
}

export default ConstitutionList;
