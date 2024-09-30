import React from 'react'
import Link from 'next/link'
import Header from '@/app/Components/Header'
import UserList from './UserList'


export default function Blogs() {

  return (
    <div>
            <Header pageName={"Users"}/>
            <UserList />
    </div>
  )
}