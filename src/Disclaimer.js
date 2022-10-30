import React from 'react'

const Disclamier = () => {
  return (
    <div className=' flex flex-col items-center justify-center py-1'>
      <div className='flex items-center justify-center'>
        <h3 className='text-white'>See actual dribble design </h3>
        <a className='text-[#74E286] ml-2'
         href='https://dribbble.com/shots/18770240-Unine-Finance-Landing-Page-App-Live'>here</a>
      </div>

      <div className='flex items-center justify-center'>
        <h3 className='text-white'>See Source code </h3>
        <a className='text-[#74E286] ml-2'
         href='https://github.com/Sijibomii/unine'>here</a>
      </div>
    </div>
  )
}

export default Disclamier