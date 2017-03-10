import React, { Component, PropTypes, RichUtils } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { createConstitutionRequest, getConstitution, updateConstitutionRequest } from '../../../actions/constitution';

import MyEditor from '../../../components/Admin/MyEditor/';


class AdminConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }


  render() {
    const { constitution, createConstitutionRequest, getConstitution } = this.props;
    return (
      <div className="admin-constitution">
        <MyEditor />
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    constitution: state.constitution
  }
}




export default connect(mapStatesToProps, { createConstitutionRequest, getConstitution, updateConstitutionRequest })(AdminConstitutionPage);
