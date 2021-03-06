import React from "react";

import AppHeader from "./components/common/header";
import AppHome from "./views/home";

import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
};

export default App;
