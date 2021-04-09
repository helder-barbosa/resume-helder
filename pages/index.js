import React from 'react'
import getUser from '../utils/getUser'
import Head from 'next/head'
import Header from '../components/Header'
import Education from '../components/Education'

const Index = ({ repos, user }) => {
  return (
    <div id='header' className='container mx-auto'>
      <Head>
        <title>Helder Barbosa - FullStack Developer</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Header />

      <div>
        <img className=" mx-auto w-64"
          id="profile-photo"
          src="/static/photo.png" alt="Helder Barbosa photograph" />
      </div>

      <div className=" text-center">
        <div className=" rounded-xl border bg-gray-100 mx-4 mb-4 p-4 hover:shadow-lg" >
          <p className=' sm:text-xl text-base font-semibold p-3' >
            FullStack Developer with knowledge in JavaScript, NodeJS and ReactJS.
            Undergraduate in System Analysis and Development, concluding in 2021.
            Hungry to Learn all the things that will improve my skills.

          </p>
        </div>
      </div>

      <Education />

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