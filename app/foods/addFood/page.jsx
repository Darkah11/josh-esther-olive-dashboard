
import Header from '@/Components/Header'
import React from 'react'
import CreateForm from '@/Components/CreateForm'

export default function AddFood() {
  return (
    <>
            <Header pageName={"Foods"}/>
            {/* <Form /> */}
            <CreateForm type={'foods'}/>
    </>
  )
}
