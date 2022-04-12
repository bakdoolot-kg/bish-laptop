import React from "react";
import {Col, Row, Card, Divider, List} from "antd";
import {NavLink} from "react-router-dom";
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'

import './job.css'

export const dataJob = [
  'Frontend developer',
  'Backend developer',
  'UX/UI designer',
  'Project manager',
  'Dev ops engineer',
  'Dev ops engineer',
]

const Job = () => {

  return (
    <div className='job' id='jobs'>
      {/*<h2 className='job-title'>Вакансии</h2>*/}

      <Divider orientation='left' style={{fontSize: '35px', fontWeight: 700}}>Вакансии</Divider>

      <div style={{maxWidth: '90%', margin: '0 auto'}}>
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
            <List.Item className='jobs-list-item' style={{border: '1px solid rgba(0,0,0,0.30)', borderRadius: '10px', marginBottom: 20, padding: 25,}}>
              <List.Item.Meta
                title={<NavLink style={{fontSize: "25px"}} to='/jobs/'>{item} {<div className="ap ap-smile"></div>}</NavLink>}/>
              <div className='jobs-list-item-svg' style={{width: '15%'}}>
                <NavLink style={{display: 'flex', alignItems: 'center', fontSize: '17px'}} to={`/jobs/${item}`} >Посмотреть {<ArrowIosForwardOutline/>}</NavLink>
              </div>
            </List.Item>
          )}
        />
      </div>


    </div>
  )
}

export default Job