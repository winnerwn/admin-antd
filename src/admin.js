import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './style/common.less';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';

class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span='3' className="nav-left">
          <NavLeft/>
        </Col>
        <Col span='21' className="main">
          <Header/>
          <Row className="content">
            content
            {/*{this.props.children}*/}
          </Row>
          <Footer/>
        </Col>
      </Row>
    );
  }
}

export default Admin;