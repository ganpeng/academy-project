import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';

import { composeComponent } from '../../utils/compseComponent';
import adminComposeComponent from '../../utils/adminComposeComponent';


import WelcomePage from '../WelcomePage/';
import IntroductionPage from '../IntroductionPage/';
import OrganizationPage from '../OrganizationPage/';
import ConstitutionPage from '../ConstitutionPage/';
import ExpertListPage from '../ExpertListPage/';
import LeaderPage from '../LeaderPage/';

import AdminPage from '../Admin/AdminPage/';
import AdminExpertCreatePage from '../Admin/AdminExpertCreatePage/';
import AdminExpertListPage from '../Admin/AdminExpertListPage/';
import ConstitutionForm from '../Admin/ConstitutionForm/';
import ConstitutionList from '../Admin/ConstitutionList/';
import LeaderForm from '../Admin/LeaderForm/';
import LeaderList from '../Admin/LeaderList/';




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


        <Route exact={true} path="/admin" component={adminComposeComponent(AdminPage)} />
        <Route exact={true} path="/admin/expert" component={adminComposeComponent(AdminExpertCreatePage)} />
        <Route path="/admin/expert/list" component={adminComposeComponent(AdminExpertListPage)} />
        <Route path="/admin/expert/update/:id" component={adminComposeComponent(AdminExpertCreatePage)} />
        <Route exact={true} path="/admin/constitution" component={adminComposeComponent(ConstitutionForm)} />
        <Route path="/admin/constitution/list" component={adminComposeComponent(ConstitutionList)} />
        <Route exact={true} path="/admin/leader" component={adminComposeComponent(LeaderForm)} />
        <Route path="/admin/leader/list" component={adminComposeComponent(LeaderList)} />
        <Route path="/admin/leader/update/:id" component={adminComposeComponent(LeaderForm)} />
      </div>
    );
  }
}

export default App;
