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
          <div className='header-logo' style={{ paddingLeft: '40px' }}> <Button type='link' href='/#main' style={{ fontSize: "17px" }}>ICTLAB</Button> </div>

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

        <Footer style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', backgroundColor: '#1D1D1F' }}>
          <div className="block-1" style={{ width: '25%', color: '#ffffff', }}>
            ICTLAB ©2022 Created by Ant UED
            <div className='header-logo' style={{ paddingLeft: '40px' }}>
              <Button type='link' href='/#main' style={{ fontSize: "17px" }}>ICTLAB</Button>
            </div>
          </div>

          <div className="block-2" style={{ width: '25%', color: '#ffffff', fontSize: '16px', padding: 10 }}>
            <p>О нас</p>
            <p>Контакты</p>
            <p>Вакансии</p>
          </div>

          <div className="block-3" style={{ width: '25%', color: '#ffffff', fontSize: '16px', padding: 10 }}>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>

          <div className="block-4" style={{ width: '25%', color: '#ffffff', fontSize: '16px', padding: 10 }}>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
