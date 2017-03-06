import React, { Component, PropTypes } from 'react';

import { Route } from 'react-router-dom';

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import WelcomePage from '../WelcomePage/';
import IntroductionPage from '../IntroductionPage/';
import OrganizationPage from '../OrganizationPage/';
import ConstitutionPage from '../ConstitutionPage/';
import ExpertListPage from '../ExpertListPage/';
import LeaderPage from '../LeaderPage/';

import utils from '../../utils/';

class FrontEnter extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props)
    this.state = {
      contentHeight:'0'
    }

    this.changeHeight = this.changeHeight.bind(this);
  }

  changeHeight() {
    this.setState({
      contentHeight: utils.getContentHeight()
    })
  }


  componentDidMount() {
    this.changeHeight();
    window.addEventListener('resize',this.changeHeight, false);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.changeHeight, false);
  }


  render() {
    return (
      <div className="">
        <Header />
        <div id="content" style={{minHeight: this.state.contentHeight}}>
          <Route exact={true} path="/" component={WelcomePage} />
          <Route  path="/introduction" component={IntroductionPage} />
          <Route  path="/organization" component={OrganizationPage} />
          <Route  path="/constitution" component={ConstitutionPage} />
          <Route  path="/expertlist" component={ExpertListPage} />
          <Route  path="/leader" component={LeaderPage} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default FrontEnter;
