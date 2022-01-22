import React from "react";
import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <>
    
   <div className="flex justify-center item-center">
     <Loader type="Puff" color ="#000FFF" height={550} width={0}/>

     </div>
     
      
    </>
  );
}