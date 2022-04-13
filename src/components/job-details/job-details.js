import { Anchor, Button, Card, Descriptions, List, Typography } from "antd";
import React from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { LineOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import './job-details.css'

const { Title, Text } = Typography
const { Link } = Anchor

const JobDetails = ({ match, dataJob }) => {
  // const id = Number(match.params.id);
  const { id } = useParams()
  const jobToShow = dataJob.find((item) => item.id === Number(id))

  console.log('>>>', jobToShow);


  return (
    <>
      {/*<Anchor style={{ color: '#000000' }} affix={false} className="job-details-anchor">*/}
      {/*  <Link href='/#jobs' className="job-details-anchor-link" style={{ fontSize: '25px', margin: '20px', padding: '20px' }} title='К списку вакансий' />*/}
      {/*</Anchor>*/}

      <NavLink to='/' style={{ fontSize: '25px', margin: '20px', padding: '20px' }}>{<ArrowLeftOutlined />} К списку вакансий</NavLink>

      <div className='job-details' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>

        <Card title={<Title level={1}>{jobToShow.name}</Title>} style={{ width: 900, backgroundColor: '#EEEEEE', borderRadius: '10px' }}>


          <List
            style={{ fontSize: '20px', fontWeight: '700' }}
            header={<Title level={3}>Требование:</Title>}
            dataSource={jobToShow.requirements}
            renderItem={item => (
              <List.Item
                style={{ margin: 2, padding: 5, fontSize: '15px', fontWeight: '500' }}
              >
                {<LineOutlined />} {item}
              </List.Item>
            )}
          />

          <List
            style={{ fontSize: '20px', fontWeight: '700' }}
            header={<Title level={3}>Условия:</Title>}
            dataSource={jobToShow.conditions}
            renderItem={item => (
              <List.Item
                style={{ margin: 2, padding: 5, fontSize: '15px', fontWeight: '500' }}
              >{<LineOutlined />} {item}</List.Item>
            )}
          />

          <Title level={3} style={{ marginTop: 30 }}>Куда отправлять резюме</Title>
          <a style={{ fontSize: '20px' }} href="mailto: example@gmail.com">example@gmail.com</a>
          <p>Отправляй резюме на почту и с тобой скоро свяжются</p>

        </Card>
        {/* <h2>{jobToShow.name}</h2>
      <p>Что мы ожидаем: {jobToShow.description}</p>
      <p>Требования:</p>
      <ul>
        {
          jobToShow?.requirements?.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
      <p>Условия:</p>
      <ul>
        {jobToShow?.conditions?.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      </div>
    </>
  )
}

export default JobDetails