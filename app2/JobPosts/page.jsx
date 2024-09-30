import React from 'react'
import Sidenav from '@/app/Components/sidenav'
import Link from 'next/link'
import Header from '@/app/Components/Header'
import JobList from './JobList'


export default function JobPosts() {

  return (
    <div>
            <Header pageName={"Job Posts"}/>
            <div className=' flex justify-between items-center my-8'>
                <p>List of jobs posted</p>
                <Link href={'/JobPosts/CreateJob'} className=' min-w-[170px] px-8 py-2 bg-foreBlue text-white rounded-full text-center'>Post new job</Link>
            </div>
            <JobList />
    </div>
  )
}