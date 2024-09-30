import React from 'react'
import FormEdit from '@/Components/FormEdit'
import Header from '@/Components/Header'

export default function DrinkEdit() {
    
  return (
    <>
            <Header pageName={"Drinks"}/>
            <FormEdit type={'drinks'}/>
    </>
  )
}
