import type { NextPage } from 'next';

const Chat: NextPage = ({ children }) => {
  return(
    <div className="w-screen h-screen flex justify-center items-center indexColor">
      <div className="absolute z-10 chatShapeOne w-full h-full shapeColor shapePositionTop"></div>
      <div className="absolute z-10 chatShapeTwo w-full h-full shapeColor shapePositionBottom"></div>
      <div className="bg-black z-10 w-96 border-2 border-black">{children}</div>
    </div>
  )
}

export default Chat;