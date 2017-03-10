import React, { Component, PropTypes, RichUtils } from 'react';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { Button, message } from 'antd';
import { connect } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import isEmpty from 'lodash/isEmpty';

import { createConstitutionRequest, getConstitution, updateConstitutionRequest } from '../../../actions/constitution';

import MyCreateEditor from '../../../components/Admin/MyCreateEditor/';


class AdminConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.getConstitution();
  }

  render() {
    return (
      <div className="admin-constitution">
        <MyCreateEditor />
      </div>
    );
  }
}



export default AdminConstitutionPage;
