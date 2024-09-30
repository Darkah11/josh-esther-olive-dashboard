import React from 'react'
import FormEdit from '@/Components/FormEdit'
import Header from '@/Components/Header'

export default function FoodEdit() {
    
  return (
    <>
            <Header pageName={"Foods"}/>
            <FormEdit type={'foods'}/>
    </>
  )
}
