import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Repos = ({ repos }) => {
  return (
    <div className="my-3">
      <h2>Repos</h2>
      <div>
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repos
