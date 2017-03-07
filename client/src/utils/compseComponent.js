import React, { Component, PropTypes } from 'react';

import Header from '../components/Header/';
import Footer from '../components/Footer/';


import utils from './';

export const composeComponent =  function(MyComponent) {

  class CompseComponent extends Component {
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
        <div>
          <Header />
          <div id="content" style={{minHeight: this.state.contentHeight}}>
            <MyComponent />
          </div>
          <Footer />
        </div>
      );
    }
  }

  return CompseComponent;

}

