import React from 'react'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold font-mono my-2'>Helder Barbosa</h1>
      <p className='text-lg font-bold'><a href={user.blog}>{user.blog}</a></p>
      <p className='text-lg'>{user.location}</p>
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
  const resRepos = await fetch('https://api.github.com/users/helder-barbosa/repos?sort=updated')
  const originalRepos = await resRepos.json()

  const resUser = await fetch('https://api.github.com/users/helder-barbosa')
  const user = await resUser.json()

  const dontShowRepos = ['']

  const isNotFork = repo => !repo.fork
  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
  const extractData = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    updated_at: repo.updated_at,
    html_url: repo.html_url
  })

  const repos = originalRepos
    .filter(isNotFork)
    .filter(dontShowFilter)
    .map(extractData)

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user

    }
  }
}

export default Index