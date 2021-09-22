import React from "react";
import { Layout } from "antd";
import "./IndexPage.scss";
import Banner from "../../component/Banner/Banner";
import MainNav from "../../component/MainNav/MainNav";
const { Content, Footer } = Layout;

const IndexPage = () => {
  return (
    <Layout className="layout">
      <MainNav />
      <Content>
        <Banner />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default IndexPage;
