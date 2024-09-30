
import Header from '@/Components/Header'
import React from 'react'
import CreateForm from '@/Components/CreateForm'

export default function AddDrink() {
  return (
    <>
            <Header pageName={"Drinks"}/>
            <CreateForm type={'drinks'}/>
    </>
  )
}
