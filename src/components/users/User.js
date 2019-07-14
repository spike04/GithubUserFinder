import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
  const {
    user: {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    },
    repos,
    loading,
    getUser,
    getUserRepos
  } = useContext(GithubContext)

  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, [])

  if (loading) return <Spinner />
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-left mr" /> Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a
            href={html_url}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-dark my-1"
          >
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong>
                  {login}
                </>
              )}
              {company && (
                <>
                  <strong>Company: </strong>
                  {company}
                </>
              )}
              {blog && (
                <>
                  <strong>Website: </strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-white">Pubic Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  )
}

export default User
