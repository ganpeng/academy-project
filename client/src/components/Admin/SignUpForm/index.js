import React, { Component, PropTypes } from 'react';

class SignUpForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-signup-form">
        Admin SignUp Form
      </div>
    );
  }
}

export default SignUpForm;
