import React from "react";
import {Form, Input, Select, Tooltip, Button, Space, Typography} from "antd";
import './contacts.css'
import heartEmoji from './images/heart-emoji.png'

const { Option } = Select;


const Contacts = () => {
  const onFinish = (values) => {
    console.log(">>>", values)
  }
  
  return (
    <div className='contacts' id='contacts'>
      <div className='contacts-title-wrapper'>
        <h3>Свяжитесь с нами</h3>
        <img className='contacts-title-emoji' src={heartEmoji} alt=""/>
      </div>

      <Form name='complex-form' onFinish={onFinish} labelCol={{span: 8}} wrapperCol={{span: 16}}>
        <div className='complex-form-wrapper'>
          <Form.Item label='Хей, меня зовут'>
            <Space>
              <Form.Item
                name='username'
                noStyle
                rules={[{required: true, message: 'Имя обязательно!'}]}
              >
                <Input style={{width: 140}} placeholder='Пишите здесь'/>
              </Form.Item>
            </Space>
          </Form.Item>

          <Form.Item label='Я из'>
            <Input.Group compact>
              <Form.Item
                name={['address', 'area']}
                noStyle
                rules={[{required: true, message: "Адрес обязателен!"}]}
              >
                <Select placeholder='Выберите город'>
                  <Option value='Бишкек'>Бишкек</Option>
                  <Option value='Ош'>Ош</Option>
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </div>
      </Form>

    </div>
  )
}

export default Contacts