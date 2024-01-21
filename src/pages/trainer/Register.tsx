
import { useState } from 'react'
import axios from 'axios'
import {  toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    let navigate = useNavigate()
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [name,setName] = useState('')
    const handleSubmit = async()=>{
        axios.post('http://localhost:8001/api/trainer/register',{email:email,password:password,name:name},{withCredentials:true}).then((response:any)=>{
            console.log(response.data)
            if(response.data.message=='success'){
                toast.success('Register success')
                navigate('/trainer/otp')
            }else{
                console.log(response.data.message)
                toast.error(response.data.message)
            }

        })
    }
  return (
    <div>
         <div className="grid grid-cols-9 grid-rows-5 gap-4  ">
        <div className="col-span-3 row-span-4 col-start-4 row-start-2" >
            <div className=' h-[60vh] w-11/12 flex justify-center outline outline-1 outline-gray-500 rounded text-center'>
                <div className='mt-10 '>
                    <h1 className='text-6xl font-bold'>Register</h1>  
                    <p className='font-thin text-sm mt-4 '>Enter you name, email and password below</p>

                <input onChange={(e)=>setName(e.target.value)} type="text " className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your name'  />
                <input onChange={(e)=>setEmail(e.target.value)} type="text " className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your email'  />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your password'  />
                <button onClick={()=>handleSubmit()} className='w-72 rounded bg-white text-black font-medium p-2 mt-5'>sign up</button>
                <div className='flex  justify-center  text-center  w-full '>
                    <div className='flex gap-2 mt-3'>

                <p className='text-sm'>Already have an account </p>
                <Link to={'/trainer/login'} className='underline text-sm'> login </Link>
                    </div>
                </div>
                </div>
                
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register