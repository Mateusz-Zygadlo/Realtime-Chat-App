import type { NextPage } from 'next';

const Auth: NextPage = ({ children }) => {
  return(
    <div className="w-screen h-screen flex justify-center items-center indexColor">
      <div className="absolute z-10 ShapeOne w-full h-full"></div>
      <div className="absolute z-10 ShapeTwo w-full h-full"></div>
      <div className="bg-black z-10 w-96 border-2 border-black">{children}</div>
    </div>
  )
}

export default Auth;