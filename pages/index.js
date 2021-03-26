import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold font-sans my-2'>Helder Barbosa</h1>
      <p className='text-lg font-bold'><a href={user.blog}>{user.blog}</a></p>
      <p className='text-lg'>{user.location}</p>
      <h3 className='text-2xl font-bold font-sans my-2'>Meus repositórios no GitHub :</h3>

      <pre>{repos.map(repo => {
        return (
          <div key={repo.id} className=' border bg-gray-100 mx-4 my-4 p-4 hover:shadow-lg'>
            <h3 className='font-bold text-lg'><a href={repo.html_url}>{repo.full_name}</a></h3>
            <p>Language: {repo.language} / updated : {repo.updated_at.split('T', 1)}</p>
          </div>
        )
      })}</pre>
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