import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import SideMenu from '../../components/SideMenu/';

class AdminPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <Layout
        style={{height:'100%'}}
      >
        <Sider>
          <div className="logo" style={{height:"100px"}} />
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '20px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AdminPage;
