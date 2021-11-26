import type { ReactElement } from 'react';
import Auth from '../components/Layouts/Auth';
import LoginForm from '../components/Forms/LoginForm';

const Login = () => {
  return(
    <LoginForm />
  )
} 

Login.getLayout = function getAuth(page: ReactElement) {
  return (
    <Auth>
      {page}
    </Auth>
  )
}

export default Login