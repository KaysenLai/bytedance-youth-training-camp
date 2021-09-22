import React from "react";
import { Layout, Menu, Breadcrumb, Button, Input } from "antd";
import "./IndexPage.scss";
import { Row, Col } from "antd";
import { AudioOutlined, MobileOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
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
const IndexPage = () => {
  return (
    <Layout className="layout">
      <Header class="nav">
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
      <Content className="banner">
        <img
          className="banner__bg"
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ"
          alt="background"
        />
        <div className="banner__content">
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"
            alt="antd logo"
          />
          <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
          <a href="#">
            <MobileOutlined />
            4.0 正式版发布
          </a>
          <div className="banner__btn-wrap">
            <Button size="large" type="primary" shape="round">
              开始使用
            </Button>
            <Button size="large" shape="round">
              设计语言
            </Button>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default IndexPage;
