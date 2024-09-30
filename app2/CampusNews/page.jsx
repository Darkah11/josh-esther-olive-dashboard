import React from 'react'
import Header from '@/app/Components/Header'
import NewsList from './NewsList'
import Link from 'next/link'


export default function CampusNews() {
  return (
    <>
            <Header pageName={"Campus News"}/>
            <div className=' flex justify-between items-center my-8'>
                <p>List of campus news posted</p>
                <Link href={'/CampusNews/CreateNews'} className=' min-w-[170px] px-8 py-2 bg-foreBlue text-white rounded-full text-center'>Post campus news</Link>
            </div>
            <NewsList />
    </>
  )
}