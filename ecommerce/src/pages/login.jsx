import React, { useState } from 'react'
import {Link} from "react-router"
function login() {
  const [username,setusername]=useState()
  const Username=(e)=>{
    let username= e.target.value 
    setusername=(username)

  }
  const [password,setpassword]=useState()
  const Password=(e)=>{
    let password= e.target.value 
    setpassword=(password)

  }
  const data={
    username,password
  }
  
  const handlesubmit=()=>{
    console.log(data)

  }
  return (
    <div className='flex flex-row justify-center items-center h-[100vh] bg'>
        <div className='flex flex-col gap-[50px] border-[2px] bg-slate-700 h-[70vh] w-[350px] rounded-[20px] items-center justify-center'>
            <div className='flex flex-col gap-[20px] text-[20px] text-white'>
                <label>Username</label>
                <input type='text' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px] ' onChange={(e)=>Username(e)}/>
                <label>Password</label>
                <input type='password' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px]'onChange={(e)=>Password(e)}/>


            </div>
            <div>
              <button className='bg-blue-700 rounded-[8px] p-[5px] px-[17px]' onClick={()=>handlesubmit()}>Login</button>

            </div>
            <div className='flex gap-[5px]'> 
              <p className='text-white'>I don't have Account</p>
              <Link to={"/signup"}  className='text-blue-700 text-[18px]'>Signup</Link>
      
            </div>
        </div>
    </div>
  )
}

export default login