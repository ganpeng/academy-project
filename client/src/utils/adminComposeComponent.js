import React, { Component, PropTypes } from 'react';
import { Layout, Button, Icon } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;

import SideMenu from '../components/SideMenu/';
import { setUser } from '../actions/authentication';


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


    constructor(props) {
      super(props);
      this.state = {
        redirect: false
      }
    }


    handleLogout() {
      this.props.setUser(null);
      this.setState({
        redirect: true
      })
    }


    render() {
      const {  authentication: { isAuthenticated, user}} = this.props
      return (
        <div id="admin-page" className="admin-page">
          {
            !this.state.redirect

            ? (isAuthenticated
                ? <Layout
                    style={styles.layout}
                  >
                    <Sider>
                      <div className="logo" style={{height:"100px", position: "relative"}}>
                        <Link to="/">
                          <Icon type="home" style={{color: "#fff", fontSize: "40px",position: "absolute", top: "50%", left: "50%", marginTop: "-20px", marginLeft: "-20px", cursor: "pointer"}}/>
                        </Link>
                      </div>
                      <SideMenu />
                    </Sider>
                    <Layout>
                      <Header style={styles.header}>
                        <div className="admin-show-username">
                          <span className="username">
                            管理员&nbsp;
                            {user.data ? user.data.username : null}
                          </span>
                          <Button type="danger" onClick={this.handleLogout.bind(this)}>退出登录</Button>
                        </div>
                      </Header>
                      <Content style={styles.content}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
                          <MyComponent {...this.props} />
                        </div>
                      </Content>
                      <Footer style={styles.footer}>
                        &copy;2017&nbsp;华医消化内镜研究院
                      </Footer>
                    </Layout>
                  </Layout>
                : <Redirect to="/admin/login" />)
              : <Redirect to="/admin/login" />
          }
        </div>
      );
    }
  }

  return connect(mapStatesToProps, { setUser })(AdminComposeComponent);

}


function mapStatesToProps(state) {
  return {
    authentication: state.authentication
  }
}



