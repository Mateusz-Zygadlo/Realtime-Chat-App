import NonStandardShape from '../components/NonStandardShape';
import Register from '../components/Register';
import Auth from '../components/Layouts/Auth';
import type { ReactElement } from 'react'

const Login = () => {
  return(
    <div className="w-screen h-screen flex justify-center items-center indexColor">
      <NonStandardShape />
      <div className="bg-black z-10 w-96 border-2 border-black">
        <Register />
      </div>
    </div>
  )
} 

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Auth>
      {page}
    </Auth>
  )
}

export default Login