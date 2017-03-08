import React, { Component, PropTypes } from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import SideMenu from '../components/SideMenu/';


const styles = {
  layout: {
    height:'100%'
  },
  header: {
    background: '#fff',
    padding: 0
  },
  content: {
    margin: '20px 16px'
  },
  footer: {
    textAlign: 'center'
  }
}


export default (MyComponent) => {
  class AdminComposeComponent extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
    };


    render() {
      return (
        <div id="admin-page" className="admin-page">
          <Layout
            style={styles.layout}
          >
            <Sider>
              <div className="logo" style={{height:"100px"}} />
              <SideMenu />
            </Sider>
            <Layout>
              <Header style={styles.header} />
              <Content style={styles.content}>
                <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
                  <MyComponent {...this.props} />
                </div>
              </Content>
              <Footer style={styles.footer}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </div>
      );
    }
  }

  return AdminComposeComponent;

}




