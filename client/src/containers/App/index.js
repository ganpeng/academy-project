import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from '../WelcomePage/';
import IntroductionPage from '../IntroductionPage/';
import OrganizationPage from '../OrganizationPage/';
import ConstitutionPage from '../ConstitutionPage/';
import ExpertListPage from '../ExpertListPage/';
import LeaderPage from '../LeaderPage/';

import AdminPage from '../AdminPage/';

import composeComponent from '../../utils/compseComponent';



class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="app">
        <Route exact={true} path="/" component={composeComponent(WelcomePage)} />
        <Route path="/introduction" component={composeComponent(IntroductionPage)} />
        <Route path="/organization" component={composeComponent(OrganizationPage)} />
        <Route path="/constitution" component={composeComponent(ConstitutionPage)} />
        <Route path="/expertlist" component={composeComponent(ExpertListPage)} />
        <Route path="/leader" component={composeComponent(LeaderPage)} />


        <Route path="/admin" component={AdminPage} />
      </div>
    );
  }
}

export default App;
