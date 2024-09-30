import React from 'react'
import Header from '@/app/Components/Header'

export default function Settings() {
  return (
    <div>
        <Header pageName={'Settings'}/>
        <div className=' flex justify-end items-center gap-8 my-8'>
            <button className=' bg-blue-300 min-w-[170px] px-8 py-2  text-textBlack rounded-full text-center'>Cancel</button>
            <button className=' bg-foreBlue min-w-[170px] px-8 py-2  text-white rounded-full text-center'>Save changes</button>
        </div>
        <div>
            <h3 className=' text-xl font-bold'>Personal information</h3>
            <p className=' text-sm'>View and update your profile update</p>
        </div>
        <form className=' w-[700px] flex flex-col gap-8 mt-12'>
            <div className=' flex justify-between'>
                <label htmlFor="name" className=' font-semibold text-base'>Full name</label>
                <input className=' w-[400px] rounded-full p-2 outline-none border ' type="text" id='name' placeholder='Enter full name' />
            </div>


            <div className=' flex justify-between'>
                <label htmlFor="email" className=' font-semibold text-base'>Email address</label>
                <input className=' w-[400px]  rounded-full p-2 outline-none border' type="text" id='email' placeholder='Enter email' />
            </div>

            
            <div className=' flex justify-between'>
                <label htmlFor="number" className=' font-semibold text-base'>Phone number</label>
                <input className=' w-[400px]  rounded-full p-2 outline-none border' type="number" id='number' placeholder='Add number' />
            </div>

            <div className=' flex justify-between'>
                <label htmlFor="role" className=' font-semibold text-base'>Role</label>
                <input className=' w-[400px]  rounded-full p-2 outline-none border' type="text" id='role' placeholder='...' />
            </div>

            <div className=' flex justify-between'>
                <label htmlFor="password" className=' font-semibold text-base'>Password</label>
                <input className=' w-[400px]  rounded-full p-2 outline-none border' type="password" id='password' placeholder='Enter password' />
            </div>


        </form>
    </div>
  )
}
