import { Anchor, Layout, Button } from "antd";
import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import Home from "../home";
import Services from "../services";
import About from "../about";
import Contacts from "../contacts";
import Job from "../job";

const { Footer, Header, Content } = Layout
const { Link } = Anchor

function App() {
  return (
    <>
      <Layout id='#main'>
        <Header
          // title={<NavLink to='/'><img src={macLogo} alt=""/></NavLink>}
          style={{ position: 'fixed', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1, width: '100%', color: "#ffffff" }}
        >
          <div className='header-logo' style={{ paddingLeft: '40px' }}> <Button type='link' href='/#main' style={{ fontSize: "17px" }}>Bish laptop</Button> </div>

          <Anchor affix={false} style={{ fontSize: '20px', }}>
            <Link href='#home' title='Главная' />
            <Link href='#products' title='Товары' />
            <Link href='#about' title='О нас' />
            <Link href='#contacts' title='Контакты' />
            <Link href='#jobs' title='Вакансии' />
          </Anchor>
        </Header>

        <Content style={{ marginTop: 64 }} className='main-container'>
          <Home />
          <Services />
          <About />
          <Contacts />
          <Job />
        </Content>

        <Footer style={{ textAlign: 'center' }}>Bish laptop ©2022 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
