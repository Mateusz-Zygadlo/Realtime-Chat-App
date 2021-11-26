import React, { useState } from "react";

const Index = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  
  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Hello home page</h1>
      {isLogin ?  
        <button type="submit" className="buttonStyle shapeBg">Go to chat</button>
      :
        <>
          <button type="submit" className="buttonStyle shapeBg">Login</button>
          <button type="submit" className="buttonStyle shapeBg">Register</button>
        </>
      }
    </>
  )
}

export default Index;