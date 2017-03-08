import React, { Component, PropTypes } from 'react';

import LoginForm from '../../../components/Admin/LoginForm/';

class AdminLoginPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-login">
        <LoginForm />
      </div>
    );
  }
}

export default AdminLoginPage;
