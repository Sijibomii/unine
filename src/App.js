import Header from "./components/Header";
import Disclamier from "./Disclaimer";
import HeroTop from "./components/HeroTop";
import HeroBottom from "./components/HeroBottom";
import Info from "./components/Info";
import Card from "./components/Card";
import Payment from "./components/Payment";
import Testi from "./components/Testi";
import Download from "./components/Download";
import Footer from "./components/Footer";
import { useRef } from "react";
import { motion } from "framer-motion";
function App() {
  const modal = useRef()
  const body = useRef()

  function toggleModal(){
    modal.current.classList.toggle("hidden");
    body.current.classList.toggle("hidden"); 
  }

  
  return (
    <div className="App max-w-7xl mx-auto" >
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="modal bg-[#101010] hidden h-screen py-20 px-6" ref={modal}>
        <div className="top flex items-center justify-between">
          <motion.h1
          initial={{
            opacity: 0,
            scale: 0.3,
            x: -200
          }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5,
          }}
          className='text-2xl text-white font-bold'>UNINE</motion.h1>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="25" height="25" fill="currentColor" 
            className="bi bi-x text-[#72E484]" 
            onClick={toggleModal}
            viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
          </div>

          <div className="flex items-center justify-center">
            <ul className="py-4 mt-6 flex items-center flex-col justify-center">
              <li className="text-white font-medium text-2xl py- px-2 mb-6">Home</li>
              <li className="text-white font-medium text-2xl py- px-2 mb-6">About</li>
              <li className="text-white font-medium text-2xl py- px-2 mb-6">Service</li>
              <li className="text-white font-medium text-2xl py- px-2 mb-6">Office</li>
              <li className="rounded-lg bg-[#72E484] px-8 py-4">Get in touch</li>
            </ul>
          </div>
        </motion.div>
      <div className="body" ref={body}>
        <div className="top bg-[#101010] pb-10">
          <Disclamier />
          <Header modal={modal} body={body} toggleModal={toggleModal} />
          <HeroTop />
          <HeroBottom />
        </div>
        <Info />
        <Card />
        <Payment />
        <Testi />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;
