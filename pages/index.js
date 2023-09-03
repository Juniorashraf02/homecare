import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <Navbar/>
    <Footer/>
   </div>
  )
}
