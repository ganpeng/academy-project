import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignUpForm from '../../../components/Admin/SignUpForm/';
import { signupRequest, setUser } from '../../../actions/authentication';

class AdminSignUpPage extends Component {
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
    const { signupRequest, setUser } = this.props;
    const { redirect } = this.state;
    return (
      <div className="admin-signup">
        {
          redirect ? <Redirect to="/admin" /> : <SignUpForm signupRequest={signupRequest} setUser={setUser} redirect={this.redirect}  />
        }
      </div>
    );
  }
}


export default connect(null, { signupRequest, setUser })(AdminSignUpPage);
