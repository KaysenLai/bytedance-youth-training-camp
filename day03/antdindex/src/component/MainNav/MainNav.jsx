import React from "react";
import { Col, Input, Layout, Menu, Row } from "antd";
const { Header } = Layout;
const { Search } = Input;

const navItems = [
  "设计",
  "文档",
  "组件",
  "资源",
  "国内镜像",
  "国内镜像",
  "国内镜像",
];

const MainNav = () => {
  return (
    <Header className="nav">
      <Row justify="space-between" className="nav-row">
        <Col className="nav__logo">
          <img
            className="nav__logo-img"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="antd logo"
          />
          <h1>Ant Design</h1>
          <Search placeholder="input search text" />
        </Col>
        <Col span={7}>
          <Menu
            className="nav-menu"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            {navItems.map((item, index) => (
              <Menu.Item key={item + index}>{item}</Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default MainNav;
