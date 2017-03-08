import React, { Component, PropTypes } from 'react';

class AdminSignUpPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-signup">
        Admin SignUp
      </div>
    );
  }
}

export default AdminSignUpPage;
