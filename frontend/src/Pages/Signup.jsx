import React, { useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import Login from './Login';
const Signup = () => {
  const navigate=useNavigate();
  const [form,setForm]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  }
  const register=async(e)=>{
      e.preventDefault();
      try{
        const response=await axios.post("https://productmanagementsystem-px7c.onrender.com/api/auth/register",form)
        alert(response.data.message);
        setForm({
          name:"",
          email:"",
          password:""
        })
      }
     catch(error){
    alert(error.response?.data?.message || "Registration failed");
}
      
  }
  return (
    <div className='form-container'>
      <form action="" onSubmit={register} >
        <h4>Create Account</h4>
        <input type="text" placeholder='Enter Your Name' name='name' value={form.name} onChange={handleChange}/><br /><br />
        <input type="email" placeholder='Enter Your Email' name='email' value={form.email} onChange={handleChange}/><br /><br />
        <input type="password" placeholder='Enter Your Password' name='password' value={form.password} onChange={handleChange}/><br /><br />
        <button type='submit'>Register</button>
        
      </form>
      <p>Already Have Account?
        <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}

export default Signup

