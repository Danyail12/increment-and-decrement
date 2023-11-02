import React, { useEffect, useState } from 'react'

const Submit = () => {


    // const initialData= 15;
    const [valueData,SetvalueData]=useState(0);
        useEffect(()=>{
          if(!valueData){
            document.title=`INCREMENT`;
          }
          else{

            document.title=`chats ${valueData}`;
          }
    });
  return (
    <>
     <div className='main'>
        <p>{valueData}</p>
        <div className='button2' onClick={()=>(valueData < 5 ? SetvalueData(valueData + 1):SetvalueData(0))}>

        <span></span> 
        <span></span>
        <span></span>
        <span></span>
            INCR
        </div>
        <div className='button2' onClick={()=>(valueData > 0 ? SetvalueData(valueData - 1):SetvalueData(0))}>

        <span></span> 
        <span></span>
        <span></span>
        <span></span>
            DECR
        </div>
        </div> 
    </>
  )
}

export default Submit
