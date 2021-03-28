import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <ul className="flex justify-between">
        <li>
          <div className="ml-4">
            <h1 className=' text-4xl sm:text-5xl font-bold font-sans my-2'>Helder Barbosa</h1>
            <p className='text-lg font-bold'><a href={user.blog}>{user.blog}</a></p>
            <p className='text-lg'>{user.location}</p>
          </div>
        </li>
        <li>
          <div>
            <img className=" mt-2 mr-4 rounded-xl shadow-xl" id="profile-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQGRfXT5yTyCSw/profile-displayphoto-shrink_800_800/0/1593634089642?e=1622073600&v=beta&t=9wBlVClqU8vTKFW9t11RL28Qc9aqZTRWCjlE7qc1gO4" alt="Helder Barbosa photograph" />
          </div>
        </li>
      </ul>

      <div className=" text-center">
        <h3 className='text-2xl font-bold font-sans my-2'>My Education</h3>
        <div className=" rounded-xl border bg-gray-100 mx-4 my-4 p-4 hover:shadow-lg" >
          <ul className="grid grid-cols-2">
            <li>
              <div>
                <h5 className="text-lg font-bold font-sans">Graduação</h5>
                <p>Análise e Desenvolvimento de Sistemas</p>
                <p>Universidade Tiradentes</p>
                <p>2018 - 2021</p>

              </div>
            </li>
            <li>
              <div>
                <h5 className="text-lg font-bold font-sans">Curso Técnico</h5>
                <p>Full Stack Master</p>
                <p>devPleno</p>
                <p>2020 - 2021</p>
              </div>
            </li>
          </ul>
        </div>
      </div>



      <h3 className='text-2xl font-bold font-sans text-center my-2'>Meus repositórios no GitHub :</h3>

      <pre className=" block flex-wrap sm:grid grid-cols-2">{repos.map(repo => {
        return (
          <div key={repo.id} className=' rounded-xl border bg-gray-100 mx-4 my-4 p-5 hover:shadow-lg'>
            <h3 className='font-bold text-lg flex-nowrap'><a href={repo.html_url}>{repo.full_name}</a></h3>
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