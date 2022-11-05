import React from 'react'
import Info1 from '../static/info1.png'
import Info2 from '../static/info2.png'
import Info3 from '../static/info3.png'
import Info4 from '../static/info4.png'
const Info = () => {
  return (
    <div className='px-2 pt-16 pb-10 bg-[#F8F8F8]'>
      <div className='top px-2'>
        <h2 className='text-3xl text-center b font-bold'>Safe & Convienent Transaction</h2>
        <p className='font-semibold text-lg calmer-white text-center mt-8'>Want to pay anything so easy with the touch of a finger. Through UNINE you can make practically any transaction</p>
      </div>
      <div className='py-4 px-6 mt-10'>
        <div className='flex flex-col justify-center bg-[#FFF] px-6 py-10 rounded-2xl'>
          <div className='top'>
            <img src={Info1} className="h-16 w-22" />
          </div>
          <div className='bottom mt-14'>
            <h4 className='b text-2xl font-bold'>Always protected</h4>
            <p className='calmer-white mt-4 text-xl mt-8'>Shopping with UNINE is even more secure thanks to Buyer protection</p>
          </div>
        </div>

        <div className='flex flex-col justify-center bg-[#72E484] mt-10 px-6 py-10 rounded-2xl'>
          <div className='top bg-[#FFF] w-1/4 flex items-center justify-center rounded-2xl'>
            <img src={Info2} className="h-16 w-22" />
          </div>
          <div className='bottom mt-14'>
            <h4 className='b text-2xl font-bold'>Get Reward</h4>
            <p className='b mt-4 text-xl mt-8'>You can keep using your favourite card and keep getting reward</p>
          </div>
        </div>

        <div className='flex flex-col justify-center bg-[#FFF] mt-10 px-6 py-10 rounded-2xl'>
          <div className='top bg-[#FFF] w-1/4 flex items-center justify-center rounded-2xl'>
            <img src={Info3} className="h-16 w-22" />
          </div>
          <div className='bottom mt-14'>
            <h4 className='b text-2xl font-bold'>No hidden fees</h4>
            <p className='calmer-white mt-4 text-xl mt-8'>You will only be charged for selling goods or requesting payment</p>
          </div>
        </div>

        <div className='flex flex-col justify-center bg-[#FFF] mt-10 px-6 py-10 rounded-2xl'>
          <div className='top bg-[#FFF] w-1/4 flex items-center justify-center rounded-2xl'>
            <img src={Info4} className="h-16 w-22" />
          </div>
          <div className='bottom mt-14'>
            <h4 className='b text-2xl font-bold'>Free Shipping</h4>
            <p className='calmer-white mt-4 text-xl mt-8'>Changed your mind after buying? Send back the item you purchased</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Info