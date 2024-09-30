import Header from '@/app/Components/Header'
import React from 'react'
import CreateForm from './CreateForm'

export default function CreateJob() {
  return (
    <>
            {/* <Header pageName={"Blogs"}/> */}
            <Header pageName={"Job Posts"}/>
            {/* <Form /> */}
            <CreateForm />
    </>
  )
}
