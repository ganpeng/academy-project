import React, { Component, PropTypes, RichUtils } from 'react';

import MyEditor from '../../../components/Admin/MyEditor/';

class AdminConstitutionPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="admin-constitution">
        <MyEditor />
      </div>
    );
  }
}

export default AdminConstitutionPage;
