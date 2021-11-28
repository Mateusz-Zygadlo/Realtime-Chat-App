import React, { useEffect } from "react";
import type { NextPage } from 'next';
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const Protected: NextPage = ({ children }) => { 
  const Router = useRouter();
  
  let userToken: any;
  const decodeUser = () => {
    if(!userToken){
      return Router.replace("/");
    }
    const decoded = jwt_decode(userToken);

    return decoded;
  }

  useEffect((): any => {
    if (typeof document !== 'undefined') {
      userToken = document.cookie.split(' ')[0].split('=')[1];

      if(!userToken){
        return Router.replace("/");
      }

      const user = decodeUser();
  
      if(!user){
        return Router.replace("/");
      }
    }
  }, [])

  return(
    <>{children}</>
  )
}

export default Protected;