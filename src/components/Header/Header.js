import React from 'react'
import headerImg from '../../assets/lws.svg'

const Header = () => {
  return (
    <>
         <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
            <h2 className='font-bold text-2xl pl-10'>Blog Webpage</h2>
                {/* <a href="index.html">
                    <img
                        className="h-10"
                        src="hjgjgh"
                        alt="Blog Webpage"
                    />
                </a> */}
            </div>
        </nav>
    </>
  )
}

export default Header


// github.com/Learn-with-Sumit/think-in-a-redux-way