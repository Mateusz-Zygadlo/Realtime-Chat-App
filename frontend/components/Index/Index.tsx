import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import Link from 'next/link';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['JWT-TOKEN']);
  const Router = useRouter();

  let userToken: any;
  const decodeUser = () => {
    try{
      const decoded = jwt_decode(userToken);

      if(!decoded){
        return Router.replace("/register");
      }
  
      return decoded;
    }catch(err){
      removeCookie('JWT-TOKEN');
      
      return console.log(err);
    }
  }

  useEffect((): any => {
    if (typeof document !== 'undefined') {
      userToken = document.cookie.split(' ')[0].split('=')[1];
      
      if(!userToken){
        return;
      }

      const user = decodeUser();
  
      if(user){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    }
  }, [])
  
  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Hello home page</h1>
      {isLogin ?  
        <>
          <Link href='/home' passHref>
            <button className="buttonStyle shapeBg">Go to chat</button>
          </Link>
          <Link href='http://localhost:8000/auth/logout' passHref>
            <button className="buttonStyle shapeBg">Logout</button>
          </Link>
        </>
      :
        <>
          <Link href='/login' passHref>
            <button className="buttonStyle shapeBg">Login</button>
          </Link>
          <Link href='/register' passHref>
            <button className="buttonStyle shapeBg">Register</button>
          </Link>
        </>
      }
    </>
  )
}

export default Index;