import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    const[formData,setFormData]= useState({
      name:'',
      email:'',
      password:'',
      phone:'',
      role:'',
      adress:''

    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });


    };

    const handlesubmit = async () => {

        console.log("This is the data", formData)
        let body = formData
        try {
            const response = await axios.post("https://ecommerce-backend-2ltu.onrender.com/api/auth/signup", body)
            console.log("this is resposnes", response)
            toast.success("Singup succes")
            navigate("/login")

        } catch (err) { 
            console.log("this is error", err)
            let message = err.response.data.errors[0].msg
            toast.error(`${message}`)
        }

  return (
<div className=' flex justify-center items-center h-[100vh] bg-blue-200 '>
      <div className='bg-gray-800 h-[600px] w-[470px] flex flex-col gap-[30px] items-center rounded-[8px] drop-shadow-[0px 15px 15px 0px]'>
        <div> 
          <p className='text-white text-[35px] '>Create an account</p>
        <p className='text-neutral-500 flex flex-row  gap-[10px]'>Already have an account? <button className='text-fuchsia-100 cursor-pointer border-[2px]  border-purple-500 rounded-[12px] px-[5px] bg-purple-500'><Link to={"/login"}>Login</Link></button></p>
        </div>
         
        <div className='flex flex-col justify-around gap-[20px] text-white'>
          <label>Username</label>
        <input type='text' placeholder='username' name="name" className='text-white border-[2px] border-white-800  h-[40px] w-[400px] rounded-[5px]  hover:border-purple-400 ' onChange={handlechange}/>

        </div>
        <div className='flex flex-col gap-[30px] text-white'>
          <label>Email</label>
        <input type='Email' placeholder='Email' name="email" className='text-white border-[2px] border-white-800 h-[40px] w-[400px] rounded-[5px]  hover:border-purple-400 ' onChange={handlechange}/>
        <label>Password</label>
        <input type='password' placeholder='Enter password' name="password" className='text-white border-[2px] border-white-800 h-[40px] 
        w-[400px] rounded-[5px]  hover:border-purple-400' onChange={handleChange}/>
        <label>phone</label>
        <input type='text' name="phone" className='text-white border-[2px] border-white-800 h-[40px] 
        w-[400px] rounded-[5px]  hover:border-purple-400' onChange={handleChange}/>
        
        <input type='text' name="role" className='text-white border-[2px] border-white-800 h-[40px] 
        w-[400px] rounded-[5px]  hover:border-purple-400' onChange={handleChange}/>
    
        <input type='text' name="addess" className='text-white border-[2px] border-white-800 h-[40px] 
        w-[400px] rounded-[5px]  hover:border-purple-400' onChange={handleChange}/>
        </div>
       
      <div><button className='text-white border-[1px] border-white-800 h-[40px] 
        w-[400px] rounded-[5px]  bg-purple-500 border-hidden cursor-pointer' onClick={()=>handlesubmit()}>Create an account</button> 
        </div>
       
        
       
       

       
      </div>
      <ToastContainer/>
    
    </div>
  )
}
}

export default Signup