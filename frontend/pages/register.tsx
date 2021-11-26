import type { ReactElement } from 'react'
import Auth from '../components/Layouts/Auth';
import RegisterForm from '../components/Forms/RegisterForm';

const Register = () => {
  return(
    <RegisterForm />
  )
} 

Register.getLayout = function getAuth(page: ReactElement) {
  return (
    <Auth>
      {page}
    </Auth>
  )
}

export default Register;