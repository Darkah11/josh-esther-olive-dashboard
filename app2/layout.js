import { Poppins } from 'next/font/google'
import { Albert_Sans } from 'next/font/google'
import './globals.css'
import Sidenav from '../Components/sidenav'

const poppins = Poppins({ 
  subsets: ['latin'], 
  display: 'swap', 
  weight: ['400', '500', '600', '700', '900']
})

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Sidenav />
        <main className=' ml-[300px] py-5 px-8 bg-bgGray min-h-screen'>
           {children}
        </main>
        
      </body>
    </html>
  )
}
