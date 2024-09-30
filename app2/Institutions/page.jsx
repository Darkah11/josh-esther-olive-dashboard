import React from 'react'
import Header from '@/app/Components/Header'
import Link from 'next/link'
import InstitutionList from '@/app/Institutions/InstitutionList'


export default function Institution() {
  return (
    <>
            <Header pageName={"Institutions"}/>
            <div className=' flex justify-between items-center my-8'>
                <p>List of institutions posted</p>
                <Link href={'/Institutions/CreateInstitutions'} className=' min-w-[170px] px-8 py-2 bg-foreBlue text-white rounded-full text-center'>Add new institution</Link>
            </div>
            <InstitutionList />
    </>
  )
}