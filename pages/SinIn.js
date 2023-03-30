import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {auth ,googleProvider} from './firbase/firebase'
import {   signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import useTranslation from 'next-translate/useTranslation'

export default function SinIn() {
  const { t }=useTranslation()

   
  const { register, handleSubmit, reset, formState } = useForm()
  const { errors } = formState
  const router = useRouter()
  const [user, loading] = useAuthState(auth);
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        router.push('/infopage/AuthDetails')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth,googleProvider)
      .then((userCredential) => {
        console.log(userCredential);
        router.push('/infopage/AuthDetails')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(auth)
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
    
   console.log(` Auth user ${auth}`)
   useEffect(() => {
    if (user) {
      router.push('/infopage/AuthDetails')
    } else {
      console.log("login");
    }
  }, [user]);
  return (
    
      <div className='flex-col justify-center'>
      {   (<form className='flex flex-col justify-center items-center '   >
      <div className="flex-col gap-5 items-center justify-center  ">
          {/* <label className='font-bold text-xl'>Email</label> */}
          <h2 className='text-2xl font-bold text-center m-5'>{t("common:sinIn")}</h2>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="email"
             
            className={`form-control ${errors.email ? 'is-invalid' : ''} m-5 border-solid border-2 rounded w-[400px]  py-[8px] text-center text-black `}
            placeholder={t('common:yourEmail')}
          />
          <div className="  invalid-feedback text-red-600">{errors.email?.message}</div>
        </div>
        <div className="form-group">
          {/* <label className='font-bold text-xl'>Password</label> */}
          <input
          onChange={(e)=>setPassword(e.target.value)}

name="password"
            type="password"
     
            className={`form-control ${errors.password ? 'is-invalid' : ''} m-5 border-solid border-2 rounded w-[400px] py-[8px] text-center   text-black`}
            placeholder={t('common:yourPass')}
          />
          <div className="invalid-feedback text-red-600">{errors.password?.message}</div>
        </div>

        <div className="mt-3 ">
          <button type="submit" className="bg-cyan-900 text-white rounded  px-2 py-1 m-2" onClick={signIn}>
          {t('common:logIn')} 
          </button>
         
        </div>
        <div className="mt-3 p-2 rounded bg-cyan-900 text-white">
           
          <button type='submit' className='flex gap-3' onClick={signInWithGoogle}>
        {t("common:logInGoogle")}  <AiFillGoogleCircle className='text-2xl'/>
          </button>
        </div>
       
      </form>)}
      <div className='flex justify-center' > 
      
         <p className="hover:text-sky-700 p-2">
      <Link href={`/infopage/Auth`}>{t('common:donHaveAccount')}</Link>
          </p> </div>
    
      </div>
  )
}

// import React from 'react'

// function SinIn() {
//   return (
//     <div>
// <form action="" className='flex-col gap-5 items-center justify-center'>
// <div className=' flex w-full justify-center gap-4 mb-5  '>
//     <label className=' ' htmlFor="name"> Your name </label>
// <input type="text"  className='  bg-sky-400'/>
// </div>
// <div className=' flex w-full justify-center gap-4 mb-05'>
//     <label className=' ' htmlFor="name"> Your name </label>
// <input type="text"  className='  bg-sky-300'/>
// </div>
// <div className=' flex col-auto w-full justify-center gap-4 '>
// <button type = 'submit'
//         className = 'bg-sky-900  text-white rounded-md px-5 py-3' >
//        Sin In </button>
// <button type = 'submit'
//         className = 'bg-sky-900  text-white rounded-md px-1 py-0.5' >
//         Sin Up </button>
// </div>
// </form>

//     </div>
//   )
// }

// export default SinIn