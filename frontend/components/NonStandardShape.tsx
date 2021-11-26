import type { NextPage } from 'next';
import React from 'react';

const NonStandardShape: NextPage = () => {
  const changeColor = (e: React.MouseEvent<HTMLDivElement>) => {
    let element = e.target as HTMLDivElement;
    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
  const newArr = new Array<number>(1000).fill(1);
  
  return(
    <>
      <div className="testClass w-full h-full z-0 overflow-hidden">
        {newArr.map(() => (
          <div key={Math.random() * 10000} className="w-10 h-10 rounded-full absolute border-2 border-black" style={{top: `${Math.random() * 99}%`, left: `${Math.random() * 99}%`, backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}} onMouseEnter={(e)=>{changeColor(e)}}></div>
        ))}
      </div>
    </>
  )
}

export default NonStandardShape;