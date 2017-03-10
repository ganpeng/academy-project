import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getConstitution } from '../../../actions/constitution';

import MyUpdateEditor from '../../../components/Admin/MyUpdateEditor/';

class AdminConstitutionListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { constitution } = this.props;
    console.log(constitution);
    return (
      <div className="admin-constitution-list">
        <MyUpdateEditor />
      </div>
    );
  }
}



export default AdminConstitutionListPage;
