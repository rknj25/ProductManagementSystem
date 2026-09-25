import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [form,setForm]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
     setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }
  const login=async(e)=>{
      e.preventDefault();
      try{
        const response=await axios.post("http://localhost:9999/api/auth/login",form);
        setForm({
          email:"",
          password:""
        })
        alert(response.data.message);
       
        navigate("/dashboard")
      }
      catch(error){
        alert(error.response?.data?.message || "Login failed");
      }
      
  }
  return (
    <div className='form-container'>
        <h4 style={{textAlign:'center', fontSize:'25px'}}>Login Form</h4>
        <form action="" onSubmit={login}>
          <input type="email"
          name='email'
          placeholder='Enter your Email id'
          value={form.email}
          onChange={handleChange}
          /><br /><br />
          <input type="password"
          name='password'
          placeholder='Enter your Password'
          value={form.password}
          onChange={handleChange}
          /><br /><br />
          <button type='submit'>Login</button>
        </form>
        <p>Don't Have Account?
          <Link to={'/signup'}>Register</Link>
        </p>
    </div>
  )
}

export default Login
