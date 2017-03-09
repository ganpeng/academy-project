import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../../components/Admin/LoginForm/';
import { loginRequest, setUser } from '../../../actions/authentication';

class AdminLoginPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }

    this.redirect = this.redirect.bind(this);
  }

  redirect(state) {
    this.setState({redirect: state});
  }


  render() {
    const { loginRequest, setUser } = this.props;
    const { redirect } = this.state;
    return (
      <div className="admin-login">
        {
          redirect ? <Redirect to="/admin" /> : <LoginForm loginRequest={loginRequest} setUser={setUser} redirect={this.redirect} />
        }
      </div>
    );
  }
}

export default connect(null, { loginRequest, setUser })(AdminLoginPage);
