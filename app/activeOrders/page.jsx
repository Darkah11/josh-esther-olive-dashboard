import Header from '@/Components/Header'
import List from '@/Components/list'
import OrderList from '@/Components/OrderList'
import Link from 'next/link'
import React from 'react'

export default function ActiveOrders() {
    return (
        <div>
                <Header pageName={'Active Orders'} />
                <div className=' flex justify-between items-center mt-7'>
                    <p>List of active orders</p>
                </div>
                {/* <List path={'foods'}/> */}
                <OrderList />
        </div>
      )
}
