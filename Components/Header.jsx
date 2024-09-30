import React from 'react'
import Image from 'next/image'
import avatar from '@/public/avatar.svg'

export default function Header({pageName}) {

  return (
    <div className=' flex items-center justify-between'>
          <h2 className=' text-3xl font-semibold'>{pageName}</h2>

          {/* <div className=' flex items-center gap-3'>
            <div className=' p-1 bg-primary rounded-full'>
            <Image
            src={avatar}
            alt='profile picture'
            priority={true}
            />
            </div>
            <div>
              <h3 className=' text-lg font-semibold'>Tomisin Shadrach</h3>
              <p className=' text-sm text-foreBlue font-semibold'>Admin</p>
            </div>
          </div> */}
        </div>
  )
}
