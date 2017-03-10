import React, { Component, PropTypes } from 'react';

import MyUpdateEditor from '../../../components/Admin/MyUpdateEditor/';

class AdminConstitutionListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="admin-constitution-list">
        <MyUpdateEditor />
      </div>
    );
  }
}



export default AdminConstitutionListPage;
