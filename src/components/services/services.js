import React from "react";
import styled from "styled-components";
import {Card} from 'antd'
import {Laptop} from '@styled-icons/ionicons-outline'
import {LogoApple} from "@styled-icons/ionicons-solid/LogoApple"
import macImage1 from './image/macbook-pro-cart.png'
import macAirImage from './image/macbook_air.jpg'
import macPro14 from './image/macbook_pro_14.jpg'
import m1Icon from './image/icon_m1.png'

import "./services.css"

const MacLaptop = styled(Laptop)`
  width: 50px;
`

const MacLogo = styled(LogoApple)`
  width: 50px;
`

const Services = () => {

  return (
    <div className='services' id='products'>
      <div className='services-left'>
        <Card hoverable style={{width: 450, borderRadius: '8px'}} className='services-left-cart'>
          <div className="services-left-image">
            <img src={macImage1} alt="macbook image 2"/>
          </div>
          <div className="services-left-content">
            <div>
              <p>MacBook Pro 13"</p>
              <MacLogo/>
            </div>

            <div className='services-left-content-chip'>
              <p>Apple M1 chip</p>
              <div className='services-left-image'>
                <img src={m1Icon} alt=""/>
              </div>
            </div>
          </div>
        </Card>

        {/* Card left Air */}
        <Card hoverable style={{width: 450, borderRadius: '8px'}} className='services-left-cart'>
          <div className="services-left-image">
            <img src={macAirImage} alt="macbook image 2"/>
          </div>
          <div className="services-left-content">
            <div>
              <p>MacBook Air</p>
              <MacLogo/>
            </div>

            <div className='services-left-content-chip'>
              <p>Apple M1 chip</p>
              <div className='services-left-image'>
                <img src={m1Icon} alt=""/>
              </div>
            </div>
          </div>
        </Card>

        <Card hoverable style={{width: 450, borderRadius: '8px'}} className='services-left-cart'>
          <div className="services-left-image">
            <img src={macImage1} alt="macbook image 3"/>
          </div>
          <div className="services-left-content">
            <div>
              <p>MacBook Pro 13"</p>
              <MacLogo/>
            </div>

            <div className='services-left-content-chip'>
              <p>Apple M1 chip</p>
              <div className='services-left-image'>
                <img src={m1Icon} alt=""/>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className='services-main'>
        <MacLaptop/>
        <h2 className='services-main-title'>Bish laptop</h2>

        <a
          className="dg-widget-link"
          target="_blank"
          href="http://2gis.kg/bishkek/firm/70000001032763036/center/74.58386421203615,42.829117905962406/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
        >
          Посмотреть на карте Бишкека
        </a>
      </div>

      <div className="services-right">

        <Card hoverable style={{width: 450, borderRadius: '8px'}} className='services-right-cart'>
          <div className="services-right-image">
            <img src={macImage1} alt="macbook image 1"/>
          </div>
          <div className="services-right-content">
            <div>
              <p>MacBook Pro 14-in."</p>
              <MacLogo/>
            </div>

            <div className="services-left-content-chip">
              <p>M1 Pro and M1 Max</p>
              <div className="services-left-image">
                <img src={m1Icon} alt=""/>
              </div>
            </div>

          </div>
        </Card>

        <Card hoverable style={{width: 450, borderRadius: '8px'}} className='services-right-cart'>
          <div className="services-right-image">
            <img src={macImage1} alt="macbook image 1"/>
          </div>
          <div className="services-right-content">
            <div>
              <p>MacBook Pro 14-in."</p>
              <MacLogo/>
            </div>

            <div className="services-left-content-chip">
              <p>M1 Pro and M1 Max</p>
              <div className="services-left-image">
                <img src={m1Icon} alt=""/>
              </div>
            </div>

          </div>
        </Card>

        <Card hoverable style={{width: 450, borderRadius: '8px'}} className='services-right-cart'>
          <div className="services-right-image">
            <img src={macImage1} alt="macbook image 1"/>
          </div>
          <div className="services-right-content">
            <div>
              <p>MacBook Pro 14-in."</p>
              <MacLogo/>
            </div>

            <div className="services-left-content-chip">
              <p>M1 Pro and M1 Max</p>
              <div className="services-left-image">
                <img src={m1Icon} alt=""/>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </div>
  )
}

export default Services