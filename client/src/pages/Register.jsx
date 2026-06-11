import React from 'react';
import '../styles/Registerstyle.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import GirlDoc from '../assets/GirlDoc.jpg';
import BoyDoc from '../assets/BoyDoc.jpg';

const Register = () => {

  
  //form Handler
  const onFinishHandler = (values)=>{
    console.log(values)
  }
  return (
    <>
    <div className="form-container">
      <img src={GirlDoc} alt='Girl Doc'  />
      <Form layout = 'vertical' onFinish = {onFinishHandler} className='register-form'>
        <h3 className='text-center'>Register Form</h3>
        <Form.Item label = 'Name' name = 'name'>
          <Input type = 'text' required />
        </Form.Item>

        <Form.Item label = 'Email' name = 'email'>
          <Input type = 'email' required />
        </Form.Item>

        <Form.Item label = 'Password' name = 'password'>
          <Input type = 'password' required />
        </Form.Item>
        <Link to="/login" className='m-4'>Existing User</Link>

        <button className='btn btn-primary' type='submit'>Register</button>
      </Form>
      <img src={BoyDoc} alt='Boy Doc'  />
      
    </div>
    </>
  )
}

export default Register
