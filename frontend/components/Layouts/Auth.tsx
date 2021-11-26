import type { NextPage } from 'next';

const Auth: NextPage = ({ children }) => {
  return(
    <div>
      <div className="absolute z-10 testShape w-full h-full"></div>
      <div className="absolute z-10 testShapeTwo w-full h-full"></div>
      {children}
    </div>
  )
}

export default Auth;