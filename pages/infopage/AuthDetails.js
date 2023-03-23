import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firbase/firebase";
import { useRouter } from 'next/router'
 

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(auth);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
       
      })
      .catch((error) => console.log(error));
  };
 
  return (
    <div>
      {authUser ? (
        < div className="flex flex-col text-center  justify-center gap-5 mt-5">
          
         <p >{` You are logged in   ${authUser.displayName} `}</p>

         <p >{` You are logged in   ${authUser.email} `}</p>
         <button type="submit" className=" w-[200px] h-[40px] bg-cyan-900 text-white rounded  px-2 py-1 ml-[600px]" onClick={userSignOut}>
          Sing Out  
          </button>
        </div>
      ) : (
        <p>Signed Out</p>
        
      )}
    </div>
  );
};

export default AuthDetails;