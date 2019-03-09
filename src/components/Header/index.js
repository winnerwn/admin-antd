import React, { Component } from 'react';
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";

class Header extends Component {
  componentWillMount() {
    this.setState({
      username: 'bobby',
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row>
          <Col span="4">
            首页
          </Col>
          <Col span="20">

          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;