import React from 'react'
import logo from '../static/logo.JPG'

const Header = ({toggleModal}) => {
  return (
    <div className='flex items-center justify-between py-2 px-6 mt-4'>
      <div className='logo'>
        <h1 className='text-2xl text-white font-bold'>UNINE</h1>
        {/* COuld not get the logo */}
        {/* <img src={logo} className=" w-32" /> */}
      </div>
      <div className='sm-nav' onClick={toggleModal}>
        <div className='w-full bg-white h-1 mb-1'></div>
        <div className='w-2/3 bg-white h-1 mb-1'></div>
        <div className='w-1/3 bg-white h-1 mb-1'></div>
      </div>

    </div>
  )
}

export default Header