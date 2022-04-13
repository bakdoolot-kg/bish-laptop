import React from "react";
import { Col, Row, Card, Divider, List } from "antd";
import { NavLink } from "react-router-dom";
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'

import './job.css'

export const dataJob = [
  {
    name: 'Frontend developer',
    id: 1, description: '1-2 years.',
    requirements: [
      'React ( хорошее знание )',
      'Java Script',
      'CSS',
      'Bootstrap',
      'Другие Фреймворк приветствуются'
    ],
    conditions: [
      '5 дней в неделю',
      'Полная ЗП раз в месяц',
      'Возможна работа в офисе что в принципе желательно',
    ]
  },
  { name: 'Backend developer', id: 2, description: '1-2 years.', requirements: ['Python'] },
  { name: 'UX/UI designer', id: 3, description: '1-2 years.' },
  { name: 'Project manager', id: 4, description: '1-2 years.' },
  { name: 'Dev ops engineer', id: 5, description: '1-2 years.' },
  { name: 'Dev ops engineer', id: 6, description: '1-2 years.' },
]

const Job = () => {

  return (
    <div className='job' id='jobs'>
      {/*<h2 className='job-title'>Вакансии</h2>*/}

      <Divider orientation='left' style={{ fontSize: '35px', fontWeight: 700 }}>Вакансии</Divider>

      <div style={{ maxWidth: '90%', margin: '0 auto' }}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
            xxl: 2,
          }}
          className='jobs-list'
          itemLayout='horizontal'
          size='large'
          dataSource={dataJob}
          renderItem={item => (
            <List.Item className='jobs-list-item' style={{
              border: '1px solid rgba(0,0,0,0.30)',
              borderRadius: '10px',
              marginBottom: 20,
              padding: 25,
            }}>
              <List.Item.Meta
                title={<NavLink style={{ fontSize: "25px" }} to={`/jobs/${item.id}`}>{item.name} {<div
                  className="ap ap-smile"></div>}</NavLink>}
              />
              <div className='jobs-list-item-svg' style={{ width: '15%' }}>
                <NavLink style={{ display: 'flex', alignItems: 'center', fontSize: '17px' }}
                  to={`/jobs/${item.id}`}>Посмотреть {<ArrowIosForwardOutline />}</NavLink>
              </div>
            </List.Item>
          )}
        />
      </div>


    </div>
  )
}

export default Job