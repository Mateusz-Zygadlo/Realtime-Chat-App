import React, { useState } from "react";
import Link from 'next/link';

const Index = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  
  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Hello home page</h1>
      {isLogin ?  
        <Link href='/home' passHref>
          <button type="submit" className="buttonStyle shapeBg">Go to chat</button>
        </Link>
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