import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-10 shadow-lg bg-light text-neutral-content' style={{backgroundColor:'#001'}}>
      
      <div className='container mx-auto'>
          <div className='flex-none px-2 mx-2'>
           <FaGithub className='inline pr-2 text-4xl' />
           <Link to='/' className='text-lg font-bold align-middle text-success'>
            {title}
           </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
        <div className= 'flex justify-end'>
          <Link to='/' className='btn btn-success btn-sm rounded-btn mr-5'>Home</Link>
          <Link to='/about' className='btn btn-success btn-sm rounded-btn'>About</Link>
          </div>
          </div>
      </div>
   </nav>
  )
};

Navbar.defaultProps = {
  title: 'GitHub Project',
}

Navbar.propTypes={
  title: PropTypes.string,
}

export default Navbar

