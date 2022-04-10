import React from "react";
import {Row, Col, Button} from 'antd'

import './about.css'
import cardImage from './images/apple-card-image.png'
import accessories from './images/accessories.jpg'
import winkingFace from './images/winking-face.png'
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'

const About = () => {

  return (
    <div className='about' id='about'>
      <Row>
        <Col xl={24} className='about-col-4'>
          {/*<img src={montereyBg} alt=""/>*/}
          <h3>macOS Monterey</h3>
          <div className='about-col-4-face'>
            <p>Мощный встречает</p>
            <img className='about-col-4-emoji' src={winkingFace} alt=""/>
          </div>
        </Col>

        <Col xl={10} className='about-col-3'>
          <h3 className='about-col-3-title'>Аксессуары для Mac</h3>
          <div><img src={accessories} alt=""/></div>
          <Button className='about-col-3-btn' type='link'>Посмотреть {<ArrowIosForwardOutline/>}</Button>
        </Col>

        <Col xl={8} className='about-col-1'>
          <div className='about-card'>
            <h2 className='about-col-1-title'>
              Получайте 3 % в день наличными обратно с Apple Card.
            </h2>
            <p>И оплачивайте свой новый Mac в течение 12 месяцев
              беспроцентно, если вы решите выписаться
              с помощью ежемесячных платежей Apple Card.*
            </p>
            <Button className='about-col-1-btn' type='link'>Купить {<ArrowIosForwardOutline/>}</Button>
          </div>
        </Col>

        <Col xl={6} className='about-col-2' ><img src={cardImage} alt=""/></Col>

      </Row>
    </div>
  )
}

export default About