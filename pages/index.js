import React from 'react'
import getUser from '../utils/getUser'
import Head from 'next/head'

const Index = ({ repos, user }) => {
  return (
    <div id='header' className='container mx-auto'>
      <Head>
        <title>Helder Barbosa - FullStack Developer</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <div>
        <ul className="flex justify-between">
          <li>
            <div className="ml-4">
              <h1 className=' text-4xl sm:text-5xl font-bold font-sans my-2'>Helder Barbosa</h1>
              <h2 className='text-2xl font-bold uppercase sm:text-3xl'>FullStack Developer</h2>
              <div className='mt-6'>
                <div className=' flex justify-around my-2 p-3 mx-auto rounded-xl border bg-gray-100 '>
                  <a href='https://github.com/helder-barbosa'><img src='/static/Github.svg' alt="Helder's Github" /></a>
                  <a href='https://www.linkedin.com/in/helder-barbosa1/'><img src='/static/Linkedin.svg' alt="Helder's LinkedIn" /></a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className=" mt-2 mr-4 rounded-xl shadow-xl" id="profile-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQGRfXT5yTyCSw/profile-displayphoto-shrink_800_800/0/1593634089642?e=1622073600&v=beta&t=9wBlVClqU8vTKFW9t11RL28Qc9aqZTRWCjlE7qc1gO4" alt="Helder Barbosa photograph" />
            </div>
          </li>
        </ul>
      </div>

      <div className=" text-center">
        <h3 className='text-2xl font-bold font-sans my-2'>What I Do ?</h3>
        <div className=" rounded-xl border bg-gray-100 mx-4 my-4 p-4 hover:shadow-lg" >
          <p className=' text-base font-semibold p-3' >
            FullStack Developer with knowledge in JavaScript, NodeJS and ReactJS.
            Undergraduate in System Analysis and Development, concluding in 2021.
            Hungry to Learn all the things that will improve my skills.

          </p>
        </div>
      </div>

      <div className=" text-center">
        <h3 className='text-2xl font-bold font-sans my-2'>My Education</h3>
        <div className=" rounded-xl border bg-gray-100 mx-4 my-4 p-4 hover:shadow-lg" >
          <ul className="grid grid-cols-2">
            <li>
              <div className='font-sans'>
                <h5 className="text-lg font-bold ">Undergraduate</h5>
                <p>System Analysis and Development</p>
                <p>Universidade Tiradentes</p>
                <p>2018 - 2021</p>

              </div>
            </li>
            <li>
              <div className=' font-sans'>
                <h5 className="text-lg font-bold">Programming Course</h5>
                <p>FullStack Master</p>
                <p>devPleno</p>
                <p>2020 - 2021</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-bold font-sans text-center my-2'>My repositories on GitHub :</h3>

      <pre className=" block flex-wrap sm:grid grid-cols-3">{repos.map(repo => {
        return (
          <div
            key={repo.id}
            className=' font-sans rounded-xl border 
            bg-gray-100 p-5 mx-2 my-2 sm:mx-3 my-3 
            p-4 hover:shadow-lg'>
            <h3 className=' italic font-bold sm:text-lg flex-nowrap'><a href={repo.html_url}>{repo.full_name}</a></h3>
            <ul>
              <li>Language: {repo.language}</li>
              <li>Updated : {repo.updated_at.split('T', 1)}</li>
            </ul>
          </div>
        )
      })}
      </pre>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('helder-barbosa')

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index