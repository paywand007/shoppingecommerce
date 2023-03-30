import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firbase/firebase";
 import { useForm } from 'react-hook-form'
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'

 const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const { register,formState } = useForm()
   const { errors } = formState
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { t }=useTranslation()

  return (
    <div className="sign-in-container">
       <form className='flex flex-col justify-center items-center '  onSubmit={signUp}  >
       <div className="flex-col gap-5 items-center justify-center  ">
          {/* <label className='font-bold text-xl'>Email</label> */}
           <h2 className='text-2xl font-bold text-center m-5'>{t("common:CreateYourAccount")}</h2>
           <input
                 
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
             name="password"
             type="password" 
             
             className={`form-control ${errors.password ? 'is-invalid' : ''} m-5 border-solid border-2 rounded w-[400px] py-[8px] text-center   text-black`}
             placeholder={t('common:yourPass')}
           />
           <div className="invalid-feedback text-red-600">{errors.password?.message}</div>
         </div>

         <div className="mt-3 ">
           <button type="submit" className="bg-cyan-900 text-white rounded  px-2 py-2 m-2">
           {t("common:CreateYourAccount")}
           </button>
         
         </div>
       
       </form>
       <div className='flex justify-center' > 
       <p className="hover:text-sky-700 p-2">  <Link href={`/SinIn`}>{t("common:IfYouHaveAccount")}</Link></p>
           </div>
    </div>
  );
};

export default SignUp;

// import {useState} from 'react'
// import { useForm } from 'react-hook-form'
//  import { createUserWithEmailAndPassword } from 'firebase/auth'
//  import {auth} from'../firbase/firebase'
// import Link from 'next/link'

// export default function Auth() {
  
//   const { register,formState } = useForm()
//   const { errors } = formState
 
//   const signUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//    const [email,setEmail]=useState('')
//    const [password,setPassword]=useState('')
//   return (
    
//       <div className='flex-col justify-center'>
//       <form className='flex flex-col justify-center items-center '  onSubmit={signUp}  >
//       <div className="flex-col gap-5 items-center justify-center  ">
//           {/* <label className='font-bold text-xl'>Email</label> */}
//           <h2 className='text-2xl font-bold text-center m-5'>Create Your Account</h2>
//           <input
                

//             name="email"
//             type="email"
            
//             {...register('email')}
//             className={`form-control ${errors.email ? 'is-invalid' : ''} m-5 border-solid border-2 rounded w-[400px]  py-[8px] text-center text-black `}
//           placeholder='Enter Email'
//           />
//           <div className="  invalid-feedback text-red-600">{errors.email?.message}</div>
//         </div>
//         <div className="form-group">
//           {/* <label className='font-bold text-xl'>Password</label> */}
//           <input
//            onChange={e=>setPassword(e.target.value)}
// name="password"
//             type="password"
            
//             {...register('password')}
//             className={`form-control ${errors.password ? 'is-invalid' : ''} m-5 border-solid border-2 rounded w-[400px] py-[8px] text-center   text-black`}
//             placeholder=' Enter Password'
//           />
//           <div className="invalid-feedback text-red-600">{errors.password?.message}</div>
//         </div>

//         <div className="mt-3">
//           <button type="submit" className="bg-cyan-900 text-white rounded  px-2 py-1 m-2">
//            Create Account 
//           </button>
         
//         </div>
       
//       </form>
//       <div className='flex justify-center' > 
//          <p  className="">
//        Already have Account ? <Link href={`/SinIn`}>Sin Up</Link>
//           </p> </div>
    
//       </div>
//   )
// }

 