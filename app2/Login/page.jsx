import Image from 'next/image'
import logo from '@/app/Assets/Logo.png'
import design from '@/app/Assets/Circle.png'

export default function Login() {
  return (
    <main className=" min-h-screen p-36">
      <Image
      priority={true}
      src={design}
      alt='logo image'
      className=" absolute top-0 right-0 w-24 "
      />
      <div className=' flex justify-between flex-row'>
        <div className=' max-w-sm'>
            <Image
            priority={true}
            src={logo}
            alt='logo image'
            className=" ml-[-30px]"
            />
            <h1 className=' text-4xl font-semibold mb-5'>Welcome Back!!</h1>
            <p className=' font-medium'>Login to the GNS dashboard as an Admin/Ambassador</p>
        </div>
        <div className='form-container'>
          <h2 className=' text-4xl font-semibold mb-2'>Login</h2>
          <p className=' text-textGray'>View your dashboard current`s status</p>
          <div className=' mt-20 flex flex-col gap-4'>
            <div>
              <input 
              type="email" 
              name="email" 
              placeholder='Email address'
              className=' border p-4 rounded-full w-full placeholder-textBlack outline-0 
              placeholder:font-semibold placeholder:text-sm' 
              /> 
            </div>
            <div>
              <input 
              type='password'
              name="password" 
              placeholder='Password'
              className=' border p-4 rounded-full w-full placeholder-textBlack outline-0 
              placeholder:font-semibold placeholder:text-sm' 
              /> 
            </div>
            <div>
              <select 
              name="user" 
              id="user"
              className=' border p-4 rounded-full w-full placeholder-textBlack outline-0 font-semibold text-sm'
              >
                <option value="ambassador">Ambassador</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className=' mt-16'>
              <button className=' bg-foreBlue w-full p-4 rounded-full text-white font-semibold'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
