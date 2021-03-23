import React from 'react'

const Index = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <div>{props.currentDate}</div>
      <pre>{props.repos.map(repo => {
        return (
          <div>
            <p>---------------------------------------------</p>
            <h3><a href={repo.html_url}>{repo.full_name}</a></h3>
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
      repos

    }
  }
}

export default Index