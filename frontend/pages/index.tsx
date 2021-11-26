import type { ReactElement } from 'react';
import Welcome from '../components/Layouts/Welcome';
import Index from '../components/Index/Index';

const index = () => {
  return(
    <Index />
  )
} 

index.getLayout = function getAuth(page: ReactElement) {
  return (
    <Welcome>
      {page}
    </Welcome>
  )
}


export default index