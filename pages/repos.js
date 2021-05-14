import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h3 className='text-2xl font-bold font-mono my-2'>Meus repositórios no GitHub :</h3>

      <pre>{repos.map(repo => {
        return (
          <div key={repo.id} className=' border bg-gray-100 mx-4 my-4 p-4 hover:shadow-md'>
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