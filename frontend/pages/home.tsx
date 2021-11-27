import type { ReactElement } from 'react';
import Home from '../components/Home/Home';
import Protected from '../components/Layouts/Protected';
import Welcome from '../components/Layouts/Welcome';

const home = () => {
  return(
    <>
      <Home />
    </>
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