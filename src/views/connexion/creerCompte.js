import React from 'react'
import ImagesSlide from './components/imagesSlide'
import { SignUpForm } from './components/loginForm'

export default function SignUp() {
  return (
    <div className='w-screen bg-[#5d586f] h-screen rounded-md flex justify-center items-center'>
      <div className='bg-[#2b2738] flex w-10/12 h-5/6 p-3 rounded-md'>
        <ImagesSlide/>
        <SignUpForm/>
      </div>
    </div>
  )
}
