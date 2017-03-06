import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';

import AdminPage from '../AdminPage/';

class AdminEnter extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="">
        <AdminPage />
      </div>
    );
  }
}

export default AdminEnter;
