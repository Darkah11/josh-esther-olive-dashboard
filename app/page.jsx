import Header from '@/Components/Header'
import React from 'react'

export default function Dashboard() {
  return (
    <div className=''>
        <Header pageName={'Dashboard'}/>

        <p className='font-semibold mt-5'>Welcome Harris</p>

        <div className=' flex flex-wrap justify-between gap-y-8 mt-8'>
          <div className=' border border-border rounded-xl py-5 px-4 w-[48%] lg:w-[23%] relative min-h-[140px]'>
            <div className=' flex items-center gap-2 mb-2'>
              <span className=' border p-2 rounded-full'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8125 21V20.996C15.2765 21.0264 15.736 20.889 16.1071 20.6088C16.4783 20.3287 16.7364 19.9245 16.8345 19.47L17.3675 17H19.875C20.4386 17 20.9791 16.7761 21.3776 16.3776C21.7761 15.9791 22 15.4386 22 14.875V9.0775C22 8.53994 21.7916 8.02331 21.4186 7.63618C21.0457 7.24905 20.5372 7.02155 20 7.0015V7H14.25V5.125C14.25 4.56141 14.0261 4.02091 13.6276 3.6224C13.2291 3.22388 12.6886 3 12.125 3H4.125C3.56141 3 3.02091 3.22388 2.6224 3.6224C2.22388 4.02091 2 4.56141 2 5.125V17.875C2 18.7038 2.32924 19.4987 2.91529 20.0847C3.50134 20.6708 4.2962 21 5.125 21H14.8125ZM14.25 8.25H18.017C17.9626 8.37541 17.9208 8.50587 17.892 8.6395L15.613 19.206C15.5776 19.3728 15.4817 19.5205 15.3437 19.6206C15.2058 19.7208 15.0356 19.7662 14.8661 19.7482C14.6966 19.7301 14.5398 19.6499 14.426 19.523C14.3122 19.3961 14.2495 19.2315 14.25 19.061V8.25ZM6.5 7.75C6.5 7.94891 6.42098 8.13968 6.28033 8.28033C6.13968 8.42098 5.94891 8.5 5.75 8.5C5.55109 8.5 5.36032 8.42098 5.21967 8.28033C5.07902 8.13968 5 7.94891 5 7.75C5 7.55109 5.07902 7.36032 5.21967 7.21967C5.36032 7.07902 5.55109 7 5.75 7C5.94891 7 6.13968 7.07902 6.28033 7.21967C6.42098 7.36032 6.5 7.55109 6.5 7.75ZM5.625 11H10.875C11.0408 11 11.1997 11.0658 11.3169 11.1831C11.4342 11.3003 11.5 11.4592 11.5 11.625C11.5 11.7908 11.4342 11.9497 11.3169 12.0669C11.1997 12.1842 11.0408 12.25 10.875 12.25H5.625C5.45924 12.25 5.30027 12.1842 5.18306 12.0669C5.06585 11.9497 5 11.7908 5 11.625C5 11.4592 5.06585 11.3003 5.18306 11.1831C5.30027 11.0658 5.45924 11 5.625 11ZM5 15.625C5 15.28 5.28 15 5.625 15H10.875C11.0408 15 11.1997 15.0658 11.3169 15.1831C11.4342 15.3003 11.5 15.4592 11.5 15.625C11.5 15.7908 11.4342 15.9497 11.3169 16.0669C11.1997 16.1842 11.0408 16.25 10.875 16.25H5.625C5.28 16.25 5 15.97 5 15.625Z" 
                fill="#D5A401"/>
                </svg>
              </span>
              <p className=' text-lg font-medium'>Foods</p>
            </div>
            <p className=' text-4xl text-foreBlue text-right font-medium absolute bottom-2 right-4'>20</p>
          </div>


          <div className=' border border-border rounded-xl py-5 px-4 w-[48%] lg:w-[23%] relative min-h-[140px]'>
            <div className=' flex items-center gap-2 mb-2'>
              <span className=' border p-2 rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2313_5532)">
              <path d="M18.3234 13.9922C18.3234 13.9922 18.3234 13.9969 18.3281 13.9969C18.7594 14.9062 19.0031 15.9234 19.0031 16.9969C18.9984 20.8641 15.8672 24 12 24C8.13281 24 5.00156 20.8641 5.00156 17.0016C5.00156 15.9281 5.24531 14.9109 5.67656 14.0016C5.75625 13.8328 5.84531 13.6641 5.93906 13.5C6.14531 13.1438 6.37969 12.8109 6.64219 12.5016C7.92656 10.9734 9.85313 10.0031 12.0047 10.0031C13.5797 10.0031 15.0328 10.5234 16.2047 11.4047C16.6313 11.7281 17.0203 12.0937 17.3672 12.5062C17.6297 12.8156 17.8641 13.1531 18.0703 13.5047C18.1641 13.6641 18.2484 13.8328 18.3281 13.9969L18.3234 13.9922ZM19.5609 13.1109C18.15 10.3734 15.2953 8.49844 12 8.49844C8.70469 8.49844 5.85 10.3734 4.43906 13.1109L0 9.50156L12 0L24 9.50156L19.5609 13.1156V13.1109Z" fill="#D5A401"/>
              </g>
              <defs>
              <clipPath id="clip0_2313_5532">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              </span>
              <p className=' text-lg font-medium'>Drinks</p>
            </div>
            <p className=' text-4xl text-foreBlue text-right font-medium absolute bottom-2 right-4'>30</p>
          </div>


          <div className=' border border-border rounded-xl py-5 px-4 w-[48%] lg:w-[23%] min-h-[140px] relative'>
            <div className=' flex items-center gap-2 mb-2'>
              <span className=' border p-2 rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0208 1.021H16.0208V3.021H10.0208V1.021ZM20.0398 7.41L21.4738 5.976L20.0598 4.562L18.6268 5.995C17.0567 4.73681 15.1099 4.04175 13.098 4.02109C11.086 4.00042 9.12537 4.65533 7.52977 5.881L8.94977 7.321C10.1362 6.47836 11.5546 6.02418 13.0098 6.021L13.0198 6.022V13.002L17.9728 17.96C16.995 18.9424 15.7475 19.6124 14.3886 19.8852C13.0296 20.158 11.6203 20.0212 10.3391 19.4923C9.05792 18.9634 7.96259 18.066 7.19187 16.914C6.42115 15.7619 6.00974 14.4071 6.00977 13.021H9.00977L5.00977 9.021L1.00977 13.021H4.00977C4.0084 14.4592 4.35171 15.8767 5.01093 17.1549C5.67014 18.4331 6.62607 19.5347 7.79862 20.3674C8.97118 21.2001 10.3262 21.7397 11.7502 21.9409C13.1742 22.1422 14.6257 21.9993 15.9832 21.5242C17.3406 21.049 18.5643 20.2555 19.552 19.2101C20.5396 18.1647 21.2623 16.8978 21.6596 15.5156C22.0568 14.1334 22.1171 12.6761 21.8353 11.2658C21.5534 9.85556 20.9377 8.53336 20.0398 7.41Z" fill="#D5A401"/>
              </svg>
              </span>
              <p className=' text-lg font-medium'>Active Orders</p>
            </div>
            <p className=' text-4xl text-foreBlue text-right font-medium absolute bottom-2 right-4'>79</p>
          </div>


          <div className=' border border-border rounded-xl py-5 px-4 w-[48%] lg:w-[23%] min-h-[140px] relative'>
            <div className=' flex items-center gap-2 mb-2'>
              <span className=' border p-2 rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5.5C12.9283 5.5 13.8185 5.86875 14.4749 6.52513C15.1313 7.1815 15.5 8.07174 15.5 9C15.5 9.92826 15.1313 10.8185 14.4749 11.4749C13.8185 12.1313 12.9283 12.5 12 12.5C11.0717 12.5 10.1815 12.1313 9.52513 11.4749C8.86875 10.8185 8.5 9.92826 8.5 9C8.5 8.07174 8.86875 7.1815 9.52513 6.52513C10.1815 5.86875 11.0717 5.5 12 5.5ZM5 8C5.56 8 6.08 8.15 6.53 8.42C6.38 9.85 6.8 11.27 7.66 12.38C7.16 13.34 6.16 14 5 14C4.20435 14 3.44129 13.6839 2.87868 13.1213C2.31607 12.5587 2 11.7956 2 11C2 10.2044 2.31607 9.44129 2.87868 8.87868C3.44129 8.31607 4.20435 8 5 8ZM19 8C19.7956 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2044 22 11C22 11.7956 21.6839 12.5587 21.1213 13.1213C20.5587 13.6839 19.7956 14 19 14C17.84 14 16.84 13.34 16.34 12.38C17.2119 11.2544 17.6166 9.8362 17.47 8.42C17.92 8.15 18.44 8 19 8ZM5.5 18.25C5.5 16.18 8.41 14.5 12 14.5C15.59 14.5 18.5 16.18 18.5 18.25V20H5.5V18.25ZM0 20V18.5C0 17.11 1.89 15.94 4.45 15.6C3.86 16.28 3.5 17.22 3.5 18.25V20H0ZM24 20H20.5V18.25C20.5 17.22 20.14 16.28 19.55 15.6C22.11 15.94 24 17.11 24 18.5V20Z" fill="#D5A401"/>
              </svg>
              </span>
              <p className=' text-lg font-medium'>History</p>
            </div>
            <p className=' text-4xl text-foreBlue text-right font-medium absolute bottom-2 right-4'>1560</p>
          </div>
        </div>
        <div className=' flex gap-10 mt-28'>
          {/* <BarChart />
          <LineChart /> */}
        </div>
        
    </div>
    
  )
}