import React from 'react'

function login() {
  
  const handlesubmit=()=>{
    

  }
  return (
    <div className='flex flex-row justify-center items-center h-[100vh] bg'>
        <div className='flex flex-col gap-[50px] border-[2px] bg-slate-700 h-[70vh] w-[350px] rounded-[20px] items-center justify-center'>
            <div className='flex flex-col gap-[20px] text-[20px] text-white'>
                <label>Username</label>
                <input type='text' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px] ' onChange={(e)=>username(e)}/>
                <label>Password</label>
                <input type='password' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px]'onChange={(e)=>username(e)}/>


            </div>
            <div>
              <button className='bg-blue-700 rounded-[8px] p-[5px] px-[17px]' onClick={()=>handlesubmit()}>Login</button>

            </div>
        </div>
    </div>
  )
}

export default login