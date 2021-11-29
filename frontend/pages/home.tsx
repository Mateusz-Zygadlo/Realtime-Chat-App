import type { ReactElement } from 'react';
import Home from '../components/Home/Home';
import Protected from '../components/Layouts/Protected';
import Chat from '../components/Layouts/Chat';

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
      <Chat>{page}</Chat>
    </Protected>
  )
}


export default home;