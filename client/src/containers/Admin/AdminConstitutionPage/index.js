import React, { Component, PropTypes } from 'react';

import MyCreateEditor from '../../../components/Admin/MyCreateEditor/';


class AdminConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="admin-constitution">
        <MyCreateEditor />
      </div>
    );
  }
}



export default AdminConstitutionPage;
