import Header from '@/Components/Header'
import List from '@/Components/list'
import OrderList from '@/Components/OrderList'
import Link from 'next/link'
import React from 'react'

export default function History() {
    return (
        <div>
                <Header pageName={'History'} />
                <div className=' flex justify-between items-center mt-7'>
                    <p>History of orders</p>
                </div>
                <OrderList type={'history'}/>
        </div>
      )
}
