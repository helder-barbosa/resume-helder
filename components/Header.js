import Head from 'next/head'
import React from 'react'

const Header = () => {
  return (
    <div className=" flex-wrap sm:flex justify-between">
      <div className="ml-4">
        <div className='mx-3 sm:mx-auto'>
          <h1 className=' text-4xl sm:text-5xl font-light uppercase font-sans my-2'>Helder Barbosa</h1>
          <h2 className='text-2xl font-bold uppercase sm:text-3xl'>FullStack Developer</h2>
        </div>

        <div className='mt-6'>
          <div className=' flex justify-around my-2 p-3 mx-3 sm:mx-auto rounded-xl border bg-gray-100 '>
            <a href='https://github.com/helder-barbosa'><img src='/static/Github.svg' alt="Helder's Github" /></a>
            <a href='https://www.linkedin.com/in/helder-barbosa1/'><img src='/static/Linkedin.svg' alt="Helder's LinkedIn" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header