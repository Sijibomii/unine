import React from 'react'
import Google from '../static/google-play-badge.png'
import Apple from '../static/App_Store.png'
const Download = () => {
  return (
    <div className='bg-[#72E484] flex items-center justify-center px-4 py-12'>
      <div className=''>
        <div className=''>
          <h2 className='text-3xl font-black b text-center'>Get Unine App on Google Play or App Store</h2>
        </div>
        <div className='py-2 mt-6'>
          <p className='text-center font-normal'>
            Build your financial literacy with a transparent community. Follow other investors share insights with people
          </p>
        </div>
        <div className='flex items-center justify-center sm-apps'>
          <img src={Apple} className='h-36 w-44'   />
          <img src={Google} className='h-20 w-44'  />
      </div>
      </div>
    </div>
  )
}

export default Download