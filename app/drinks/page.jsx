import React from 'react'
import Link from 'next/link'
import List from '@/Components/list'
import Header from '@/Components/Header'


export default function Drinks() {

  return (
    <div>
            <Header pageName={'Drinks'} />
            <div className=' flex justify-between items-center mt-7'>
                <p>List of drinks</p>
                <Link href={'/drinks/addDrink'} className=' min-w-[170px] px-8 py-2 bg-primary text-bgColor rounded-full text-center'>Add Drinks</Link>
            </div>
            <List path={'drinks'}/>
    </div>
  )
}