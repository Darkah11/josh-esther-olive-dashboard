import Header from '@/app/Components/Header'
import React from 'react'
import CreateForm from './CreateForm'

export default function CreateNews() {
  return (
    <>
            {/* <Header pageName={"Blogs"}/> */}
            <Header pageName={"Campus News"}/>
            {/* <Form /> */}
            <CreateForm />
    </>
  )
}
