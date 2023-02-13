import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import React, { useRef } from 'react'

import emailjs from '@emailjs/browser'

import * as yup from 'yup'

function ContactUs() {
  const schema = yup.object().shape({
    firstName: yup.string().required('Your Full Name is Required!'),
    lastName: yup.string().required('Your Last Name is Required!'),
    email: yup.string().email().required('Your Email is Required!'),
    message: yup.string().required('Your Message is Required!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const form = useRef()

  const sendEmail = () => {
    console.log('hey')
    //  e.preventDefault();

    emailjs
      .sendForm(
        'service_21dgncx',
        'template_rvkuj9b',
        form.current,
        'THcaIEhH6x_Hp_92h'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.current.reset()
  }

  return (
    <div className='flex  justify-center my-[100px] gap-3 small:flex-col '>
      <div className=' w-full flex-1  justify-center   small:m-5'>
        <h1 className='text-4xl subpixel-antialiased text-center text-slate-600 font-semibold'>
          Get In Touch
        </h1>
        <form
          className='flex w-full flex-col gap-3 mt-10'
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className='flex flex-col  w-full gap-3'>
            <div className='flex  w-full justify-center  gap-2 small:flex-col medium:flex-col'>
              <label className=' w-1/2 flex flex-col' htmlFor='name'>
                {' '}
                <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'></p>
                <input
                  className='px-6 py-2   border-2 border-gray-900'
                  type='text'
                  placeholder='Name'
                  name='firstName'
                  {...register('firstName')}
                  id='n44ame'
                />
                <p className='text-sm text-red-500 text-left'>
                  {errors?.firstName?.message}
                </p>
              </label>
              <label className='w-1/2 flex flex-col' htmlFor='name'>
                {' '}
                <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
                  {' '}
                </p>
                <input
                  className='px-6 py-2   border-2 border-gray-900'
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  {...register('lastName')}
                  id='nam3e'
                />
                <p className='text-sm text-red-500 text-left'>
                  {errors?.lastName?.message}
                </p>
              </label>{' '}
            </div>
          </div>
          <div className='w-full small:mx-0 medium:mx-0'>
            {' '}
            <label htmlFor='email' className='flex justify-center flex-col '>
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'></p>
              <input
                className='px-3 py-2   border-2 border-gray-900'
                name='email'
                placeholder='example@email.com'
                type='text'
                {...register('email')}
                id='name1'
              />
              <p className='text-sm text-red-500 text-left'>
                {errors?.email?.message}
              </p>
            </label>
          </div>
          <div className='w-full small:mx-0 medium:mx-0'>
            {' '}
            <label htmlFor='email' className='flex justify-center flex-col '>
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
                Message :
              </p>
              <textarea
                className='border-2 border-gray-900'
                {...register('message')}
                name='message'
                cols='30'
                rows='3'
              />

              <p className='text-sm text-red-500 text-left'>
                {errors?.message?.message}
              </p>
            </label>
          </div>

          <div className='flex justify-start'>
            <button
              type='submit'
              className='bg-sky-900  text-white rounded-md px-5 py-3'
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <div className='flex-1   m-5 '>
        <h1 className='text-4xl text-center subpixel-antialiased text-slate-600 font-semibold mb-10'>
          Contact Us
        </h1>

        <div className=' flex-col text-2xl text-center   gap-10'>
          <div className='flex flex-row justify-center  gap-3 mb-7'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>
            Iraq, Erbil
          </div>
          <div className='flex flex-row justify-center gap-3 mb-7'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>
            +964 750 766 31 63
          </div>
          <div className='flex flex-row justify-center gap-3 mb-7'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
              />
            </svg>
            electronicdevises@gmail.com
          </div>
          <div className='flex flex-row justify-center gap-3 mb-7 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            24 hours
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
