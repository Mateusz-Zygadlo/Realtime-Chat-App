import type { ReactElement } from 'react';
import Protected from '../components/Layouts/Protected';
import Welcome from '../components/Layouts/Welcome';

const home = () => {
  return(
    <div>
      Welcome to chat app
    </div>
  )
} 

home.getLayout = function getAuth(page: ReactElement) {
  return (
    <Protected>
      <Welcome>{page}</Welcome>
    </Protected>
  )
}


export default home;