import React from 'react'
import ATM from "../static/card.png"
const Card = () => {
  return (
    <div className='py-10 mt-8 px-4 flex flex-col items-center justify-center'>
      <div className='top'>
        <img className='atm' src={ATM} />
      </div>
      <div className=' mt-12'>
        <h2 className='text-4xl font-bold b mb-8'>Keep your cash flow clear and keep increasing</h2>
        <p className='calmer-white text-md font-normal mb-4'>See it all at a glance when you link you cash accounts, credit card, investments and bills</p>
        <a className='flex items-center justify-center bg-[#72E484] px-8 py-4 rounded-xl w-3/4'>
          <h4 className='text-2xl font-bold mr-8'>Try for now</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
        </a>
      </div>
    </div>
  )
}

export default Card