import React from 'react'
import Link from 'next/link'
import Header from '@/app/Components/Header'
import BlogList from '../../Components/list'


export default function Blogs() {

  return (
    <div>
            <Header pageName={"Blogs"}/>
            <div className=' flex justify-between items-center my-8'>
                <p>List of blogs posted</p>
                <Link href={'/Blogs/CreateBlog'} className=' min-w-[170px] px-8 py-2 bg-foreBlue text-white rounded-full text-center'>Post blog</Link>
            </div>
            <BlogList />
    </div>
  )
}
