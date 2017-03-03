import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../components/Header/';
import WelcomePage from '../WelcomePage/';
import IntroductionPage from '../IntroductionPage/';
import OrganizationPage from '../OrganizationPage/';
import ConstitutionPage from '../ConstitutionPage/';
import ExpertListPage from '../ExpertListPage/';
import LeaderPage from '../LeaderPage/';


class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="app">
        <Header />

        <Route exact={true} path="/" component={WelcomePage} />
        <Route  path="/introduction" component={IntroductionPage} />
        <Route  path="/organization" component={OrganizationPage} />
        <Route  path="/constitution" component={ConstitutionPage} />
        <Route  path="/expertlist" component={ExpertListPage} />
        <Route  path="/leader" component={LeaderPage} />
      </div>
    );
  }
}

export default App;
