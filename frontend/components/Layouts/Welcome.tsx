import type { NextPage } from 'next';

const Welcome: NextPage = ({ children }) => {
  return(
    <div className="w-screen h-screen flex justify-center items-center indexColor">
      <div className="absolute z-10 indexShapeOne w-full h-full shapeColor shapePositionTop"></div>
      <div className="absolute z-10 indexShapeTwo w-full h-full shapeColor shapePositionBottom"></div>
      <div className="bg-black z-10 w-96 border-2 border-black">{children}</div>
    </div>
  )
}

export default Welcome;