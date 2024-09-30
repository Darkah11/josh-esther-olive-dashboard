import React from 'react'
import Link from 'next/link'
import List from '@/Components/list'
import Header from '@/Components/Header'


export default function Foods() {

  return (
    <div>
            <Header pageName={'Foods'} />
            <div className=' flex justify-between items-center mt-7'>
                <p>List of foods</p>
                <Link href={'/foods/addFood'} className=' min-w-[170px] px-8 py-2 bg-primary text-bgColor rounded-full text-center'>Add food</Link>
            </div>
            <List path={'foods'}/>
    </div>
  )
}