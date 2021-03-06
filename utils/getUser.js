

const getUser = async (username) => {

  const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  const originalRepos = await resRepos.json()

  const resUser = await fetch('https://api.github.com/users/' + username)
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
    repos,
    user
  }
}

export default getUser
