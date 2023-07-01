import React from 'react'
import Navbar from './Navbar';

const Result = () => {

  var mark = 100;
  return (
    <>

      <Navbar></Navbar>
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold'>Excellent! You got {mark} marks</h1>
      </div>
    </>
  )
}

export default Result