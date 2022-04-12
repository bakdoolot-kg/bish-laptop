import React from "react";
import { Form, Input, Select, Tooltip, Button, Space, Typography, Cascader } from "antd";
import './contacts.css'
import heartEmoji from './images/heart-emoji.png'

const { Option } = Select;

const cities = [
  {
    value: 'bishkek',
    label: 'Бишкек',
  },
  {
    value: 'chuy',
    label: 'Чуй',
  },
  {
    value: 'osh',
    label: 'Ош',
  },
  {
    value: 'naryn',
    label: 'Нарын',
  },
  {
    value: 'issyk-kul',
    label: 'Иссык-Куль',
  },
  {
    value: 'talas',
    label: 'Талас',
  },
  {
    value: 'batken',
    label: 'Баткен',
  },
]


const Contacts = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(">>>", values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Option value="996">+996</Option>
        <Option value="998">+998</Option>
        <Option value="7">+7</Option>
        <Option value="380">+380</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='contacts' id='contacts'>
      <div className='contacts-title-wrapper'>
        <h3>Свяжитесь с нами</h3>
        {/*<img className='contacts-title-emoji' src={heartEmoji} alt=""/>*/}
      </div>

      <Form
        name='complex-form'
        onFinish={onFinish}
        initialValues={{
          address: ['bishkek'],
          prefix: '996'
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <div className='complex-form-wrapper'>
          <Form.Item label='Ваше имя'>
            <Space>
              <Form.Item
                name='name'
                noStyle
                rules={[{ required: true, message: 'Имя обязательно!' }]}
              >
                <Input style={{ width: 300 }} placeholder='Введите имя' />
              </Form.Item>
            </Space>

            <Form.Item
              name='lastname'
              noStyle
              rules={[{ required: true, message: 'Фамилия обязательно!' }]}
            >
              <Input style={{ width: 300 }} placeholder='Введите фамилию' />
            </Form.Item>
          </Form.Item>

          <Form.Item label='Ваш адрес'>
            <Input.Group compact>
              <Form.Item
                name='address'
                noStyle
                rules={[{ type: 'array', required: true, message: "Адрес обязателен!" }]}
                style={{ width: 100 }}
              >
                <Cascader options={cities} />
                </Form.Item>

              <Form.Item
                name='street'
                noStyle
                rules={[{ required: true, message: 'Улица обязателен!' }]}
              >
                <Input style={{ width: 450 }} placeholder='Введите улицу' />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item label='Ваши контакты' style={{ marginBottom: 0 }}>
            <Form.Item
              name="phone"
              noStyle
              rules={[{ required: true, message: 'Номер обязателен!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: 310 }} />
            </Form.Item>

            {/*<Form.Item*/}
            {/*  name='phone'*/}
            {/*  rules={[{required: true, message: 'Номер телефона обязателен!'}]}*/}
            {/*  style={{display: 'inline-block', width: 400}}*/}
            {/*>*/}
            {/*  <Input placeholder='Ваш номер телефона'/>*/}
            {/*</Form.Item>*/}

            <Form.Item
              name='telegramName'
              style={{ display: "inline-block", width: 285, margin: '0 8px', }}
            >
              <Input placeholder='Ваш ник в телеграм' size='middle' />
            </Form.Item>
          </Form.Item>

          <Form.Item label=' ' colon={false} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button type='primary' htmlType='submit' size='large' style={{borderRadius: '6px'}}>Отправить</Button>
          </Form.Item>

        </div>
      </Form>

    </div>
  )
}

export default Contacts