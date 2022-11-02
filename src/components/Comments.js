import React, {useEffect} from 'react'
import Glide from "@glidejs/glide";

const Comments = () => {
  const slider = new Glide('.glide', {
    type: 'carousel',
    perView: 2,
    hoverpause: true,
    autoplay: 2000,
    breakpoints: {
      800: {
        perView: 1
      },
      1200: {
        perView: 2
      }
    },
    
  })
 
  useEffect(() => {
    
    return () => slider.mount()
  }, [slider])
  
  return (
    
      <div className="glide">
        
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide bg-white px-3 py-8 rounded-2xl">
              <div className=''>
                <h3 className='b text-2xl font-bold mb-6'>My Networth is already $34k</h3>
                <q className='calmer-white'>When I got frustrated with MINT, I found UNINE through some random blog post and I've never looked back</q>
              </div>
              <div className='flex items-center justify-between mt-6'>
                <div className='flex items-center'>
                  <div className='avatar mr-3'>
                    <img className='h-12 w-12 rounded-3xl' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                  </div>
                  <div className='flex flex-col'>
                    <h4 className='b text-lg font-bold'>Wade Waren</h4>
                    <p className='calmer-white'>2 Years as a UNINE user</p>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                </div>
              </div>
            </li>

            <li className="glide__slide bg-white px-3 py-8 rounded-2xl">
              <div className=''>
                <h3 className='b text-2xl font-bold mb-6'>My Networth is already $44k</h3>
                <q className='calmer-white'>When I got frustrated with MINT, I found UNINE through some random blog post and I've never looked back</q>
              </div>
              <div className='flex items-center justify-between mt-6'>
                <div className='flex items-center'>
                  <div className='avatar mr-3'>
                    <img className='h-12 w-12 rounded-3xl' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                  </div>
                  <div className='flex flex-col'>
                    <h4 className='b text-lg font-bold'>Wade Waren</h4>
                    <p className='calmer-white'>2 Years as a UNINE user</p>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                </div>
              </div>
            </li>

            <li className="glide__slide bg-white px-3 py-8 rounded-2xl">
              <div className=''>
                <h3 className='b text-2xl font-bold mb-6'>My Networth is already $60k</h3>
                <q className='calmer-white'>When I got frustrated with MINT, I found UNINE through some random blog post and I've never looked back</q>
              </div>
              <div className='flex items-center justify-between mt-6'>
                <div className='flex items-center'>
                  <div className='avatar mr-3'>
                    <img className='h-12 w-12 rounded-3xl' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                  </div>
                  <div className='flex flex-col'>
                    <h4 className='b text-lg font-bold'>Wade Waren</h4>
                    <p className='calmer-white'>2 Years as a UNINE user</p>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mr-2 text-[#FFD700]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        
      </div>

    
  )
}

export default Comments