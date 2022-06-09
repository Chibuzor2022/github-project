import {FaEye,FaLink,FaStar, FaCodeBranch} from 'react-icons/fa'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const{name,description,html_url, forks,watchers_count, stargazers_count,}=repo
  return (
    <div className='mb-2 rounded-md card bg-base-100 hover:bg-gray-700'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-bold'>
          <a href={html_url}>
            <FaLink className='inline mr-1'/>{name}
          </a>

        </h3>
        <p className='mb-3'>{description}</p>
        <div className='mr-2 badge badge-info badge-lg'>
          <FaEye className='mr-2'/>{watchers_count}

        </div>
        <div className='mr-2 badge badge-success badge-lg'>
          <FaStar className='mr-2'/>{stargazers_count}

        </div>
        
        <div className='mr-2 badge badge-warning badge-lg'>
          <FaCodeBranch className='mr-2'/>{forks}

        </div>


      </div>

    </div>
  )
}
RepoItem.propType = {
  
  repo: PropTypes.object.isRequired
}

export default RepoItem