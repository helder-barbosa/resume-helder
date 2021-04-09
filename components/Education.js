import React from 'react'

const Education = () => {
  return (
    <div className=" text-center">
      <h3 className='text-2xl font-bold font-sans my-2'>My Education</h3>
      <div className=" rounded-xl border bg-gray-100 mx-4 my-4 p-4 hover:shadow-lg" >
        <ul className="grid grid-cols-2">
          <li>
            <div className='font-sans text-lg sm:text-2xl'>
              <h5 className=" font-bold ">Undergraduate</h5>
              <p>System Analysis and Development</p>
              <p>Universidade Tiradentes</p>
              <p>2018 - 2021</p>

            </div>
          </li>
          <li>
            <div className='text-lg  sm:text-2xl font-sans'>
              <h5 className="font-bold">Programming Course</h5>
              <p>FullStack Master</p>
              <p>devPleno</p>
              <p>2020 - 2021</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Education