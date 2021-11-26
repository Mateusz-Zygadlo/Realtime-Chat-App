import type { ReactElement } from 'react';
import FailedAuth from '../components/Layouts/FailedAuth';
import Link from 'next/link';

const failedAuth = () => {
  return(
    <>
      <h1 className="text-3xl flex justify-center text-center my-5 font-extrabold text-white">An error occured. Try again</h1>
      <Link href='/login' passHref>
        <button className="buttonStyle shapeBg">Login</button>
      </Link>
      <Link href='/register' passHref>
        <button className="buttonStyle shapeBg">Register</button>
      </Link>
    </>
  )
} 

failedAuth.getLayout = function getAuth(page: ReactElement) {
  return (
    <FailedAuth>
      {page}
    </FailedAuth>
  )
}


export default failedAuth;