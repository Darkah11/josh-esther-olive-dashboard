import React from 'react'
import Link from 'next/link'
import Header from '@/app/Components/Header'
import ScholarshipList from './ScholarshipList'


export default function Scholarships() {

  return (
    <div>
            <Header pageName={"Scholarships"}/>
            <div className=' flex justify-between items-center my-8'>
                <p>List of scholarships posted</p>
                <Link href={'/Scholarships/CreateScholarship'} className=' min-w-[170px] px-8 py-2 bg-foreBlue text-white rounded-full text-center'>Post new scholarship</Link>
            </div>
            <ScholarshipList />
    </div>
  )
}