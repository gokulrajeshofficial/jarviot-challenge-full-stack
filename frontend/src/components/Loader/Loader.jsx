import React from 'react'

function LogoLoader(props) {
  if(!props.isVisible) return (null)
  return (
    <div className='fixed inset-0  bg-black bg-opacity-75 backdrop-blur-sm  grid place-content-center'>

<div className='flex-col flex justify-center items-center'>
        <img className='w-40 animate-bounce' src="./images/logo.svg" alt="" />

        <p className='mt-10 text-white font-ubuntu lg:text-base animate-pulse'>Loading ....Please wait </p>
        </div>
   
    </div>

  )
}

export default LogoLoader