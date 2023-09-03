import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/NavBar'

import { FcOk } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />


      <div className='bg-white py-10'>
        <p className='text-4xl font-bold text-sky-600 text-center'>Our Home Care Expertise</p>
        <div className='md:flex gap-10 mx-10 py-12'>
          <div className="bg-white border rounded-lg shadow-lg w-1/3 hover:bg-rose-100 duration-700 hover:-translate-y-5">
            <img
              src='/images/doctor.png'
              alt='doctor'
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-sky-600  uppercase leading-2 mt-5">private duty nursing</h2>
              <p className="text-sky-600 mt-3 leading-1">Expert care delivered inthe home by highly skilled RNs and LPNs</p>
            </div>

            <Link href="#">
              <p className='text-sky-600 underline text-right px-5 py-10'>Learn more</p>
            </Link>
          </div>
          <div className="bg-white border rounded-lg shadow-lg w-1/3 hover:bg-rose-100 duration-700 hover:-translate-y-5">
            <img
              src='/images/doctor.png'
              alt='doctor'
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-sky-600  uppercase leading-2 mt-5">private duty nursing</h2>
              <p className="text-sky-600 mt-3 leading-1">Expert care delivered inthe home by highly skilled RNs and LPNs</p>
            </div>

            <Link href="#">
              <p className='text-sky-600 underline text-right px-5 py-10'>Learn more</p>
            </Link>
          </div>
          <div className="bg-white border rounded-lg shadow-lg w-1/3 hover:bg-rose-100 duration-700 hover:-translate-y-5">
            <img
              src='/images/doctor.png'
              alt='doctor'
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-sky-600  uppercase leading-2 mt-5">private duty nursing</h2>
              <p className="text-sky-600 mt-3 leading-1">Expert care delivered inthe home by highly skilled RNs and LPNs</p>
            </div>

            <Link href="#">
              <p className='text-sky-600 underline text-right px-5 py-10'>Learn more</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='md:grid grid-cols-2 bg-white py-28 items-center justify-around'>
        <div className='md:pl-10'>
          <p className='text-red-600 pb-5 font-bold'>Our promise to you</p>
          <p className='text-sky-600 pb-5 font-bold text-5xl'>The Grandma Rule®</p>
          <p className='text-sky-600 text-xl'>
            Throughout the company, Alliance Homecare is committed to upholding The Grandma Rule®. Whenever we interview a prospective caregiver, our staff members ask the question: <span className='italic font-bold'>“Is this someone I would hire to take care of my own grandmother?”</span> If we can answer yes with absolute confidence, the candidate will be invited to join our Alliance Homecare family. We are dedicated to retaining this high standard of caregiver selection, and we have created a culture within our company to develop that criteria throughout the entire recruiting process.
          </p>
          <div className='pt-10'>
            <div className='text-sky-600 text-xl flex gap-5 items-center'>
              <FcOk />
              <p className='font-bold'>Selectively hire highest qualified caregivers</p>
            </div>
            <div className='text-sky-600 text-xl flex gap-5 items-center'>
              <FcOk />
              <p className='font-bold'>Extensive recruiting process</p>
            </div>
            <div className='text-sky-600 text-xl flex gap-5 items-center'>
              <FcOk />
              <p className='font-bold'>Ongoing training & development</p>
            </div>
            <div className='text-sky-600 text-xl flex gap-5 items-center'>
              <FcOk />
              <p className='font-bold'>Credentialed and experienced registered nurses</p>
            </div>
            <div className='text-sky-600 text-xl flex gap-5 items-center'>
              <FcOk />
              <p className='font-bold'>Screened, fingerprinted, & fully vetted staff</p>
            </div>
            <div className="pt-5">

              <a href="#" className="text-xl text-sky-600 pt-5">
                <button className="uppercase font-bold bg-sky-800 px-5 py-2.5 text-white  rounded-md text-xs hover:bg-gray-200 hover:text-black duration-700">
                  More about Alliance
                </button>
              </a>
            </div>

          </div>
        </div>
        <div className="pt-10 md:pt-0">
          <Image
            src="/images/grandma.png"
            className='mx-auto rounded-xl shadow-xl'
            width={400}
            height={300}
            alt='gradma image'
          />
        </div>
      </div>

      <hr />

      <div className='bg-white py-28 md:px-10'>
        <p className='font-bold md:text-4xl text-2xl text-sky-600'>Speciality Long-Term Home Care For Chronic Conditions:</p>
        <div className='  md:grid grid-cols-2 justify-around w-full gap-10'>
          <div className='w-full'>
            <button className="group border border-gray-100 my-10 shadow-md relative px-5 py-2.5 w-full border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
            <button className="group border border-gray-100 my-10 shadow-md relative px-5 py-2.5 w-full border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
            <button className="group border border-gray-100 my-10 shadow-md relative px-5 py-2.5 w-full border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
            <button className="group border border-gray-100 my-10 shadow-md relative px-5 py-2.5 w-full border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
          </div>
          <div className='w-full'>
            <button className="group border border-gray-100 my-10 w-full shadow-md relative px-5 py-2.5 border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
            <button className="group border border-gray-100 my-10 w-full shadow-md relative px-5 py-2.5 border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
            <button className="group border border-gray-100 my-10 w-full shadow-md relative px-5 py-2.5 border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
            <button className="group border border-gray-100 my-10 w-full shadow-md relative px-5 py-2.5 border-transparent rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-700 flex gap-5 items-center justify-between">
              <span className="text-lg font-semibold mr-2 text-sky-600 group-hover:text-white">Amyotrophic Lateral Sclerosis (ALS)</span>
              <AiOutlineArrowRight className="text-xl text-sky-600 group-hover:text-white transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      <hr />



      <div className='md:grid grid-cols-2 justify-around bg-yellow-100 py-28'>
        <div className='md:px-12 md:py-5 text-justify md:w-3/4'>
          <p className='text-4xl font-bold text-sky-700'>Why Alliance  <br /> Homecare? </p>
          <p className='text-xl text-sky-700 mt-5'>For over 15 years our aim to set the bar higher for home-based care has resulted in better health for our clients and greater peace of mind for our client’s families.</p>
        </div>
        <div className='md:w-11/12'>
          <p className='text-sky-600 text-md text-justify'>It starts with understanding the unique issues and health conditions families face that lead to decisions about if long term home care is right for them. Our highly experienced care team helps make those decisions easier with care consultations that answer questions and provide solutions. From there, our home health aides and private duty nurses provide care with respect and compassion while upholding a strict code of confidentiality. Know that when you need care, the team at Alliance Homecare is here to help. We look forward to the opportunity to become a part of your family.</p>

          <div className='pt-5 flex'>

            <div>
              <a href="#" className="text-xl text-sky-600">
                <button className="uppercase font-bold bg-sky-800 px-8 py-2.5 text-white  rounded-md text-xs hover:bg-gray-400 hover:text-black">
                  request care
                </button>
              </a>
            </div>
            <div className='pl-5'>
              <a href="tel:123-456-7890" className="text-xl text-sky-600 border-b-2 border-sky-600 font-bold">
                <button className="uppercase font-bold bg-lime-600 px-8 py-2.5 text-white rounded-md text-xs hover:bg-lime-400 hover:text-black">
                  Or give us a call: 123-456-7890
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>

      <hr />


      <Footer />
    </div>
  )
}
