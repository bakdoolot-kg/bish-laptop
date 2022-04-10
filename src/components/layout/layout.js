import React from "react";
import {NavLink, Outlet} from 'react-router-dom'
import {Anchor, Layout, PageHeader} from "antd";
import {IconLink} from "../utils";
import macLogo from './images/mac84.svg'
import App from "../app/App";

const {Footer, Header, Content} = Layout
const {Link} = Anchor


const CustomLayout = () => {

  return (
    <Layout>
      <Header
        // title={<NavLink to='/'><img src={macLogo} alt=""/></NavLink>}
        style={{position: 'fixed', zIndex: 1, width: '100%'}}
      >
        <div className='header-logo'><NavLink to='/'>Logo</NavLink></div>

        <Anchor>
          <Link href='#home' title='Главная'/>
          <Link href='#services' title='Услуги'/>
          <Link href='#about' title='О нас'/>
          <Link href='#contacts' title='Контакты'/>
          <Link href='#feedback' title='Отзывы'/>
          <Link href='#team' title='Команда'/>
        </Anchor>

      </Header>

      <Content>
        {App}
      </Content>

      <Footer style={{textAlign: 'center'}}>Bish laptop ©2022 Created by Ant UED</Footer>
    </Layout>
  )
}

export default CustomLayout