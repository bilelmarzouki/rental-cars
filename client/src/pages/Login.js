import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {Row , Col , Form , Input} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/actions/userAction'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Spinner from '../components/spinner';

AOS.init();
function Login() {
  const [username ,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const  dispatch = useDispatch()
  const {loading}= useSelector(state=>state.alert)
  
  const stateAlerts= useSelector(state=>state.userSign) 
  console.log(stateAlerts)
  
   const submitHandler = () => {
   // e.preventDefault()
   dispatch(userLogin({username,password}))
 
  };

  return (
    <div className='login'>
       {loading && (<Spinner />)}
      <Row gutter={16}>
        <Col lg={16} style={{position: 'relative'}}>
          <img 
           className='w-100'
           data-aos='slide-right'
           data-aos-duration='1500' 
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>'
          <h1 className='login-logo'>BILELCARS</h1>
        </Col>

        <Col lg={8}  className='text-left p-5 '>
          <div layout='vertical' className='login-form p-5'  >
            <h1>Login</h1>
            <hr />
            <Form.Item name='username' label='Username' rules={[{required: true}]} >
                 <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{required: true}]} >
                 <Input type='password' placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Item>
            <button className='btn1' onClick={submitHandler}>Login</button>
            <hr />
            <Link to={'/register'}>Click Here to Register</Link>
           

            

    

          </div>
        </Col>
      </Row>

    </div>
    
  )
}

export default Login