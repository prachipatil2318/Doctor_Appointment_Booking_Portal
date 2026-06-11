import React from 'react'
import '../styles/Loginstyle.css';
import { Form , Input} from 'antd';
import { Link } from 'react-router-dom'
import GirlDoc from '../assets/GirlDoc.jpg';
import BoyDoc from '../assets/BoyDoc.jpg';
const Login = () => {
    //form Handler
    const onFinishHandler = (values)=>{
      console.log(values)
    }
  return (
    <>
    <div className="form-container">
      <img src={GirlDoc} alt='Girl Doc'  />
      <Form layout = 'vertical' onFinish = {onFinishHandler} className='register-form'>
        <h3 className='text-center'>Log-In</h3>
      
        <Form.Item label = 'Email' name = 'email'>
          <Input type = 'email' required />
        </Form.Item>

        <Form.Item label = 'Password' name = 'password'>
          <Input type = 'password' required />
        </Form.Item>
        <Link to="/register" className='m-4'>Register</Link>
        
        <button className='btn btn-primary' type='submit'>Login</button>
      </Form>
      <img src={BoyDoc} alt='Boy Doc'  />
    </div>
    </>
  )
}

export default Login
