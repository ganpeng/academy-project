import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Constitution from '../../components/Constitution/';
import { getConstitution } from '../../actions/constitution';


class ConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    const { constitution, getConstitution } = this.props;
    return (
      <div className="constitution-container">
        <Constitution constitution={constitution} getConstitution={getConstitution} />
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    constitution: state.constitution
  }
}



export default connect(mapStatesToProps, { getConstitution })(ConstitutionPage);
