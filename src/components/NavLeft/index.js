import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import MenuConfig from './../../config/menuConfig';


const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
      })
  };
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  };
  render() {
    return (
      <div>
        <div className="logo" />
        <Menu mode="inline" theme="dark" >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;