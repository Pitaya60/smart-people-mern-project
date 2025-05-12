import React from 'react'
import { Link } from "react-router-dom";
import bannerImg from "../../assets/builds.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='text-5xl font-bold mb-2 text-[#282828]'> 
              Smart People
            </h1>
            <p className='<p className="text-[#282828]/70 text-lg mb-8 max-w-xl'>
            Используйте инновационные данные и аналитические решения для устойчивого развития города и улучшения жизни его жителей.
              </p>

            <button className="bg-primary text-white px-8 py-4 rounded hover:bg-secondary transition">
               <Link to="/login"
        >   Перейти на Smart People
        </Link>
        </button>
        </div>

       
    </div>
  )
}

export default Banner